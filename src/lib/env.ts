type RequiredEnvKey = "RESEND_API_KEY" | "MAIL_FROM" | "MAIL_TO";

function getEnvValue(key: RequiredEnvKey): string {
  const value = process.env[key]?.trim();

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export function getMailConfig() {
  return {
    resendApiKey: getEnvValue("RESEND_API_KEY"),
    mailFrom: getEnvValue("MAIL_FROM"),
    mailTo: getEnvValue("MAIL_TO"),
  };
}
