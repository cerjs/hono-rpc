import { serve } from '@hono/node-server'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'

const app = new Hono()
app.get('/hono', (c) => c.text('Hello Node.js!'))

app.get('/api/json', (c) => c.json(
  {
    "result": {
    "data": "Hello fastify"
    }
  },
  200
))



const route = app.get(
  '/api/rpc',
  zValidator(
    'json',
    z.object({
      title: z.string().optional(),
      body: z.string().optional(),
    }).optional()
  ),
  (c) => {
    // ...
    return c.json(
      {
        ok: true,
        message: 'Created!',
      },
      201
    )
  }
)

export type AppType = typeof route;

const server = serve({
  fetch: app.fetch,
  port: 8787,
})

// graceful shutdown
process.on('SIGINT', () => {
  server.close()
  process.exit(0)
})
process.on('SIGTERM', () => {
  server.close((err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    process.exit(0)
  })
})