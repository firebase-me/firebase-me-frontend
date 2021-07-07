const functions = require("firebase-functions");
const {Nuxt} = require("nuxt-start");

const nuxtConfig = require("./nuxt.config.js");

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: "nuxt",
};
const nuxt = new Nuxt(config);

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  nuxt.render(req, res);
});

// exports.hello = functions.https.onRequest(async (request, response) => {
//   const name = request.query.name;
//   response.send(`Hello ${name}`)
// })
