import type { APIRoute } from 'astro'
import { sendEmail } from '@services/email'
import { getContactMessage } from '@services/email/utils'

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const name = data.get('name')
  const email = data.get('email')
  const message = data.get('message')

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: 'Validation error',
        errors: {
          email: !email,
          name: !name,
          message: !message
        }
      }),
      { status: 400 }
    )
  }

  const isSent = await sendEmail(getContactMessage({ name, email, message }))

  if (isSent) {
    return new Response(
      JSON.stringify({
        message: 'Message sent!'
      }),
      { status: 200 }
    )
  } else {
    return new Response('There was an error while trying to send the email', { status: 400 })
  }
}
