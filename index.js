const express = require("express");
const app = express();
const port = 5000;


app.use("/static", express.static(__dirname + "/static"))

app.get ("/*", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})