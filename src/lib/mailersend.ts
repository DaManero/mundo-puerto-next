import { getMailConfig } from "./env";

type MailerSendRequest = {
  from: { email: string };
  to: Array<{ email: string }>;
  reply_to?: { email: string };
  subject: string;
  text: string;
};

type MailerSendResult = {
  ok: boolean;
  id?: string;
  error?: unknown;
};

export async function sendMailWithMailerSend(payload: {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
}): Promise<MailerSendResult> {
  const { mailerSendApiKey } = getMailConfig();

  if (!mailerSendApiKey) {
    return { ok: false, error: "Missing MAILERSEND_API_KEY" };
  }

  const requestBody: MailerSendRequest = {
    from: { email: payload.from },
    to: [{ email: payload.to }],
    subject: payload.subject,
    text: payload.text,
  };

  if (payload.replyTo) {
    requestBody.reply_to = { email: payload.replyTo };
  }

  const response = await fetch("https://api.mailersend.com/v1/email", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${mailerSendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    let errorBody: unknown;

    try {
      errorBody = await response.json();
    } catch {
      errorBody = await response.text();
    }

    return {
      ok: false,
      error: {
        status: response.status,
        body: errorBody,
      },
    };
  }

  const messageId = response.headers.get("x-message-id") ?? undefined;
  return { ok: true, id: messageId };
}
