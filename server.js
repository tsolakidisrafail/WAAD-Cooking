const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require ("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then (() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const recipeRoutes = require("./routes/recipes");
const userRoutes = require("./routes/users");

app.use("/api/recipes", recipeRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));