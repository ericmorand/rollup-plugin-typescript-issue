# Rollup TypeScript Plugin Issue

## Steps to reproduce

* Change directory to `foo`
* Execute rollup `rollup -c ../rollup.config.mjs`
* Witness the error:

```sh
$ rollup -c ../../rollup.config.mjs 

index.ts → dist/index.cjs...
created dist/index.cjs in [...]ms

index.ts → dist/index.cjs...
[!] RollupError: Could not resolve "../src" from "index.ts"
index.ts
```

Only the first Rollup configuration where the `include` option is a regular expression works properly.