import { zValidator } from '@hono/zod-validator'
import { z } from 'zod/v4'

import { tbValidator } from '@hono/typebox-validator'
import { Type as T } from '@sinclair/typebox'
import { Hono } from 'hono'

const app = new Hono()
app.get('/hono', (c) => c.text('Hello Node.js!'))

app.get('/api/json', (c) => c.json(
  {
    "result": {
    "data": "Hello hono"
    }
  },
  200
))



const route = app.get(
  '/api/zod',
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
        "result": {
        "data": "Hello hono"
        }
      },
      200
    )
  }
)

const schema = T.Optional(T.Object({
  name: T.Optional(T.String()),
  age:  T.Optional(T.Number()),
}))

app.get(
  '/api/typebox',
  tbValidator('json', schema),
  (c) => {
    // ...
    return c.json(
      {
        "result": {
        "data": "Hello typebox"
        }
      },
      200
    )
  }
)

export type AppType = typeof route;

export { app }
