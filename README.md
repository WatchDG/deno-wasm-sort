# wasm-sort

## install

add to `deps.ts`

```ts
export {
    merge_sort
} from "https://deno.land/x/wasm_sort@1.4.0/mod.ts";
```

## init and run

```ts
import {
    merge_sort
} from './deps.ts';

const array = new Int32Array([5, 4, 3, 2, 1]);
console.log(merge_sort(array));
```