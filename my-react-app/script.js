const express = require("express");
const path = require("path");
const bodyparser= require("body-parser"); //(main logic to know)

const app = express();
app.use(bodyparser.urlencoded({extended: true})); //(main logic to know)

app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
app.post("/",(req,res)=>{
    console.log(req.body.inp1)
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});