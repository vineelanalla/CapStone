const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName:  { type: String, required: true},
    lastName:  { type: String, required: true},
    email:  { type: String, required: true},
    phone:  { type: String, required: true},
    jobTitle:  { type: String, required: true},
    projectTitle:  { type: String, required: true},
    street:  { type: String, required: true},
    city:  { type: String, required: true},
    state:  { type: String, required: true},
    zip:  { type: String, required: true},
    descriptionOfProject:  { type: String, required: true},
    technicalSkillsRequired:  { type: String, required: true},
});


module.exports = mongoose.model('user', usersSchema,'users');
