require("dotenv").config({
  path: require("path").resolve(__dirname, ".env"),
  override: true
})

const express = require("express");
const connectDB = require("./src/config/db");

const datasetRoutes = require("./src/routes/datasetRoutes")
const logRoutes = require("./src/routes/logRoutes")

const app = express();

connectDB()

app.use(express.json())

app.use("/api/datasets", datasetRoutes)
app.use("/api/logs", logRoutes)

app.get("/", (req, res) => {
    res.send("Kalbe Dissolution Rate API Running...")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
