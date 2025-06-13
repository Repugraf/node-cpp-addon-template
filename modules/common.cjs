const assert = require("assert");
const { add } = require("../dist/cjs/index.cjs");

assert(add(1, 2) === 3, "CommonJS: Addition failed");
