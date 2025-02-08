const Firebase = require('firebase-admin');

const serviceAccount = require('../drive-ce7b8-firebase-adminsdk-kfb37-8912e9585a.json')
const firebase = Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-ce7b8.appspot.com'
})

module.exports=Firebase;