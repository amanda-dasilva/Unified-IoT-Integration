
/*
Author: Amanda da Silva
Title: PROG3012 - Final Project
Date: 2022/12/21
Sources: 
  https://zellwk.com/blog/crud-express-mongodb/
  https://nodered.org/docs/faq/interacting-with-arduino
  https://github.com/AkosLukacs/PuckStreaming/blob/master/src/BangleStreaming.js
  https://forum.espruino.com/conversations/345915/
*/

const express = require('express')
const bodyParser= require('body-parser')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

const app = express()
const port = 3000

// Connection String
const connectionString =
  'mongodb+srv://amanda-dsilva:<password>@cluster0.xrstssi.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('prog-finalproject')
    const hrmCollections = db.collection('hrm')

    // ========================
    // Middlewares
    // ========================

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(cors())

    // ========================
    // APIs
    // ========================
    app.post('/hrm', (req, res) => {
      hrmCollections.insertOne(req.body)
      .then(result => {
        console.log(result)
        // res.redirect('/')
        res.json('Record added')
      })
        .catch(error => console.error(error))
    })

    // ========================
    // Listen
    // ========================
    
    app.listen(port, function() {
      console.log(`listening on port ${port}`)
    })
  })
  .catch(console.error)

