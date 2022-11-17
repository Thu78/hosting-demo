const express = require("express");
// Loads environment variables
require("dotenv").config();
// Heroku will automatically have its own port
const port = process.env.PORT || 6000;
const app = express();
app.use(express.json());

// Connect firebase App: can leave commented out, loads environment variables
const admin = require("firebase-admin");
const adminConfig = require("./cred.json");
admin.initializeApp({
  credential: admin.credential.cert(adminConfig),
});
const database = admin.firestore();
// Create an API Route: should be available on -> localhost:5000/user
app.get("/user", async (req, res) => {
  const user = await database.collection("user").doc("jonathan").get();
  const data = user.data();
  res.json({ msg: "Testing, sending hello", user: data });
});

// Create an API Route: should be available on -> localhost:5000/hello
app.get("/hello", (req, res) => {
  res.json({ msg: "Testing, sending hellos" });
});

// Serve Frontend
const path = require("path");
app.use("/", express.static(path.resolve(__dirname, "my-app/build")));
// Make sure this is last or else api will call not be able to call /hello
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "my-app/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
