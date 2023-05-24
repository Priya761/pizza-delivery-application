const express = require("express");
const morgan = require("morgan");
const port = 3000;

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// Route
// CRUD operations - Create, Read, Update, Delete
// the input given by the user to the server is sent using the "req".
// server sends response back to the client using the "res".
app.get("/", (req, res) => {
  res.send("<h1>Hello from node server</h1>");
});

app.listen(`${port}`, () => {
  console.log("Server running on port " + `${port}`);
});
