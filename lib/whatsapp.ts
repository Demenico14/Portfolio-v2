export const WHATSAPP_NUMBER = "263711314881"; // +263 71 131 4881
export const WHATSAPP_DISPLAY = "+263 711 314 881";

/**
 * Builds a wa.me click-to-chat link with a prefilled message.
 * The bracketed ref code at the end tells you which page/button the chat came from.
 */
export function whatsappLink(message: string, ref: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${message} [ref: ${ref}]`)}`;
}

export const ZIMDRIVE_WAITLIST_URL = whatsappLink(
  "Hi MDL, please add me to the ZimDrive waitlist and let me know when the app launches on Google Play.",
  "zimdrive-waitlist",
);
