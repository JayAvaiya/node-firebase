var admin = require("firebase-admin");

var serviceAccount = require("./flutterkit-305f7-fba64da36273.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://flutterkit-305f7-default-rtdb.firebaseio.com",
});

const getMessaging = admin.messaging;
const auth = admin.auth;
module.exports = {
  getMessaging,
  auth,
};
