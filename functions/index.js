const functions = require("firebase-functions");
const {Nuxt} = require("nuxt-start");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
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

// exports.inspire = functions.https.onRequest(async (req, res) => {
//   res.send(JSON.parse(req));
//   // read
//   // const eventID = '-MeEi71k6MZjRdQyvP-Z'
//   // admin.database().ref('articles/' + eventID).once('value', (snapshot) => {
//   //   var event = snapshot.val();
//   //   res.send(event.text);
//   // });
  
//   // create
//   // admin.database().ref('/articles').push({text: "second text"})
// });

// exports.getBlogs = admin.database().ref('articles/-MeEi71k6MZjRdQyvP-Z').once('value', (snapshot) => {
//   var event = snapshot.val();
//   return event.text
// });

// exports.onNewNoteCreated =
//   functions.firestore.document('articles/3ueDG6rSqfqU303xMNSq').onCreate((snap, context) => {
//     const { body } = snap.data()
//     // const { params: '3ueDG6rSqfqU303xMNSq' } = context

//     console.log(body)

//     const mailOptions = {
//       from: '',
//       to: '',
//       subject: 'A new note is created',
//       html: `
//         <h1>New Note</h1>
//         <p>A new note is created with the following details:</p>
//         <p>
//           Note Id: <br />
//         </p>
//         <p>
//           Note Body: <br />
//           ${body}
//         </p>`
//     }

//     return transporter.sendMail(mailOptions)
//       .then(() => console.log('Email Sent!'))
//       .catch(error => console.error(error))
//   })
