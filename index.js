const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://kshah99:maWhvrrAN7ycvdIF@neog-cluster.7hxhm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
