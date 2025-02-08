const { credential } = require('firebase-admin');
const multer = require('multer');
const firebasestorage = require('multer-firebase-storage');
const firebase=require('./firebase.config');
const serviceAccount = require('../drive-ce7b8-firebase-adminsdk-kfb37-8912e9585a.json')

const storage = firebasestorage({
    credentials:firebase.credential.cert(serviceAccount),
    bucketName:'drive-ce7b8.appspot.com',
    unique:true
})
const upload = multer({
    storage:storage,
})

module.exports=upload;