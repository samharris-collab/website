/**
 * Exercises /api/contact end to end against the running build.
 *
 * Assumes RESEND_API_KEY is NOT set, which is the state on a preview deploy: a
 * valid submission should answer 503 EMAIL_NOT_CONFIGURED so the form can offer
 * a prefilled mailto rather than a false success. With a key set, expect 200.
 *
 *   node scripts/check-contact-api.mjs
 */
const API = 'http://127.0.0.1:3100/api/contact'

const post = async (body, headers = {}) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
  return { status: res.status, json: await res.json().catch(() => ({})) }
}

const valid = (n = 1) => ({
  name: `Test Person ${n}`,
  email: `test${n}@example.com`,
  message: `A perfectly ordinary inquiry, number ${n}, long enough to pass validation.`,
})

const emailConfigured = Boolean(process.env.RESEND_API_KEY)
const okStatus = emailConfigured ? 200 : 503

let failures = 0
const check = (label, actual, expected) => {
  const pass = actual === expected
  if (!pass) failures += 1
  console.log(`${pass ? 'ok  ' : 'FAIL'} ${label} — got ${actual}, expected ${expected}`)
}

// A fresh IP per group keeps the rate limiter from coloring other assertions.
const ip = (tag) => ({ 'x-forwarded-for': `203.0.113.${tag}` })

check('malformed JSON is rejected', (await post('not json', ip(1))).status, 400)
check(
  'missing fields are rejected',
  (await post({ name: 'A', email: 'nope', message: 'short' }, ip(2))).status,
  422
)
check(
  'an invalid budget is rejected',
  (await post({ ...valid(), budget: 'a squillion' }, ip(3))).status,
  422
)

// The honeypot must answer as though it succeeded: a 422 naming the field would
// tell a bot exactly what caught it. It is rate limited like any other request,
// so it gets its own address.
const honeypot = await post({ ...valid(), website: 'http://spam.example' }, ip(4))
check('honeypot answers 200', honeypot.status, 200)
check('honeypot leaks nothing', JSON.stringify(honeypot.json), JSON.stringify({ ok: true }))

check('a valid submission is accepted', (await post(valid(), ip(5))).status, okStatus)

// Five per IP per hour, so the sixth is refused.
const limited = ip(6)
for (let i = 1; i <= 5; i += 1) {
  const { status } = await post(valid(i), limited)
  if (status !== okStatus) {
    failures += 1
    console.log(`FAIL submission ${i} of 5 within the limit — got ${status}`)
  }
}
const sixth = await post(valid(6), limited)
check('the sixth submission is rate limited', sixth.status, 429)

console.log(failures ? `\n${failures} failure(s).` : '\nContact API behaves as expected.')
process.exitCode = failures ? 1 : 0
