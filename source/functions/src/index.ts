import * as functions from "firebase-functions";
// https://typescript.nuxtjs.org/guide/setup/

import {Nuxt} from "nuxt-start";
import nuxtConfig from './../../nuxt.config';

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: 'nuxt',
}
const nuxt = new Nuxt(config)

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})