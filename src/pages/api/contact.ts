import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_MAIL_SENDER_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('full-name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const service = formData.get('service')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    await resend.emails.send({
      from: 'noreply@jstilegroutcleaning.com',
      to: ['jstilegroutcleaning@gmail.com'],
      subject: `New Estimate Request - ${name}`,
        html: `
  <div style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e5e5;">
      
      <!-- Header -->
      <div style="background:#1A9EC4; padding: 20px; text-align: center;">
        <img src="https://jstilegroutcleaning.com/images/logo.webp" alt="JS Tile & Grout Cleaning Service LLC" style="width: 160px; margin-bottom: 10px;" />
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Estimate Request</h2>
      </div>

      <!-- Body -->
      <div style="padding: 25px; color: #333;">
        <p style="font-size: 15px; margin-bottom: 10px;">
          You have received a new estimate request from your website.
        </p>

        <table style="width: 100%; margin-top: 15px; font-size: 15px;">
          <tr>
            <td style="font-weight: bold; padding: 6px 0;">Name:</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px 0;">Email:</td>
            <td>${email}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px 0;">Phone:</td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px 0;">Service:</td>
            <td>${service}</td>
          </tr>
        </table>

        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-weight: bold; margin-bottom: 5px;">Message:</p>
        <p style="background: #f1f1f1; padding: 12px; border-radius: 6px;">
          ${message || 'N/A'}
        </p>

        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-size: 13px; color: #777; text-align: center;">
          Sent from the JS Tile & Grout Cleaning website
        </p>
      </div>
    </div>
  </div>
`});
        return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
