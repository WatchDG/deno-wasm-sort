import { wasmCode } from "./wasm_code.js";

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];

  heap[idx] = obj;
  return idx;
}

function getObject(idx) {
  return heap[idx];
}

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}

let cachedTextDecoder = new TextDecoder(
  "utf-8",
  { ignoreBOM: true, fatal: true },
);

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
  if (
    cachegetUint8Memory0 === null ||
    cachegetUint8Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
  if (stack_pointer == 1) throw new Error("out of js stack");
  heap[--stack_pointer] = obj;
  return stack_pointer;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
  if (
    cachegetInt32Memory0 === null ||
    cachegetInt32Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachegetInt32Memory0;
}

function getArrayI32FromWasm0(ptr, len) {
  return getInt32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @param {Int32Array} a
* @returns {Int32Array}
*/
export function insertion_sort_int32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.insertion_sort_int32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

let cachegetInt16Memory0 = null;
function getInt16Memory0() {
  if (
    cachegetInt16Memory0 === null ||
    cachegetInt16Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetInt16Memory0 = new Int16Array(wasm.memory.buffer);
  }
  return cachegetInt16Memory0;
}

function getArrayI16FromWasm0(ptr, len) {
  return getInt16Memory0().subarray(ptr / 2, ptr / 2 + len);
}
/**
* @param {Int16Array} a
* @returns {Int16Array}
*/
export function insertion_sort_int16array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.insertion_sort_int16array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI16FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 2);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

let cachegetInt8Memory0 = null;
function getInt8Memory0() {
  if (
    cachegetInt8Memory0 === null ||
    cachegetInt8Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetInt8Memory0 = new Int8Array(wasm.memory.buffer);
  }
  return cachegetInt8Memory0;
}

function getArrayI8FromWasm0(ptr, len) {
  return getInt8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {Int8Array} a
* @returns {Int8Array}
*/
export function insertion_sort_int8array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.insertion_sort_int8array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
  if (
    cachegetUint32Memory0 === null ||
    cachegetUint32Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
  }
  return cachegetUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
  return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @param {Uint32Array} a
* @returns {Uint32Array}
*/
export function insertion_sort_uint32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.insertion_sort_uint32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

let cachegetUint16Memory0 = null;
function getUint16Memory0() {
  if (
    cachegetUint16Memory0 === null ||
    cachegetUint16Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetUint16Memory0 = new Uint16Array(wasm.memory.buffer);
  }
  return cachegetUint16Memory0;
}

function getArrayU16FromWasm0(ptr, len) {
  return getUint16Memory0().subarray(ptr / 2, ptr / 2 + len);
}
/**
* @param {Uint16Array} a
* @returns {Uint16Array}
*/
export function insertion_sort_uint16array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.insertion_sort_uint16array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU16FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 2);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {Uint8Array} a
* @returns {Uint8Array}
*/
export function insertion_sort_uint8array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.insertion_sort_uint8array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
  if (
    cachegetFloat64Memory0 === null ||
    cachegetFloat64Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetFloat64Memory0 = new Float64Array(wasm.memory.buffer);
  }
  return cachegetFloat64Memory0;
}

function getArrayF64FromWasm0(ptr, len) {
  return getFloat64Memory0().subarray(ptr / 8, ptr / 8 + len);
}
/**
* @param {Float64Array} a
* @returns {Float64Array}
*/
export function insertion_sort_float64array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.insertion_sort_float64array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayF64FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 8);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

