const express = require('express');
const healthRoutes = require('./routes/healthRoutes');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("AI career Assistant backend is running")
})

app.use("/api/health", healthRoutes)

module.exports = app;