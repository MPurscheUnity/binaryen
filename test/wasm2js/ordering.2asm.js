import { table } from 'env';

function asmFunc(importObject) {
 var env = importObject.env || importObject;
 var FUNCTION_TABLE = env.table;
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var nan = NaN;
 var infinity = Infinity;
 function main() {
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  FUNCTION_TABLE[foo(2 | 0) | 0 | 0](1) | 0;
  FUNCTION_TABLE[4 | 0](foo(3 | 0) | 0) | 0;
  (wasm2js_i32$1 = foo(5 | 0) | 0, wasm2js_i32$0 = bar(6 | 0) | 0 | 0), FUNCTION_TABLE[wasm2js_i32$0](wasm2js_i32$1 | 0) | 0;
  FUNCTION_TABLE[8 | 0](7) | 0;
  baz((11 ? 9 : 10) | 0) | 0;
  baz((wasm2js_i32$0 = foo(12 | 0) | 0, wasm2js_i32$1 = 13, wasm2js_i32$2 = 14, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1) | 0) | 0;
  baz((wasm2js_i32$0 = 15, wasm2js_i32$1 = foo(16 | 0) | 0, wasm2js_i32$2 = 17, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1) | 0) | 0;
  baz((foo(20 | 0) | 0 ? 18 : 19) | 0) | 0;
  baz((wasm2js_i32$0 = foo(21 | 0) | 0, wasm2js_i32$1 = 22, wasm2js_i32$2 = foo(23 | 0) | 0, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1) | 0) | 0;
  baz((wasm2js_i32$0 = 24, wasm2js_i32$1 = foo(25 | 0) | 0, wasm2js_i32$2 = foo(26 | 0) | 0, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1) | 0) | 0;
  baz((wasm2js_i32$0 = foo(27 | 0) | 0, wasm2js_i32$1 = foo(28 | 0) | 0, wasm2js_i32$2 = 29, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1) | 0) | 0;
  baz((wasm2js_i32$0 = foo(30 | 0) | 0, wasm2js_i32$1 = foo(31 | 0) | 0, wasm2js_i32$2 = foo(32 | 0) | 0, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1) | 0) | 0;
 }
 
 function foo($0) {
  $0 = $0 | 0;
  return 1 | 0;
 }
 
 function bar($0) {
  $0 = $0 | 0;
  return 2 | 0;
 }
 
 function baz($0) {
  $0 = $0 | 0;
  return 3 | 0;
 }
 
 FUNCTION_TABLE[1] = foo;
 FUNCTION_TABLE[2] = bar;
 FUNCTION_TABLE[3] = baz;
 return {
  "main": main
 };
}

var retasmFunc = asmFunc({
    table,
});
export var main = retasmFunc.main;
