// @ts-expect-error
import { app } from './server.ts';

// @ts-expect-error
Deno.serve({ port: 8787 }, app.fetch) 