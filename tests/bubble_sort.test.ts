import { assertEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";
import { bubble_sort } from "../mod.ts";

// @ts-ignore
Deno.test("uint8", () => {
  let old_a = new Uint8Array([5, 4, 3, 2, 1]);
  let new_a = bubble_sort(old_a);
  assertEquals(new_a, [1, 2, 3, 4, 5]);
});

// @ts-ignore
Deno.test("uint16", () => {
  let old_a = new Uint16Array([5, 4, 3, 2, 1]);
  let new_a = bubble_sort(old_a);
  assertEquals(new_a, [1, 2, 3, 4, 5]);
});

// @ts-ignore
Deno.test("uint32", () => {
  let old_a = new Uint32Array([5, 4, 3, 2, 1]);
  let new_a = bubble_sort(old_a);
  assertEquals(new_a, [1, 2, 3, 4, 5]);
});

// @ts-ignore
Deno.test("int8", () => {
  let old_a = new Int8Array([5, 4, 3, 2, 1]);
  let new_a = bubble_sort(old_a);
  assertEquals(new_a, [1, 2, 3, 4, 5]);
});

// @ts-ignore
Deno.test("int16", () => {
  let old_a = new Int16Array([5, 4, 3, 2, 1]);
  let new_a = bubble_sort(old_a);
  assertEquals(new_a, [1, 2, 3, 4, 5]);
});

// @ts-ignore
Deno.test("int32", () => {
  let old_a = new Int32Array([5, 4, 3, 2, 1]);
  let new_a = bubble_sort(old_a);
  assertEquals(new_a, [1, 2, 3, 4, 5]);
});

// @ts-ignore
Deno.test("float32", () => {
  let old_a = new Float32Array([5, 4, 3, 2, 1]);
  let new_a = bubble_sort(old_a);
  assertEquals(new_a, [1, 2, 3, 4, 5]);
});

// @ts-ignore
Deno.test("float64", () => {
  let old_a = new Float64Array([5, 4, 3, 2, 1]);
  let new_a = bubble_sort(old_a);
  assertEquals(new_a, [1, 2, 3, 4, 5]);
});
