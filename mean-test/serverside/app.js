
const mongoose = require('mongoose');
const users = require('./models/users')
mongoose.connect('mongodb://localhost:27017/Tune-In', { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });

const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});



app.get('/users', (req, res, next) => {
    users.find() 
    .then(data => res.status(200).json(data))
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
});

});
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.post('/users', (req, res, next) => {
    res.status(201).json('Post successful');
    const Users = new users({
    firstName: req.body.firstName,
    lastName:  req.body.lastName,
    email:  req.body.email,
    password: req.body.password,
    });
    Users.save()
        .then(() => { console.log('Success');})
        .catch(err => {console.log('Error:' + err);});
});

app.delete("/users/:id", (req, res, next) => {
    users.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

app.put('/users/:id', (req, res, next) => { 
    console.log("id: " + req.params.id) 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
        users.findOneAndUpdate( 
            {_id: req.params.id}, 
            {$set:{ 
                firstName : req.body.firstName, 
                lastName : req.body.lastName,
                email:  req.body.email,
                password: req.body.password,
            }}, 
            {new:true} 
        ) 
        .then((users) => { 
            if (users) { 
                console.log(users); 
            } else { 
                console.log("no data exist for this id"); 
            } 
        }) 
        .catch((err) => { 
            console.log(err); 
        }); 
    } else { 
        console.log("please provide correct id"); 
    } 
});

app.get('/users/:id', (req, res, next) => {
    users.findOne({_id: req.params.id}) 
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
});
                    
module.exports=app;