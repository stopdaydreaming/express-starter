const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (res, req) => {
    res.setEncoding("hello world");
})
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})