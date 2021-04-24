const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./model/user");
const { mongoURI } = require("./config/key");
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello k$hah");
});

app.post("/api/users/register", async (req, res) => {
  try {
    const NewUser = new User(req.body);
    const savedUser = await NewUser.save();
    res.status(200).json({ success: true, userAdded: savedUser });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Unable to Add User", error: err });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
