import { hc } from 'hono/client';
import type { AppType } from './server';
const client = hc<AppType>('http://localhost:8787/',{
  init: {
    credentials: 'include',
  },
})

const handleRPC = async () => {
  const res = await client.api.rpc.$get({
    json: {
      title: 'Hello',
      body: 'Hono is a cool project',
    },
  });
  if (res.ok) {
    const data = await res.json()
    console.log(data.message)
  }
};

handleRPC();