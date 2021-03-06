var rollup = require("rollup");
var babel  = require("rollup-plugin-babel");
// rollup-plugin-json
// rollup-plugin-node-resolve
rollup.rollup({
  entry: "src/main.js",
  plugins: [ babel() ]
}).then(function (bundle) {
  bundle.write({
    dest: "dist/bundle.js",
    format: "umd"
  });
});
