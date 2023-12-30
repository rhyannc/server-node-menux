import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(4033),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid variaveir', _env.error.format())

  throw new Error('Invalid environmer variables')
}

export const env = _env.data
