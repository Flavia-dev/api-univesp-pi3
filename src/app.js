const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Anuncios = require('./models/anuncios')
const Mentions = require('./models/mentions');

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
   // useUnifiedTopology: true,
    useNewUrlParser: true, 
    });

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const anunciosRoutes = require('./routes/anuncios-routes');
app.use('/anuncios', anunciosRoutes);



module.exports = app;