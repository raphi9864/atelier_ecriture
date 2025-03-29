import nodemailer from 'nodemailer';

export const sendConfirmationEmail = async ({ to, firstName, workshopTitle, date, time }: {
  to: string;
  firstName: string;
  workshopTitle: string;
  date: string;
  time: string;
}) => {
  try {
    // Configuration spécifique pour Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      logger: true, // Active les logs détaillés
      debug: true   // Mode debug
    });

    console.log('Configuration email:', {
      user: process.env.EMAIL_USER,
      serviceEnabled: !!process.env.EMAIL_USER && !!process.env.EMAIL_PASS
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: `Confirmation de réservation - ${workshopTitle}`,
      html: `
        <h1>Confirmation de votre réservation</h1>
        <p>Bonjour ${firstName},</p>
        <p>Votre réservation pour l'atelier "${workshopTitle}" a été confirmée.</p>
        <p>Date : ${date}</p>
        <p>Heure : ${time}</p>
        <p>Merci de votre confiance !</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info.messageId);

  } catch (error) {
    console.error('Erreur détaillée:', error);
    // Ne pas propager l'erreur pour éviter le crash
  }
};