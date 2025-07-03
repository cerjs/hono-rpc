## hono-rpc benchmark

1. zod  ≈ typebox (typebox is a little faster)
2. json ≈ 2x zod/typebox
3. deno ≈ 2x node (deno is more stable, and not much volatility)

## hono-json
```
autocannon -c 200 -d 10 -p 50 http://localhost:8787/api/json         
```

### deno

| Stat    | 2.5%   | 50%    | 97.5%  | 99%     | Avg      | Stdev   | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
|Latency  | 50 ms  | 56 ms  | 60 ms  | 63 ms   | 55.86 ms | 2.98 ms | 93 ms   |


| Stat    | 1%      | 2.5%    |50%      |97.5%    |Avg      |Stdev    |Min      |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 173,695 | 173,695 | 176,895 | 180,223 | 177,088 | 1,674.8 | 173,620 |
| Bytes/Sec | 28.3 MB | 28.3 MB | 28.8 MB | 29.4 MB | 28.9 MB | 274 kB  | 28.3 MB |

1781k requests in 10.03s, 289 MB read

### node

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 56 ms  | 59 ms  | 120 ms | 123 ms | 71.11 ms | 24.9 ms | 669 ms |

| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec | 121,279 | 121,279 | 141,311 | 142,463 | 139,301.82 | 5,775.13 | 121,275 |
| Bytes/Sec | 23.1 MB | 23.1 MB | 26.8 MB | 27 MB   | 26.5 MB    | 1.09 MB  | 23 MB   |

1542k requests in 11.03s, 291 MB read

## hono-rpc-zod
```
autocannon -c 200 -d 10 -p 50 http://localhost:8787/api/zod         
```

### deno

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 63 ms | 67 ms | 71 ms | 72 ms | 67.04 ms | 2.47 ms | 108 ms |


| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 145,535 | 145,535 | 148,095 | 149,503 | 147,706.19 | 1,202.44 | 145,432 |
| Bytes/Sec | 23.7 MB | 23.7 MB | 24.2 MB | 24.4 MB | 24.1 MB    | 201 kB   | 23.7 MB |

1635k requests in 11.03s, 265 MB read


### node

```
autocannon -c 200 -d 10 -p 50 http://localhost:8787/api/zod         
```

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 89 ms  | 121 ms | 190 ms | 203 ms | 130.26 ms | 180.74 ms | 5620 ms |


| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec | 67,135  | 67,135  | 75,327  | 83,519 | 76,064  | 4,165.71 | 67,087  |
| Bytes/Sec | 12.9 MB | 12.9 MB | 14.5 MB | 16 MB  | 14.6 MB | 799 kB   | 12.9 MB |

771k requests in 10.03s, 146 MB read


## hono-rpc-typebox
```
autocannon -c 200 -d 10 -p 50 http://localhost:8787/api/typebox         
```

### deno

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 63 ms | 67 ms | 71 ms | 72 ms | 67.04 ms | 2.47 ms | 108 ms |


| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 145,535 | 145,535 | 148,095 | 149,503 | 147,706.19 | 1,202.44 | 145,432 |
| Bytes/Sec | 23.7 MB | 23.7 MB | 24.2 MB | 24.4 MB | 24.1 MB    | 201 kB   | 23.7 MB |

1635k requests in 11.03s, 265 MB read

### node

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 104 ms | 116 ms | 228 ms | 284 ms | 124.62 ms | 65.07 ms | 2716 ms


| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec   | 68,095  | 68,095  | 82,815  | 85,951  | 79,488  | 6,417.34 | 68,077  |
| Bytes/Sec | 12.9 MB | 12.9 MB | 15.7 MB | 16.3 MB | 15.1 MB | 1.22 MB  | 12.9 MB 

805k requests in 10.03s, 151 MB read


### something else

node ≈ v8 + libuv + c/c++ + commonjs

deno ≈ v8 + tokio + rust + esm ✅

~~bun ≈ jsc + uWebSockets + zig~~

bun is not much more advanced than node. 

node + uWebSockets has better performance than bun.


