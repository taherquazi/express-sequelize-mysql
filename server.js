const express = require("express");
const cors = require("cors");
const todorouter = require("./routes/todo.routes");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(todorouter);

const db = require("./models");
db.sequelize.sync({force: true}).then(()=>{
    console.log("Drop and re-sync");
});
app.get("/healthz",(req,res)=>{
    res.json({"msg": "Server is working"});
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}.`);
})