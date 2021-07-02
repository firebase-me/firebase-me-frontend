/* eslint-disable linebreak-style */
const glob = require("glob");
const rimraf = require("rimraf");
const args = process.argv.slice(2);

console.log("rimraf.js arguments: ");
console.log(args);

glob(args[0], {}, function(er, files) {
  if (er) console.log(er);
  // eslint-disable-next-line guard-for-in
  for (const i in files) {
    console.log(files[i]);
    rimraf(files[i], function(e) {
      if (e) console.log(e);
    });
  }
});
