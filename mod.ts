import {
  bubble_sort_float32array,
  bubble_sort_float64array,
  bubble_sort_int16array,
  bubble_sort_int32array,
  bubble_sort_int8array,
  bubble_sort_uint16array,
  bubble_sort_uint32array,
  bubble_sort_uint8array,
  heapsort_float32array,
  heapsort_float64array,
  heapsort_int16array,
  heapsort_int32array,
  heapsort_int8array,
  heapsort_uint16array,
  heapsort_uint32array,
  heapsort_uint8array,
  insertion_sort_float32array,
  insertion_sort_float64array,
  insertion_sort_int16array,
  insertion_sort_int32array,
  insertion_sort_int8array,
  insertion_sort_uint16array,
  insertion_sort_uint32array,
  insertion_sort_uint8array,
  merge_sort_float32array,
  merge_sort_float64array,
  merge_sort_int16array,
  merge_sort_int32array,
  merge_sort_int8array,
  merge_sort_uint16array,
  merge_sort_uint32array,
  merge_sort_uint8array,
  selection_sort_float32array,
  selection_sort_float64array,
  selection_sort_int16array,
  selection_sort_int32array,
  selection_sort_int8array,
  selection_sort_uint16array,
  selection_sort_uint32array,
  selection_sort_uint8array,
} from "./wasm/wasm_sort.js";

export {
  bubble_sort_float32array,
  bubble_sort_float64array,
  bubble_sort_int16array,
  bubble_sort_int32array,
  bubble_sort_int8array,
  bubble_sort_uint16array,
  bubble_sort_uint32array,
  bubble_sort_uint8array,
  heapsort_float32array,
  heapsort_float64array,
  heapsort_int16array,
  heapsort_int32array,
  heapsort_int8array,
  heapsort_uint16array,
  heapsort_uint32array,
  heapsort_uint8array,
  insertion_sort_float32array,
  insertion_sort_float64array,
  insertion_sort_int16array,
  insertion_sort_int32array,
  insertion_sort_int8array,
  insertion_sort_uint16array,
  insertion_sort_uint32array,
  insertion_sort_uint8array,
  merge_sort_float32array,
  merge_sort_float64array,
  merge_sort_int16array,
  merge_sort_int32array,
  merge_sort_int8array,
  merge_sort_uint16array,
  merge_sort_uint32array,
  merge_sort_uint8array,
  selection_sort_float32array,
  selection_sort_float64array,
  selection_sort_int16array,
  selection_sort_int32array,
  selection_sort_int8array,
  selection_sort_uint16array,
  selection_sort_uint32array,
  selection_sort_uint8array,
};

type TArray =
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Float32Array
  | Float64Array;

export function bubble_sort(array: TArray) {
  if (array instanceof Uint8Array) {
    return bubble_sort_uint8array(array);
  }
  if (array instanceof Uint16Array) {
    return bubble_sort_uint16array(array);
  }
  if (array instanceof Uint32Array) {
    return bubble_sort_uint32array(array);
  }
  if (array instanceof Int8Array) {
    return bubble_sort_int8array(array);
  }
  if (array instanceof Int16Array) {
    return bubble_sort_int16array(array);
  }
  if (array instanceof Int32Array) {
    return bubble_sort_int32array(array);
  }
  if (array instanceof Float32Array) {
    return bubble_sort_float32array(array);
  }
  if (array instanceof Float64Array) {
    return bubble_sort_float64array(array);
  }
}

export function selection_sort(array: TArray) {
  if (array instanceof Uint8Array) {
    return selection_sort_uint8array(array);
  }
  if (array instanceof Uint16Array) {
    return selection_sort_uint16array(array);
  }
  if (array instanceof Uint32Array) {
    return selection_sort_uint32array(array);
  }
  if (array instanceof Int8Array) {
    return selection_sort_int8array(array);
  }
  if (array instanceof Int16Array) {
    return selection_sort_int16array(array);
  }
  if (array instanceof Int32Array) {
    return selection_sort_int32array(array);
  }
  if (array instanceof Float32Array) {
    return selection_sort_float32array(array);
  }
  if (array instanceof Float64Array) {
    return selection_sort_float64array(array);
  }
}

export function insertion_sort(array: TArray) {
  if (array instanceof Uint8Array) {
    return insertion_sort_uint8array(array);
  }
  if (array instanceof Uint16Array) {
    return insertion_sort_uint16array(array);
  }
  if (array instanceof Uint32Array) {
    return insertion_sort_uint32array(array);
  }
  if (array instanceof Int8Array) {
    return insertion_sort_int8array(array);
  }
  if (array instanceof Int16Array) {
    return insertion_sort_int16array(array);
  }
  if (array instanceof Int32Array) {
    return insertion_sort_int32array(array);
  }
  if (array instanceof Float32Array) {
    return insertion_sort_float32array(array);
  }
  if (array instanceof Float64Array) {
    return insertion_sort_float64array(array);
  }
}

export function merge_sort(array: TArray) {
  if (array instanceof Uint8Array) {
    return merge_sort_uint8array(array);
  }
  if (array instanceof Uint16Array) {
    return merge_sort_uint16array(array);
  }
  if (array instanceof Uint32Array) {
    return merge_sort_uint32array(array);
  }
  if (array instanceof Int8Array) {
    return merge_sort_int8array(array);
  }
  if (array instanceof Int16Array) {
    return merge_sort_int16array(array);
  }
  if (array instanceof Int32Array) {
    return merge_sort_int32array(array);
  }
  if (array instanceof Float32Array) {
    return merge_sort_float32array(array);
  }
  if (array instanceof Float64Array) {
    return merge_sort_float64array(array);
  }
}

export function heapsort(array: TArray) {
  if (array instanceof Uint8Array) {
    return heapsort_uint8array(array);
  }
  if (array instanceof Uint16Array) {
    return heapsort_uint16array(array);
  }
  if (array instanceof Uint32Array) {
    return heapsort_uint32array(array);
  }
  if (array instanceof Int8Array) {
    return heapsort_int8array(array);
  }
  if (array instanceof Int16Array) {
    return heapsort_int16array(array);
  }
  if (array instanceof Int32Array) {
    return heapsort_int32array(array);
  }
  if (array instanceof Float32Array) {
    return heapsort_float32array(array);
  }
  if (array instanceof Float64Array) {
    return heapsort_float64array(array);
  }
}
