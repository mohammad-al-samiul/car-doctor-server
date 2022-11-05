// const express = require ('express');
// const cors = require ('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// require('dotenv').config()
// const app = express();
// const port = process.env.port || 5000;

// //middleware

// app.use(cors());
// app.use(express.json());

// // console.log(process.env.DB_USER);
// // console.log(process.env.DB_PASSWORD);


// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rqwof3p.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run(){
//   try{
//     const serviceCollection = client.db('geniusCar').collection('services');
//     app.get('/services',async(req,res) => {
//       const  query ={};
//       const cursor = serviceCollection.find(query);
//       const services = await cursor.toArray();
//       res.send(services);
//     });

//     app.get('/services/:id',async(req,res) => {
//       const id = req.params.id;
//       const query = {_id: ObjectId(id)}
//       const services = await serviceCollection.findOne(query)
//       res.send(services);
//     })
    
//   }
//   finally{

//   }
// }
// run().catch(error => console.log(error.message));



// app.get('/',(req,res) => {
//   res.send('Server Running');
// })

// app.listen(port,() => {
//   console.log(`Server Running On Port ${port}`);
// })

//1. express,cors require
//2. express call 
//3. port
//4. express, cors use
//5. app.get and app.listen
//6. .env file create and DB_USER and DB_PASSWORD set
//7. dot env require 
//8. after middleware console DB_USER and DB_PASSWORD
//9. connect mongodb 
//10. wrap uri with template string and set user and password  dynamically with ${process.env.DB_USER}
//11. async function create and inside try block database and collection create 
//12. follow find multiple documents for all services
//13. find a document for single service


const express = require('express');
const cors = require ('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.port || 5000;

//middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rqwof3p.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try{
    const serviceCollection = client.db('geniusCar').collection('services');

    app.get('/services',async(req,res) => {
      const serviceCollection = client.db('geniusCar').collection('services');
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    })

    app.get('/services/:id',async(req,res) => {
      const id = req.params.id;
      const query = {_id: ObjectId(id)}
      const service = await serviceCollection.findOne(query);
      res.send(service);
    })

  }

  finally{
    
  }
}
run().catch(error => console.log(error.message));


app.get('/',(req,res) => {
  res.send("Server Running");
})

app.listen(port,() => {
  console.log(`Server Running on Port ${port}`);
})