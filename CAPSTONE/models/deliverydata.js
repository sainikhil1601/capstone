const mongoose = require('mongoose');
//create Schema and Model
const deliverydataSchema = mongoose.Schema({
   qty:{
   type: Number,
   required: [true]
 },
 transfer:{
  type: string,
  
},
username:{
  type: string,
  required: [true]
},
phone:{
  type: Number,
  required: [true]
},
email:{
  type: Number,
  required: [true]
},
address:{
  type: string,
  required: [true]
},
message:{
  type: string,
},

});
module.exports = mongoose.model('', userSchema);
