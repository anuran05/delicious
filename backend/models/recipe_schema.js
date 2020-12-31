const schema_mongoose = require('mongoose');

const User_RecipesSchema = schema_mongoose.Schema(
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
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('User_Recipes', User_RecipesSchema);