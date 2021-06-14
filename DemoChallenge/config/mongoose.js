const mongoose = require("mongoose");

const localDB = 'mongodb://localhost/DemoChallenge';
mongoose.set("useFindAndModify",false);

mongoose.connect(localDB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>console.log("connected to DB"))
.catch(err=>console.log("error with DB"))