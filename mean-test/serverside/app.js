
const mongoose = require('mongoose');
const projects = require('./models/projects')
mongoose.connect('mongodb://localhost:27017/Capstone', { useNewUrlParser: true,  useUnifiedTopology: true })
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


app.get('/projects', (req, res, next) => {
    projects.find() 
    .then(data => res.status(200).json(data))
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
});

});
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.post('/projects', (req, res, next) => {
    res.status(201).json('Post successful');
    const Projects = new projects({
    firstName: req.body.firstName,
    lastName:  req.body.lastName,
    email:  req.body.email,
    phone:  req.body.phone,
    jobTitle:  req.body.jobTitle,
    projectTitle:  req.body.projectTitle,
    street:  req.body.street,
    city:  req.body.city,
    state:  req.body.state,
    zip:  req.body.zip,
    descriptionOfProject:  req.body.descriptionOfProject,
    technicalSkillsRequired:  req.body.technicalSkillsRequired,
    });
    Projects.save()
        .then(() => { console.log('Success');})
        .catch(err => {console.log('Error:' + err);});
});

app.delete("/projects/:id", (req, res, next) => {
    projects.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

app.put('/projects/:id', (req, res, next) => { 
    console.log("id: " + req.params.id) 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
        projects.findOneAndUpdate( 
            {_id: req.params.id}, 
            {$set:{ 
                firstName : req.body.firstName, 
                lastName : req.body.lastName,
                email:  req.body.email,
                phone:  req.body.phone,
                jobTitle:  req.body.jobTitle,
                projectTitle:  req.body.projectTitle,
                street:  req.body.street,
                city:  req.body.city,
                state:  req.body.state,
                zip:  req.body.zip,
                descriptionOfProject:  req.body.descriptionOfProject,
                technicalSkillsRequired:  req.body.technicalSkillsRequired,
            }}, 
            {new:true} 
        ) 
        .then((projects) => { 
            if (projects) { 
                console.log(projects); 
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

app.get('/projects/:id', (req, res, next) => {
    projects.findOne({_id: req.params.id}) 
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