const express = require("express");
const app = express();
const port = process.env.PORT || 3800

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.get("/", (request,response) => {
    response.send("my server is live ");
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})