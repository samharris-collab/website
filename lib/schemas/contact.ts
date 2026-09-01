import { z } from 'zod'

export const budgetRanges = [
  'Under $500',
  '$500–$2K',
  '$2K–$10K',
  '$10K+',
  'Ongoing package',
] as const

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(120, 'That name is longer than we can store.'),
  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email address.')
    .email('That does not look like a valid email address.')
    .max(200),
  company: z.string().trim().max(200).optional().or(z.literal('')),
  outlets: z
    .string()
    .trim()
    .max(500, 'Please keep this under 500 characters.')
    .optional()
    .or(z.literal('')),
  budget: z.enum(budgetRanges).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(10, 'Tell us a little more — at least a sentence.')
    .max(5000, 'Please keep your message under 5,000 characters.'),
  /**
   * Honeypot. Real people never see this field, so anything in it is a bot.
   * It deliberately ACCEPTS any value: rejecting it here would return a 422
   * naming the field, which tells the bot exactly what tripped it. The route
   * checks it after validation and answers 200, so a bot learns nothing.
   */
  website: z.string().max(2000).optional(),
  /** Cloudflare Turnstile token, present only when Turnstile is configured. */
  turnstileToken: z.string().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export const contactDefaults: ContactInput = {
  name: '',
  email: '',
  company: '',
  outlets: '',
  budget: '',
  message: '',
  website: '',
}
