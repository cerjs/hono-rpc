## hono-rpc benchm

hono seems win everything

1. zod  ≈ typebox
2. json ≈ 2x zod/typebox
3. deno ≈ 2.5x node@24 (deno is more stable, and not much volatility)
4. hono-node ≈ 4x trpc-fastify-nodejs
5. hono-deno ≈ 8x trpc-fastify-nodejs

## hono-json
```
autocannon -c 200 -d 10 http://localhost:8787/api/json         
``` 

### deno@2.5.0
memory using ≈ 90m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%     | Avg      | Stdev   | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 1 ms | 1 ms | 1 ms  | 1 ms | 1.01 ms | 0.26 ms | 28 ms |

| Stat    | 1%      | 2.5%    |50%      |97.5%    |Avg      |Stdev    |Min      |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 130,111 | 130,111 | 134,783 | 136,575 | 134,507.64 | 1,632.73 | 130,059 |
| Bytes/Sec | 21.2 MB | 21.2 MB | 22 MB   | 22.3 MB | 21.9 MB    | 268 kB   | 21.2 MB |

1480k requests in 11.02s, 241 MB read

### node@24.8.0
memory using ≈ 100m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 2 ms | 2 ms | 2 ms  | 2 ms | 2.01 ms | 0.29 ms | 23 ms |

| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 79,167  | 79,167  | 80,831  | 86,271  | 81,661.1 | 1,949.9 | 79,117  |
| Bytes/Sec | 14.8 MB | 14.8 MB | 15.1 MB | 16.1 MB | 15.3 MB  | 368 kB  | 14.8 MB |

898k requests in 11.02s, 168 MB read

## hono-rpc-zod
```
autocannon -c 200 -d 10 http://localhost:8787/api/zod         
```

### deno@2.5.0
memory using ≈ 90m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 1 ms | 1 ms | 1 ms  | 2 ms | 1.03 ms | 0.44 ms | 28 ms |

| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 107,519 | 107,519 | 112,255 | 116,607 | 112,072.73 | 2,150.58 | 107,492 |
| Bytes/Sec | 17.5 MB | 17.5 MB | 18.3 MB | 19 MB   | 18.3 MB    | 349 kB   | 17.5 MB |

1233k requests in 11.02s, 201 MB read

### node@24.8.0
memory using ≈ 230m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 3 ms | 3 ms | 3 ms  | 4 ms | 3.05 ms | 0.52 ms | 60 ms |

| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 53,919  | 53,919  | 55,519  | 57,375  | 55,515.64 | 1,003.83 | 53,894  |
| Bytes/Sec | 10.1 MB | 10.1 MB | 10.4 MB | 10.7 MB | 10.4 MB   | 188 kB   | 10.1 MB |

611k requests in 11.02s, 114 MB read

## hono-rpc-typebox
```
autocannon -c 200 -d 10 http://localhost:8787/api/typebox         
```

### deno@2.5.0
memory using ≈ 100m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 1 ms   | 1 ms   | 1 ms   | 1 ms   | 1.03 ms  | 0.39 ms  | 28 ms   |

| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 110,911 | 110,911 | 114,495 | 115,839 | 114,161.46 | 1,268.34 | 110,856 |
| Bytes/Sec | 18.4 MB | 18.4 MB | 19 MB   | 19.2 MB | 19 MB      | 210 kB   | 18.4 MB |

1256k requests in 11.02s, 208 MB read

### node@24.8.0
memory using ≈ 230m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 3 ms | 3 ms | 3 ms  | 4 ms | 3.06 ms | 1.03 ms | 139 ms |

| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 52,351  | 52,351  | 56,287  | 56,895  | 55,780.37 | 1,241.03 | 52,322  |
| Bytes/Sec | 9.95 MB | 9.95 MB | 10.7 MB | 10.8 MB | 10.6 MB   | 236 kB   | 9.94 MB |

614k requests in 11.02s, 117 MB read

### something else

node ≈ v8 + libuv + c/c++ + commonjs

deno ≈ v8 + tokio + rust + esm ✅

~~bun ≈ jsc + uWebSockets + zig~~

bun is not much more advanced than node. 

node + uWebSockets has better performance than bun.


