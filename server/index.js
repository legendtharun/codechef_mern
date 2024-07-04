// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://manikandan211205:qwzyyGypb3bcPPUX@cluster0.yto6yer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function run() {
//   await client.connect();
//   const database = client.db("userdb");
//   const collection = database.collection("usertable");
// }
// run().catch(console.dir);

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const workoutRoutes = require("./Userroutes.js");
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/user", workoutRoutes);

mongoose
  .connect(
    "mongodb+srv://manikandan211205:qwzyyGypb3bcPPUX@cluster0.yto6yer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("server is running...");
    });
  })
  .catch((e) => {
    console.group(e);
  });
