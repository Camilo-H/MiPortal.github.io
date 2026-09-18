import emailjs from '@emailjs/browser';

const publicKey = 'fYMtc98y3UPKWDT_y';
const serviceID = 'default_service';
const templateID = 'template_hhjs18m';

emailjs.init({ publicKey });

export function sendContactEmail(values: Record<string, string>): Promise<unknown> {
  return emailjs.send(serviceID, templateID, values);
}