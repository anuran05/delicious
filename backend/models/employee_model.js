// IMPORT MONGOOSE 
const model_mongoose = require('mongoose');

//CREATE MODEL Employee means Employee Information
let UserModel = model_mongoose.model('Users_collection', 
{
    username: { type: String },
    useremail: { type: String },
    userpass: { type: String },
    usergender: { type: String },
    usercountry: { type: String },
	regdatetime: { type: Date, default: Date.now }
});

//EXPORT MODULE Employee using BINDING
module.exports = UserModel ;
