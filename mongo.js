// const mongoose = require("mongoose");
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test22',
  {
    useNewUrlParser: true,
     useUnifiedTopology: true
  }
).then(()=>console.log("success"))
.catch((error)=>console.log(error));

const kittySchema = new mongoose.Schema({
    name: String
  });

const kitten = mongoose.model('kitten', kittySchema);
const silence = new kitten({ name: 'Silence' });
silence.save();