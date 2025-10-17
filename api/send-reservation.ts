import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Autoriser uniquement POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, date, guests } = req.body;

    // Validation
    if (!name || !phone || !date || !guests) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Formater la date
    const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Envoyer l'email au restaurant
    const { data: restaurantEmail, error: restaurantError } = await resend.emails.send({
      from: 'Réservations Petit Luchon <reservations@petit-luchon.com>',
      to: ['petitluchon13@gmail.com'], // Email du restaurant
      subject: `🍜 Nouvelle Réservation - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #f7f4ef;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .info-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 15px 0;
                border-left: 4px solid #8B0000;
              }
              .info-row {
                display: flex;
                padding: 10px 0;
                border-bottom: 1px solid #eee;
              }
              .info-row:last-child {
                border-bottom: none;
              }
              .info-label {
                font-weight: bold;
                width: 180px;
                color: #8B0000;
              }
              .info-value {
                flex: 1;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #666;
                font-size: 14px;
              }
              .emoji {
                font-size: 24px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🍜 Nouvelle Réservation</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Restaurant Petit Luchon</p>
            </div>
            
            <div class="content">
              <p style="font-size: 16px; margin-top: 0;">
                <strong>Une nouvelle réservation vient d'être effectuée :</strong>
              </p>
              
              <div class="info-box">
                <div class="info-row">
                  <span class="info-label">👤 Nom du client :</span>
                  <span class="info-value">${name}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">📱 Téléphone :</span>
                  <span class="info-value">${phone}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">📅 Date :</span>
                  <span class="info-value">${formattedDate}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">👥 Nombre de personnes :</span>
                  <span class="info-value">${guests} personne(s)</span>
                </div>
              </div>
              
              <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 0; color: #856404;">
                  <strong>⚠️ Action requise :</strong> N'oubliez pas de confirmer cette réservation en contactant le client.
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p>Cet email a été envoyé automatiquement depuis votre site web<br>
              <a href="https://www.petit-luchon.com" style="color: #8B0000;">www.petit-luchon.com</a></p>
            </div>
          </body>
        </html>
      `,
    });

    if (restaurantError) {
      console.error('Error sending restaurant email:', restaurantError);
      return res.status(500).json({ error: 'Failed to send restaurant email' });
    }

    // Envoyer l'email de confirmation au client
    const { data: clientEmail, error: clientError } = await resend.emails.send({
      from: 'Petit Luchon <noreply@petit-luchon.com>',
      to: [phone.includes('@') ? phone : `${phone}@placeholder.com`], // Si vous avez l'email
      subject: 'Confirmation de votre réservation - Petit Luchon',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f7f4ef;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .button {
                display: inline-block;
                padding: 15px 30px;
                background: #8B0000;
                color: white !important;
                text-decoration: none;
                border-radius: 8px;
                margin: 20px 0;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>✅ Réservation Reçue</h1>
            </div>
            
            <div class="content">
              <p>Bonjour ${name},</p>
              
              <p>Nous avons bien reçu votre demande de réservation pour <strong>${guests} personne(s)</strong> le <strong>${formattedDate}</strong>.</p>
              
              <p>Nous vous contacterons rapidement au <strong>${phone}</strong> pour confirmer votre réservation.</p>
              
              <a href="https://www.petit-luchon.com" class="button">Voir notre site</a>
              
              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
                📍 7 Allée Léon Gambetta, 13001 Marseille<br>
                📞 06 25 43 01 38<br>
                🕐 Tous les jours de 11h00 à 22h00 (fermé les samedis)
              </p>
              
              <p style="color: #666; font-size: 14px;">
                À bientôt au Petit Luchon ! 🍜
              </p>
            </div>
          </body>
        </html>
      `,
    });

    // Note: L'email client peut échouer si pas d'email fourni, c'est normal
    if (clientError) {
      console.log('Client email not sent (expected if no email provided)');
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Reservation sent successfully',
      restaurantEmailId: restaurantEmail?.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}