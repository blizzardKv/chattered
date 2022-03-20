const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();
console.log(db);

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Ivan Fedorov",
      description: "Hi there! How are you?"
    }, {
      title: "Petr Ivanov",
      description: "Where is my money?"
    }]
  )
})

app.listen(process.env.PORT || 8081)
