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

const imports = {
  __wbindgen_placeholder__: {
    __wbg_length_329ad67a742437ad: function (arg0) {
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
    __wbg_new_5c2190a641284929: function (arg0) {
      var ret = new Int32Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbindgen_object_drop_ref: function (arg0) {
      takeObject(arg0);
    },
    __wbg_set_ebaacd220d944f77: function (arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbindgen_throw: function (arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
  },
};

const file = new URL(import.meta.url).pathname;
console.log(file);
const wasmFile = (file.substring(
  0,
  file.lastIndexOf("/") + 1,
) + "wasm_sort_bg.wasm").replace(/^\//, "");
const wasmModule = new WebAssembly.Module(Deno.readFileSync(wasmFile));
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
const wasm = wasmInstance.exports;
