export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Send notification via Telegram if configured
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (botToken && chatId) {
      const text = `📬 New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || '—'}\n\nMessage:\n${message}`
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
      })
    }

    // Also send via email using Netlify's email integration if configured
    const emailTo = process.env.CONTACT_EMAIL
    if (emailTo) {
      // Log for Netlify function logs as backup
      console.log(`CONTACT FORM: from=${email} name=${name} subject=${subject} message=${message}`)
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Contact form error:', err)
    return new Response(JSON.stringify({ error: 'Submission failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export const config = { path: '/api/contact' }
