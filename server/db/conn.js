const mongoose = require('mongoose');
const Db = process.env.ATLAS_URI;

mongoose.connect(
  Db, {
    useNewUrlParser:true, useUnifiedTopology:true
  }, (err) => {
    if(err){
      console.log(err)
    }
    else{
      console.log('sucsassfuly') 
    }
  }
)