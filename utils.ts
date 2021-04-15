// @ts-ignore
const data = Deno.readFileSync("./wasm/wasm_sort_bg.wasm");
const outFile =
  "// deno-fmt-ignore\r\nexport const wasmCode = new Uint8Array([" +
  data.join(",") +
  "]);";
// @ts-ignore
Deno.writeTextFileSync("./wasm/wasm_code.js", outFile);
