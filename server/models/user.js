// var mongoose = require('mongoose');
 
// module.exports = mongoose.model('User',{
// 		username: String,
//     password: String,
//     email: String,
//     gender: String,
//     address: String
// });

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: 'String', required: true },
  password: { type: 'String', required: true },
  email: { type: 'String', required: true },
  dob: { type: 'Date', required: true },
});

export default mongoose.model('Post', userSchema);
