import type { RequestData } from 'node-mailjet/declarations/request/Request'

const CONTACT_FORM_FROM_EMAIL = 'fcarmona.olmedo@gmail.com'
const CONTACT_FORM_TO_EMAIL = 'fcarmona.olmedo@gmail.com'

interface ContactFormData {
  name: FormDataEntryValue
  email: FormDataEntryValue
  message: FormDataEntryValue
}

export const getContactMessage = ({ name, email, message }: ContactFormData): RequestData => {
  return {
    Messages: [
      {
        From: {
          Email: CONTACT_FORM_FROM_EMAIL,
          Name: 'Portfolio - Contact form'
        },
        To: [
          {
            Email: CONTACT_FORM_TO_EMAIL,
            Name: 'Fran Carmona'
          }
        ],
        Subject: 'Portfolio - Contact form',
        HTMLPart: `<h2>${name} (${email})</h2> <p>${message}</p>`
      }
    ]
  }
}
