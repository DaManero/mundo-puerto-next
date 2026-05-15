type RequiredEnvKey = "MAIL_FROM" | "MAIL_TO";

function getEnvValue(key: RequiredEnvKey): string {
  const value = process.env[key]?.trim();

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

function getOptionalEnvValue(key: "RESEND_API_KEY" | "MAILERSEND_API_KEY") {
  return process.env[key]?.trim() ?? "";
}

export function getMailConfig() {
  return {
    resendApiKey: getOptionalEnvValue("RESEND_API_KEY"),
    mailerSendApiKey: getOptionalEnvValue("MAILERSEND_API_KEY"),
    mailFrom: getEnvValue("MAIL_FROM"),
    mailTo: getEnvValue("MAIL_TO"),
  };
}
