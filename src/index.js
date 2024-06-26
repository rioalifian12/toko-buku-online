require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running di port ${4000}`);
});
