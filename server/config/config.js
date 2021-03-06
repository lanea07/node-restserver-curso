//=================
//Puerto
//=================
process.env.PORT = process.env.PORT || 3000;


//=================
//Entorno
//=================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=================
//Base de datos
//=================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI
}
process.env.URLDB = urlDB;


//=================
//Vencimiento del token
//=================
process.env.CADUCIDAD_TOKEN = '48h';


//=================
//Base de datos
//=================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//=================
//Google Client ID
//=================
process.env.CLIENT_ID = process.env.CLIENT_ID || '99692197614-4siijea5viqlc2t9373h730encq479pb.apps.googleusercontent.com';