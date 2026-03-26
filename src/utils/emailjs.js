// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xqf8lth',
  TEMPLATE_ID: 'template_0fafhc9',
  PUBLIC_KEY: '5ARUwkGWcGbfTxqeO',
};

// Helper function to send email
export const sendEmail = async (formData) => {
  const emailjs = await import('emailjs-com');
  
  const templateParams = {
    from_name: formData.get('from_name'),
    from_email: formData.get('from_email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};