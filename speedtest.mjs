#!/usr/bin/env zx

const json = await $`speedtest -u auto-binary-bits -f json`

console.log('done.')
console.log(JSON.parse(json.stdout))