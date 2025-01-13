import emailjs from '@emailjs/browser';

emailjs.init("TU_PUBLIC_KEY");

export const emailConfig = {
  serviceId: "TU_SERVICE_ID",
  templateId: "TU_TEMPLATE_ID",
};
