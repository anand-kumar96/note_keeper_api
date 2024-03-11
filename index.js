const app = require('./app');
const db = require("./config/db")
const port = 3000;
// create route
app.get('/', (req,res)=>{
    res.send("Hello world, Welcome to nodejs project");
})
app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`);
})