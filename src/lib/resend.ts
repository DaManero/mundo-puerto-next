import { Resend } from "resend";

import { getMailConfig } from "./env";

let resendClient: Resend | null = null;

export function getResendClient(): Resend {
  if (resendClient) {
    return resendClient;
  }

  const { resendApiKey } = getMailConfig();

  if (!resendApiKey.startsWith("re_")) {
    throw new Error("Invalid RESEND_API_KEY format.");
  }

  resendClient = new Resend(resendApiKey);
  return resendClient;
}
