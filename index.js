// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// require('dotenv').config()
// const app = express();
// const port = process.env.port || 5000;

// //geniusDbUser
// //hQcGOdVjE3PaGYRu

// //middleware
// app.use(cors());
// app.use(express());

// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD);

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rqwof3p.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// app.get('/',(req,res) => {
//     res.send("Server Running");
// })

// app.listen(port,() => {
//     console.log(`Server running on ${port}`);
// })

const express = require ('express');
const cors = require ('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.port || 5000;


//middleware
app.use(cors());
app.use(express.json());

console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

const uri = `mongodb+srv://process.env.DB_USER:process.env.DB_PASSWORD@cluster0.rqwof3p.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.get('/',(req,res) => {
    res.send("Genius Server Running ");
})

app.listen(port,() => {
    console.log(`Server Running on Port ${port}`);
})
