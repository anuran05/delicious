const schema_mongoose = require('mongoose');

const UsersSchema = schema_mongoose.Schema(
    {
    uname: { type: String },
    uemail: { type: String },
    upass: { type: String },
    ugender: { type: String },
    regdatetime: { type: Date, default: Date.now }
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('Users_collection', UsersSchema);