let cachegetFloat32Memory0 = null;
function getFloat32Memory0() {
  if (
    cachegetFloat32Memory0 === null ||
    cachegetFloat32Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetFloat32Memory0 = new Float32Array(wasm.memory.buffer);
  }
  return cachegetFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
  return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @param {Float32Array} a
* @returns {Float32Array}
*/
export function insertion_sort_float32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.insertion_sort_float32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayF32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Int32Array} a
* @returns {Int32Array}
*/
export function selection_sort_int32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.selection_sort_int32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Int16Array} a
* @returns {Int16Array}
*/
export function selection_sort_int16array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.selection_sort_int16array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI16FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 2);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Int8Array} a
* @returns {Int8Array}
*/
export function selection_sort_int8array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.selection_sort_int8array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Uint32Array} a
* @returns {Uint32Array}
*/
export function selection_sort_uint32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.selection_sort_uint32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Uint16Array} a
* @returns {Uint16Array}
*/
export function selection_sort_uint16array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.selection_sort_uint16array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU16FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 2);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Uint8Array} a
* @returns {Uint8Array}
*/
export function selection_sort_uint8array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.selection_sort_uint8array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Float64Array} a
* @returns {Float64Array}
*/
export function selection_sort_float64array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.selection_sort_float64array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayF64FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 8);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Float32Array} a
* @returns {Float32Array}
*/
export function selection_sort_float32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.selection_sort_float32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayF32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Int32Array} a
* @returns {Int32Array}
*/
export function bubble_sort_int32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.bubble_sort_int32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Int16Array} a
* @returns {Int16Array}
*/
export function bubble_sort_int16array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.bubble_sort_int16array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI16FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 2);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Int8Array} a
* @returns {Int8Array}
*/
export function bubble_sort_int8array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.bubble_sort_int8array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Uint32Array} a
* @returns {Uint32Array}
*/
export function bubble_sort_uint32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.bubble_sort_uint32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Uint16Array} a
* @returns {Uint16Array}
*/
export function bubble_sort_uint16array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.bubble_sort_uint16array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU16FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 2);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Uint8Array} a
* @returns {Uint8Array}
*/
export function bubble_sort_uint8array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.bubble_sort_uint8array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Float64Array} a
* @returns {Float64Array}
*/
export function bubble_sort_float64array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.bubble_sort_float64array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayF64FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 8);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Float32Array} a
* @returns {Float32Array}
*/
export function bubble_sort_float32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.bubble_sort_float32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayF32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Int32Array} a
* @returns {Int32Array}
*/
export function merge_sort_int32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.merge_sort_int32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Int16Array} a
* @returns {Int16Array}
*/
export function merge_sort_int16array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.merge_sort_int16array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI16FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 2);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Int8Array} a
* @returns {Int8Array}
*/
export function merge_sort_int8array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.merge_sort_int8array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayI8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Uint32Array} a
* @returns {Uint32Array}
*/
export function merge_sort_uint32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.merge_sort_uint32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Uint16Array} a
* @returns {Uint16Array}
*/
export function merge_sort_uint16array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.merge_sort_uint16array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU16FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 2);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Uint8Array} a
* @returns {Uint8Array}
*/
export function merge_sort_uint8array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.merge_sort_uint8array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Float64Array} a
* @returns {Float64Array}
*/
export function merge_sort_float64array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.merge_sort_float64array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayF64FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 8);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

/**
* @param {Float32Array} a
* @returns {Float32Array}
*/
export function merge_sort_float32array(a) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.merge_sort_float32array(retptr, addBorrowedObject(a));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayF32FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4);
    return v0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}

const imports = {
  __wbindgen_placeholder__: {
    __wbg_length_02afb5ad9240c50b: function (arg0) {
      var ret = getObject(arg0).length;
      return ret;
    },
    __wbindgen_memory: function () {
      var ret = wasm.memory;
      return addHeapObject(ret);
    },
    __wbg_buffer_ebc6c8e75510eae3: function (arg0) {
      var ret = getObject(arg0).buffer;
      return addHeapObject(ret);
    },
    __wbg_new_74cbc621666b3555: function (arg0) {
      var ret = new Int8Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbindgen_object_drop_ref: function (arg0) {
      takeObject(arg0);
    },
    __wbg_set_757cedce1e8187a4: function (arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbg_length_37270b84c9a37bef: function (arg0) {
      var ret = getObject(arg0).length;
      return ret;
    },
    __wbg_new_3e986ca39e7a9239: function (arg0) {
      var ret = new Int16Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbg_set_5506d41c201b4cf9: function (arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbg_length_329ad67a742437ad: function (arg0) {
      var ret = getObject(arg0).length;
      return ret;
    },
    __wbg_new_5c2190a641284929: function (arg0) {
      var ret = new Int32Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbg_set_ebaacd220d944f77: function (arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbg_length_317f0dd77f7a6673: function (arg0) {
      var ret = getObject(arg0).length;
      return ret;
    },
    __wbg_new_135e963dedf67b22: function (arg0) {
      var ret = new Uint8Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbg_set_4a5072a31008e0cb: function (arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbg_length_d984ad757a338649: function (arg0) {
      var ret = getObject(arg0).length;
      return ret;
    },
    __wbg_new_3df503b9c443e990: function (arg0) {
      var ret = new Uint16Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbg_set_b629c9b89ba1d25c: function (arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbg_length_d1be5ae0331771de: function (arg0) {
      var ret = getObject(arg0).length;
      return ret;
    },
    __wbg_new_def2717f59086081: function (arg0) {
      var ret = new Uint32Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbg_set_eb63173d577d102c: function (arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbg_length_07eaac172e006183: function (arg0) {
      var ret = getObject(arg0).length;
      return ret;
    },
    __wbg_new_cc5264f47906c023: function (arg0) {
      var ret = new Float32Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbg_set_531672550781c6cf: function (arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbg_length_9476dfa8a54954a5: function (arg0) {
      var ret = getObject(arg0).length;
      return ret;
    },
    __wbg_new_26cad0c0a0f2faf1: function (arg0) {
      var ret = new Float64Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbg_set_3964a1c27b835650: function (arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbindgen_throw: function (arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
  },
};

const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
const wasm = wasmInstance.exports;
