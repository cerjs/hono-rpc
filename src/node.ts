
import { serve } from '@hono/node-server';
import { app } from './server';

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