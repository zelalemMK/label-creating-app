"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-crc32";
exports.ids = ["vendor-chunks/buffer-crc32"];
exports.modules = {

/***/ "(rsc)/../node_modules/buffer-crc32/dist/index.cjs":
/*!***************************************************!*\
  !*** ../node_modules/buffer-crc32/dist/index.cjs ***!
  \***************************************************/
/***/ ((module) => {

eval("\n\nfunction getDefaultExportFromCjs (x) {\n\treturn x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;\n}\n\nconst CRC_TABLE = new Int32Array([\n  0,\n  1996959894,\n  3993919788,\n  2567524794,\n  124634137,\n  1886057615,\n  3915621685,\n  2657392035,\n  249268274,\n  2044508324,\n  3772115230,\n  2547177864,\n  162941995,\n  2125561021,\n  3887607047,\n  2428444049,\n  498536548,\n  1789927666,\n  4089016648,\n  2227061214,\n  450548861,\n  1843258603,\n  4107580753,\n  2211677639,\n  325883990,\n  1684777152,\n  4251122042,\n  2321926636,\n  335633487,\n  1661365465,\n  4195302755,\n  2366115317,\n  997073096,\n  1281953886,\n  3579855332,\n  2724688242,\n  1006888145,\n  1258607687,\n  3524101629,\n  2768942443,\n  901097722,\n  1119000684,\n  3686517206,\n  2898065728,\n  853044451,\n  1172266101,\n  3705015759,\n  2882616665,\n  651767980,\n  1373503546,\n  3369554304,\n  3218104598,\n  565507253,\n  1454621731,\n  3485111705,\n  3099436303,\n  671266974,\n  1594198024,\n  3322730930,\n  2970347812,\n  795835527,\n  1483230225,\n  3244367275,\n  3060149565,\n  1994146192,\n  31158534,\n  2563907772,\n  4023717930,\n  1907459465,\n  112637215,\n  2680153253,\n  3904427059,\n  2013776290,\n  251722036,\n  2517215374,\n  3775830040,\n  2137656763,\n  141376813,\n  2439277719,\n  3865271297,\n  1802195444,\n  476864866,\n  2238001368,\n  4066508878,\n  1812370925,\n  453092731,\n  2181625025,\n  4111451223,\n  1706088902,\n  314042704,\n  2344532202,\n  4240017532,\n  1658658271,\n  366619977,\n  2362670323,\n  4224994405,\n  1303535960,\n  984961486,\n  2747007092,\n  3569037538,\n  1256170817,\n  1037604311,\n  2765210733,\n  3554079995,\n  1131014506,\n  879679996,\n  2909243462,\n  3663771856,\n  1141124467,\n  855842277,\n  2852801631,\n  3708648649,\n  1342533948,\n  654459306,\n  3188396048,\n  3373015174,\n  1466479909,\n  544179635,\n  3110523913,\n  3462522015,\n  1591671054,\n  702138776,\n  2966460450,\n  3352799412,\n  1504918807,\n  783551873,\n  3082640443,\n  3233442989,\n  3988292384,\n  2596254646,\n  62317068,\n  1957810842,\n  3939845945,\n  2647816111,\n  81470997,\n  1943803523,\n  3814918930,\n  2489596804,\n  225274430,\n  2053790376,\n  3826175755,\n  2466906013,\n  167816743,\n  2097651377,\n  4027552580,\n  2265490386,\n  503444072,\n  1762050814,\n  4150417245,\n  2154129355,\n  426522225,\n  1852507879,\n  4275313526,\n  2312317920,\n  282753626,\n  1742555852,\n  4189708143,\n  2394877945,\n  397917763,\n  1622183637,\n  3604390888,\n  2714866558,\n  953729732,\n  1340076626,\n  3518719985,\n  2797360999,\n  1068828381,\n  1219638859,\n  3624741850,\n  2936675148,\n  906185462,\n  1090812512,\n  3747672003,\n  2825379669,\n  829329135,\n  1181335161,\n  3412177804,\n  3160834842,\n  628085408,\n  1382605366,\n  3423369109,\n  3138078467,\n  570562233,\n  1426400815,\n  3317316542,\n  2998733608,\n  733239954,\n  1555261956,\n  3268935591,\n  3050360625,\n  752459403,\n  1541320221,\n  2607071920,\n  3965973030,\n  1969922972,\n  40735498,\n  2617837225,\n  3943577151,\n  1913087877,\n  83908371,\n  2512341634,\n  3803740692,\n  2075208622,\n  213261112,\n  2463272603,\n  3855990285,\n  2094854071,\n  198958881,\n  2262029012,\n  4057260610,\n  1759359992,\n  534414190,\n  2176718541,\n  4139329115,\n  1873836001,\n  414664567,\n  2282248934,\n  4279200368,\n  1711684554,\n  285281116,\n  2405801727,\n  4167216745,\n  1634467795,\n  376229701,\n  2685067896,\n  3608007406,\n  1308918612,\n  956543938,\n  2808555105,\n  3495958263,\n  1231636301,\n  1047427035,\n  2932959818,\n  3654703836,\n  1088359270,\n  936918e3,\n  2847714899,\n  3736837829,\n  1202900863,\n  817233897,\n  3183342108,\n  3401237130,\n  1404277552,\n  615818150,\n  3134207493,\n  3453421203,\n  1423857449,\n  601450431,\n  3009837614,\n  3294710456,\n  1567103746,\n  711928724,\n  3020668471,\n  3272380065,\n  1510334235,\n  755167117\n]);\nfunction ensureBuffer(input) {\n  if (Buffer.isBuffer(input)) {\n    return input;\n  }\n  if (typeof input === \"number\") {\n    return Buffer.alloc(input);\n  } else if (typeof input === \"string\") {\n    return Buffer.from(input);\n  } else {\n    throw new Error(\"input must be buffer, number, or string, received \" + typeof input);\n  }\n}\nfunction bufferizeInt(num) {\n  const tmp = ensureBuffer(4);\n  tmp.writeInt32BE(num, 0);\n  return tmp;\n}\nfunction _crc32(buf, previous) {\n  buf = ensureBuffer(buf);\n  if (Buffer.isBuffer(previous)) {\n    previous = previous.readUInt32BE(0);\n  }\n  let crc = ~~previous ^ -1;\n  for (var n = 0; n < buf.length; n++) {\n    crc = CRC_TABLE[(crc ^ buf[n]) & 255] ^ crc >>> 8;\n  }\n  return crc ^ -1;\n}\nfunction crc32() {\n  return bufferizeInt(_crc32.apply(null, arguments));\n}\ncrc32.signed = function() {\n  return _crc32.apply(null, arguments);\n};\ncrc32.unsigned = function() {\n  return _crc32.apply(null, arguments) >>> 0;\n};\nvar bufferCrc32 = crc32;\n\nconst index = /*@__PURE__*/getDefaultExportFromCjs(bufferCrc32);\n\nmodule.exports = index;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci1jcmMzMi9kaXN0L2luZGV4LmNqcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy96ZWxhbGVtbWVrb25uZW4vRGVza3RvcC9QaXhlbFBlYWsvcHJvamVjdHMvbGFiZWwtY3JlYXRpbmctYXBwL2xhYmVsLWNyZWF0aW5nLWFwcC9ub2RlX21vZHVsZXMvYnVmZmVyLWNyYzMyL2Rpc3QvaW5kZXguY2pzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEV4cG9ydEZyb21DanMgKHgpIHtcblx0cmV0dXJuIHggJiYgeC5fX2VzTW9kdWxlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnZGVmYXVsdCcpID8geFsnZGVmYXVsdCddIDogeDtcbn1cblxuY29uc3QgQ1JDX1RBQkxFID0gbmV3IEludDMyQXJyYXkoW1xuICAwLFxuICAxOTk2OTU5ODk0LFxuICAzOTkzOTE5Nzg4LFxuICAyNTY3NTI0Nzk0LFxuICAxMjQ2MzQxMzcsXG4gIDE4ODYwNTc2MTUsXG4gIDM5MTU2MjE2ODUsXG4gIDI2NTczOTIwMzUsXG4gIDI0OTI2ODI3NCxcbiAgMjA0NDUwODMyNCxcbiAgMzc3MjExNTIzMCxcbiAgMjU0NzE3Nzg2NCxcbiAgMTYyOTQxOTk1LFxuICAyMTI1NTYxMDIxLFxuICAzODg3NjA3MDQ3LFxuICAyNDI4NDQ0MDQ5LFxuICA0OTg1MzY1NDgsXG4gIDE3ODk5Mjc2NjYsXG4gIDQwODkwMTY2NDgsXG4gIDIyMjcwNjEyMTQsXG4gIDQ1MDU0ODg2MSxcbiAgMTg0MzI1ODYwMyxcbiAgNDEwNzU4MDc1MyxcbiAgMjIxMTY3NzYzOSxcbiAgMzI1ODgzOTkwLFxuICAxNjg0Nzc3MTUyLFxuICA0MjUxMTIyMDQyLFxuICAyMzIxOTI2NjM2LFxuICAzMzU2MzM0ODcsXG4gIDE2NjEzNjU0NjUsXG4gIDQxOTUzMDI3NTUsXG4gIDIzNjYxMTUzMTcsXG4gIDk5NzA3MzA5NixcbiAgMTI4MTk1Mzg4NixcbiAgMzU3OTg1NTMzMixcbiAgMjcyNDY4ODI0MixcbiAgMTAwNjg4ODE0NSxcbiAgMTI1ODYwNzY4NyxcbiAgMzUyNDEwMTYyOSxcbiAgMjc2ODk0MjQ0MyxcbiAgOTAxMDk3NzIyLFxuICAxMTE5MDAwNjg0LFxuICAzNjg2NTE3MjA2LFxuICAyODk4MDY1NzI4LFxuICA4NTMwNDQ0NTEsXG4gIDExNzIyNjYxMDEsXG4gIDM3MDUwMTU3NTksXG4gIDI4ODI2MTY2NjUsXG4gIDY1MTc2Nzk4MCxcbiAgMTM3MzUwMzU0NixcbiAgMzM2OTU1NDMwNCxcbiAgMzIxODEwNDU5OCxcbiAgNTY1NTA3MjUzLFxuICAxNDU0NjIxNzMxLFxuICAzNDg1MTExNzA1LFxuICAzMDk5NDM2MzAzLFxuICA2NzEyNjY5NzQsXG4gIDE1OTQxOTgwMjQsXG4gIDMzMjI3MzA5MzAsXG4gIDI5NzAzNDc4MTIsXG4gIDc5NTgzNTUyNyxcbiAgMTQ4MzIzMDIyNSxcbiAgMzI0NDM2NzI3NSxcbiAgMzA2MDE0OTU2NSxcbiAgMTk5NDE0NjE5MixcbiAgMzExNTg1MzQsXG4gIDI1NjM5MDc3NzIsXG4gIDQwMjM3MTc5MzAsXG4gIDE5MDc0NTk0NjUsXG4gIDExMjYzNzIxNSxcbiAgMjY4MDE1MzI1MyxcbiAgMzkwNDQyNzA1OSxcbiAgMjAxMzc3NjI5MCxcbiAgMjUxNzIyMDM2LFxuICAyNTE3MjE1Mzc0LFxuICAzNzc1ODMwMDQwLFxuICAyMTM3NjU2NzYzLFxuICAxNDEzNzY4MTMsXG4gIDI0MzkyNzc3MTksXG4gIDM4NjUyNzEyOTcsXG4gIDE4MDIxOTU0NDQsXG4gIDQ3Njg2NDg2NixcbiAgMjIzODAwMTM2OCxcbiAgNDA2NjUwODg3OCxcbiAgMTgxMjM3MDkyNSxcbiAgNDUzMDkyNzMxLFxuICAyMTgxNjI1MDI1LFxuICA0MTExNDUxMjIzLFxuICAxNzA2MDg4OTAyLFxuICAzMTQwNDI3MDQsXG4gIDIzNDQ1MzIyMDIsXG4gIDQyNDAwMTc1MzIsXG4gIDE2NTg2NTgyNzEsXG4gIDM2NjYxOTk3NyxcbiAgMjM2MjY3MDMyMyxcbiAgNDIyNDk5NDQwNSxcbiAgMTMwMzUzNTk2MCxcbiAgOTg0OTYxNDg2LFxuICAyNzQ3MDA3MDkyLFxuICAzNTY5MDM3NTM4LFxuICAxMjU2MTcwODE3LFxuICAxMDM3NjA0MzExLFxuICAyNzY1MjEwNzMzLFxuICAzNTU0MDc5OTk1LFxuICAxMTMxMDE0NTA2LFxuICA4Nzk2Nzk5OTYsXG4gIDI5MDkyNDM0NjIsXG4gIDM2NjM3NzE4NTYsXG4gIDExNDExMjQ0NjcsXG4gIDg1NTg0MjI3NyxcbiAgMjg1MjgwMTYzMSxcbiAgMzcwODY0ODY0OSxcbiAgMTM0MjUzMzk0OCxcbiAgNjU0NDU5MzA2LFxuICAzMTg4Mzk2MDQ4LFxuICAzMzczMDE1MTc0LFxuICAxNDY2NDc5OTA5LFxuICA1NDQxNzk2MzUsXG4gIDMxMTA1MjM5MTMsXG4gIDM0NjI1MjIwMTUsXG4gIDE1OTE2NzEwNTQsXG4gIDcwMjEzODc3NixcbiAgMjk2NjQ2MDQ1MCxcbiAgMzM1Mjc5OTQxMixcbiAgMTUwNDkxODgwNyxcbiAgNzgzNTUxODczLFxuICAzMDgyNjQwNDQzLFxuICAzMjMzNDQyOTg5LFxuICAzOTg4MjkyMzg0LFxuICAyNTk2MjU0NjQ2LFxuICA2MjMxNzA2OCxcbiAgMTk1NzgxMDg0MixcbiAgMzkzOTg0NTk0NSxcbiAgMjY0NzgxNjExMSxcbiAgODE0NzA5OTcsXG4gIDE5NDM4MDM1MjMsXG4gIDM4MTQ5MTg5MzAsXG4gIDI0ODk1OTY4MDQsXG4gIDIyNTI3NDQzMCxcbiAgMjA1Mzc5MDM3NixcbiAgMzgyNjE3NTc1NSxcbiAgMjQ2NjkwNjAxMyxcbiAgMTY3ODE2NzQzLFxuICAyMDk3NjUxMzc3LFxuICA0MDI3NTUyNTgwLFxuICAyMjY1NDkwMzg2LFxuICA1MDM0NDQwNzIsXG4gIDE3NjIwNTA4MTQsXG4gIDQxNTA0MTcyNDUsXG4gIDIxNTQxMjkzNTUsXG4gIDQyNjUyMjIyNSxcbiAgMTg1MjUwNzg3OSxcbiAgNDI3NTMxMzUyNixcbiAgMjMxMjMxNzkyMCxcbiAgMjgyNzUzNjI2LFxuICAxNzQyNTU1ODUyLFxuICA0MTg5NzA4MTQzLFxuICAyMzk0ODc3OTQ1LFxuICAzOTc5MTc3NjMsXG4gIDE2MjIxODM2MzcsXG4gIDM2MDQzOTA4ODgsXG4gIDI3MTQ4NjY1NTgsXG4gIDk1MzcyOTczMixcbiAgMTM0MDA3NjYyNixcbiAgMzUxODcxOTk4NSxcbiAgMjc5NzM2MDk5OSxcbiAgMTA2ODgyODM4MSxcbiAgMTIxOTYzODg1OSxcbiAgMzYyNDc0MTg1MCxcbiAgMjkzNjY3NTE0OCxcbiAgOTA2MTg1NDYyLFxuICAxMDkwODEyNTEyLFxuICAzNzQ3NjcyMDAzLFxuICAyODI1Mzc5NjY5LFxuICA4MjkzMjkxMzUsXG4gIDExODEzMzUxNjEsXG4gIDM0MTIxNzc4MDQsXG4gIDMxNjA4MzQ4NDIsXG4gIDYyODA4NTQwOCxcbiAgMTM4MjYwNTM2NixcbiAgMzQyMzM2OTEwOSxcbiAgMzEzODA3ODQ2NyxcbiAgNTcwNTYyMjMzLFxuICAxNDI2NDAwODE1LFxuICAzMzE3MzE2NTQyLFxuICAyOTk4NzMzNjA4LFxuICA3MzMyMzk5NTQsXG4gIDE1NTUyNjE5NTYsXG4gIDMyNjg5MzU1OTEsXG4gIDMwNTAzNjA2MjUsXG4gIDc1MjQ1OTQwMyxcbiAgMTU0MTMyMDIyMSxcbiAgMjYwNzA3MTkyMCxcbiAgMzk2NTk3MzAzMCxcbiAgMTk2OTkyMjk3MixcbiAgNDA3MzU0OTgsXG4gIDI2MTc4MzcyMjUsXG4gIDM5NDM1NzcxNTEsXG4gIDE5MTMwODc4NzcsXG4gIDgzOTA4MzcxLFxuICAyNTEyMzQxNjM0LFxuICAzODAzNzQwNjkyLFxuICAyMDc1MjA4NjIyLFxuICAyMTMyNjExMTIsXG4gIDI0NjMyNzI2MDMsXG4gIDM4NTU5OTAyODUsXG4gIDIwOTQ4NTQwNzEsXG4gIDE5ODk1ODg4MSxcbiAgMjI2MjAyOTAxMixcbiAgNDA1NzI2MDYxMCxcbiAgMTc1OTM1OTk5MixcbiAgNTM0NDE0MTkwLFxuICAyMTc2NzE4NTQxLFxuICA0MTM5MzI5MTE1LFxuICAxODczODM2MDAxLFxuICA0MTQ2NjQ1NjcsXG4gIDIyODIyNDg5MzQsXG4gIDQyNzkyMDAzNjgsXG4gIDE3MTE2ODQ1NTQsXG4gIDI4NTI4MTExNixcbiAgMjQwNTgwMTcyNyxcbiAgNDE2NzIxNjc0NSxcbiAgMTYzNDQ2Nzc5NSxcbiAgMzc2MjI5NzAxLFxuICAyNjg1MDY3ODk2LFxuICAzNjA4MDA3NDA2LFxuICAxMzA4OTE4NjEyLFxuICA5NTY1NDM5MzgsXG4gIDI4MDg1NTUxMDUsXG4gIDM0OTU5NTgyNjMsXG4gIDEyMzE2MzYzMDEsXG4gIDEwNDc0MjcwMzUsXG4gIDI5MzI5NTk4MTgsXG4gIDM2NTQ3MDM4MzYsXG4gIDEwODgzNTkyNzAsXG4gIDkzNjkxOGUzLFxuICAyODQ3NzE0ODk5LFxuICAzNzM2ODM3ODI5LFxuICAxMjAyOTAwODYzLFxuICA4MTcyMzM4OTcsXG4gIDMxODMzNDIxMDgsXG4gIDM0MDEyMzcxMzAsXG4gIDE0MDQyNzc1NTIsXG4gIDYxNTgxODE1MCxcbiAgMzEzNDIwNzQ5MyxcbiAgMzQ1MzQyMTIwMyxcbiAgMTQyMzg1NzQ0OSxcbiAgNjAxNDUwNDMxLFxuICAzMDA5ODM3NjE0LFxuICAzMjk0NzEwNDU2LFxuICAxNTY3MTAzNzQ2LFxuICA3MTE5Mjg3MjQsXG4gIDMwMjA2Njg0NzEsXG4gIDMyNzIzODAwNjUsXG4gIDE1MTAzMzQyMzUsXG4gIDc1NTE2NzExN1xuXSk7XG5mdW5jdGlvbiBlbnN1cmVCdWZmZXIoaW5wdXQpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoaW5wdXQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShpbnB1dCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiaW5wdXQgbXVzdCBiZSBidWZmZXIsIG51bWJlciwgb3Igc3RyaW5nLCByZWNlaXZlZCBcIiArIHR5cGVvZiBpbnB1dCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGJ1ZmZlcml6ZUludChudW0pIHtcbiAgY29uc3QgdG1wID0gZW5zdXJlQnVmZmVyKDQpO1xuICB0bXAud3JpdGVJbnQzMkJFKG51bSwgMCk7XG4gIHJldHVybiB0bXA7XG59XG5mdW5jdGlvbiBfY3JjMzIoYnVmLCBwcmV2aW91cykge1xuICBidWYgPSBlbnN1cmVCdWZmZXIoYnVmKTtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihwcmV2aW91cykpIHtcbiAgICBwcmV2aW91cyA9IHByZXZpb3VzLnJlYWRVSW50MzJCRSgwKTtcbiAgfVxuICBsZXQgY3JjID0gfn5wcmV2aW91cyBeIC0xO1xuICBmb3IgKHZhciBuID0gMDsgbiA8IGJ1Zi5sZW5ndGg7IG4rKykge1xuICAgIGNyYyA9IENSQ19UQUJMRVsoY3JjIF4gYnVmW25dKSAmIDI1NV0gXiBjcmMgPj4+IDg7XG4gIH1cbiAgcmV0dXJuIGNyYyBeIC0xO1xufVxuZnVuY3Rpb24gY3JjMzIoKSB7XG4gIHJldHVybiBidWZmZXJpemVJbnQoX2NyYzMyLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xufVxuY3JjMzIuc2lnbmVkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBfY3JjMzIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn07XG5jcmMzMi51bnNpZ25lZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gX2NyYzMyLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgPj4+IDA7XG59O1xudmFyIGJ1ZmZlckNyYzMyID0gY3JjMzI7XG5cbmNvbnN0IGluZGV4ID0gLypAX19QVVJFX18qL2dldERlZmF1bHRFeHBvcnRGcm9tQ2pzKGJ1ZmZlckNyYzMyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRleDtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/buffer-crc32/dist/index.cjs\n");

/***/ })

};
;