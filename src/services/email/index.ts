import Mailjet from 'node-mailjet'
import type { RequestData } from 'node-mailjet/declarations/request/Request'

const mailjet = new Mailjet({
  apiKey: import.meta.env.MAILJET_API_KEY,
  apiSecret: import.meta.env.MAILJET_SECRET_KEY
})

export const sendEmail = async (requestData: RequestData): Promise<boolean> => {
  try {
    const result = await mailjet.post('send', { version: 'v3.1' }).request(requestData)

    return result && [200, 201].includes(result.response.status)
  } catch (error) {
    return false
  }
}
