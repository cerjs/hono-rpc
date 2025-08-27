## hono-rpc benchm

hono seems win everything

1. zod  ≈ typebox (typebox is a little faster)
2. json ≈ 2x zod/typebox
3. deno ≈ 2.5x node@22 (deno is more stable, and not much volatility)
4. hono-node ≈ 3x trpc-fastify-nodejs
5. hono-deno ≈ 7x trpc-fastify-nodejs
6. node@24 ≈ 1.4x node@22

## hono-json
```
autocannon -c 200 -d 10 -p 100 http://localhost:8787/api/json         
```

### deno
memory using ≈ 90m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%     | Avg      | Stdev   | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 101 ms | 115 ms | 124 ms | 151 ms | 114.95 ms | 7.34 ms | 161 ms |


| Stat    | 1%      | 2.5%    |50%      |97.5%    |Avg      |Stdev    |Min      |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 167,423 | 167,423 | 172,287 | 176,767 | 172,492.8 | 2,532.63 | 167,354
| Bytes/Sec | 27.3 MB | 27.3 MB | 28.1 MB | 28.8 MB | 28.1 MB   | 416 kB   | 27.3 MB | 

1745k requests in 10.04s, 281 MB read

### node
memory using ≈ 160m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 175 ms | 201 ms | 212 ms | 213 ms | 209.31 ms | 245.28 ms | 7331 ms |

| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 89,471  | 89,471  | 94,911  | 96,959  | 94,484.37 | 1,742.88 | 89,443  |
| Bytes/Sec | 16.7 MB | 16.7 MB | 17.7 MB | 18.1 MB | 17.7 MB   | 325 kB   | 16.7 MB |

1394k requests in 10.03s, 257 MB read

## hono-rpc-zod
```
autocannon -c 200 -d 10 -p 100 http://localhost:8787/api/zod         
```

### deno
memory using ≈ 100m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 129 ms | 135 ms | 139 ms | 140 ms | 134.44 ms | 6.63 ms | 158 ms 


| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 145,535 | 145,535 | 148,095 | 149,503 | 147,706.19 | 1,202.44 | 145,432 |
| Bytes/Sec | 23.7 MB | 23.7 MB | 24.2 MB | 24.4 MB | 24.1 MB    | 201 kB   | 23.7 MB |

1635k requests in 11.03s, 265 MB read


### node@22
memory using ≈ 750m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 275 ms | 304 ms | 381 ms | 384 ms | 309.4 ms | 149.72 ms | 5145 ms |


| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 58,559 | 58,559 | 64,479  | 66,623  | 63,576  | 2,583.44 | 58,534  |
| Bytes/Sec | 11 MB  | 11 MB  | 12.1 MB | 12.5 MB | 11.9 MB | 483 kB   | 10.9 MB |

656k requests in 10.03s, 119 MB read

### node@24
memory using ≈ 220m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency │ 182 ms │ 212 ms │ 296 ms │ 360 ms │ 224.09 ms │ 237.47 ms │ 7222 ms │

| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   │ 74,815 │ 74,815 │ 91,519  │ 92,863  │ 88,264.73 │ 5,754.14 │ 74,800 │
| Bytes/Sec │ 14 MB  │ 14 MB  │ 17.1 MB │ 17.4 MB │ 16.5 MB   │ 1.08 MB  │ 14 MB  │

991k requests in 11.03s, 182 MB read

## hono-rpc-typebox
```
autocannon -c 200 -d 10 -p 100 http://localhost:8787/api/typebox         
```

### deno
memory using ≈ 100m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 124 ms | 131 ms | 137 ms | 140 ms | 130.31 ms | 6.78 ms | 152 ms |


| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 148,991 | 148,991 | 151,551 | 154,879 | 152,102.4 | 1,879.3 | 148,930 |
| Bytes/Sec | 24.7 MB | 24.7 MB | 25.2 MB | 25.7 MB | 25.2 MB   | 310 kB  | 24.7 MB |

1541k requests in 10.03s, 252 MB read

### node
memory using ≈ 800m

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 273 ms | 302 ms | 374 ms | 377 ms | 302.7 ms | 83.99 ms | 3511 ms |


| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 57,247  | 57,247  | 65,663  | 68,863  | 65,118.55 | 2,967.74 | 57,218  |
| Bytes/Sec | 10.9 MB | 10.9 MB | 12.5 MB | 13.1 MB | 12.4 MB   | 563 kB   | 10.9 MB |

736k requests in 11.03s, 136 MB read

### something else

node ≈ v8 + libuv + c/c++ + commonjs

deno ≈ v8 + tokio + rust + esm ✅

~~bun ≈ jsc + uWebSockets + zig~~

bun is not much more advanced than node. 

node + uWebSockets has better performance than bun.


