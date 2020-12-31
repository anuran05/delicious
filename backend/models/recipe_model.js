// IMPORT MONGOOSE 
const model_mongoose = require('mongoose');

//CREATE MODEL Employee means Employee Information
let User_RecipeModel = model_mongoose.model('User_RecipesSchema', 
{
    title: { type: String },
    author: { type: String },
    prep_time: { type: String },
    cook_time: { type: String },
    serves: { type: String },
    ingredients: { type: String },
    directions: { type: String },
    status: {type: String},
	regdatetime: { type: Date, default: Date.now }
});

//EXPORT MODULE Employee using BINDING
module.exports = User_RecipeModel ;
