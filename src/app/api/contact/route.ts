import { NextResponse } from "next/server";

import { getMailConfig } from "@/lib/env";
import { getResendClient } from "@/lib/resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  body?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: ContactPayload) {
  const name = normalizeText(payload.name);
  const email = normalizeText(payload.email).toLowerCase();
  const subject = normalizeText(payload.subject);
  const message = normalizeText(payload.message);

  const errors: string[] = [];

  if (!name || name.length < 2) {
    errors.push("El nombre es obligatorio.");
  }

  if (!email || !isValidEmail(email)) {
    errors.push("El email no es valido.");
  }

  if (!subject || subject.length < 3) {
    errors.push("El asunto es obligatorio.");
  }

  if (!message || message.length < 10) {
    errors.push("El mensaje debe tener al menos 10 caracteres.");
  }

  return {
    data: { name, email, subject, message },
    errors,
  };
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
    let payload: ContactPayload;

    if (contentType.includes("application/json")) {
      payload = (await request.json()) as ContactPayload;
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const form = await request.formData();
      payload = {
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        subject: String(form.get("subject") ?? ""),
        message: String(form.get("message") ?? form.get("body") ?? ""),
      };
    } else {
      return NextResponse.json(
        { ok: false, error: "Content-Type no soportado." },
        { status: 415 }
      );
    }

    const mergedPayload: ContactPayload = {
      ...payload,
      message: payload.message ?? payload.body,
    };

    const { data, errors } = validatePayload(mergedPayload);

    if (errors.length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const { mailFrom, mailTo } = getMailConfig();
    const resend = getResendClient();

    const { data: sendData, error } = await resend.emails.send({
      from: mailFrom,
      to: [mailTo],
      replyTo: data.email,
      subject: `[Web] ${data.subject}`,
      text: [
        `Nombre: ${data.name}`,
        `Email: ${data.email}`,
        "",
        "Mensaje:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el mensaje." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: sendData?.id }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, error: "Solicitud invalida o error interno." },
      { status: 500 }
    );
  }
}
