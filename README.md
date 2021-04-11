# wasm-sort

## install

add to `deps.ts`

```ts
export {
    bubble_sort_int32array,
    merge_sort_int32array
} from "https://deno.land/x/wasm_sort@1.0.3/mod.ts";
```

## init and run

```ts
import {
    bubble_sort_int32array,
    merge_sort_int32array
} from './deps.ts';

const array = new Int32Array([5, 4, 3, 2, 1]);
console.log(merge_sort_int32array(array));
```