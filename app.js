const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//body parse MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// ----- Small Database of Courses 
var Courses = [
    {id:1 , name: 'Node Js', fee:'300$'},
    {id:2 , name: 'PHP', fee:'100$'},
    {id:3 , name: 'JavaScript', fee:'310$'},
    {id:4 , name: 'Python', fee:'900$'},
    {id:5 , name: 'Android', fee:'399$'},
];

// Get all the Courses 
app.get('/api/courses' ,(req , res)=>{
    res.json(Courses);
})

// Get the id specified course
app.get('/api/courses/:id' , (req, res)=>{
    var index=0;
    Courses.forEach(function(course){
        if(course.id == req.params.id){
            res.json(course);
        }

        if(Courses.length == index+1){
           res.json({
               "message" : "Invalid Course id"
           });
        }
        index++;
    })
    
})

// Add New Course 
app.post('/api/courses/add' , (req , res)=>{
    var course = {
        id: parseInt(req.body.id) ,
        name: req.body.name ,
        fee: req.body.fee
    }
    Courses.push(course);
    res.json({
        "message": "Course added successfuly"
    });
})

// delete existing course
app.delete('/api/courses/delete/:id' , (req , res)=>{
    var index=0;
    Courses.forEach(function(course){
        if(course.id == req.params.id){
            Courses.splice(index , 1);
            res.json({
                "message" : "Course deleted successfully"
            });
        }

        if(Courses.length == index+1){
           res.json({
               "message" : "Invalid Course id"
           });
        }
        index++;
    })
})

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404);
    res.send("<h1> 404 Not Found</h1> <p> please go To <a href='http://localhost:8000/api/courses'>http://localhost:8000/api/courses</p>");
  });


app.listen(8000 , ()=>{
    console.log('Server is Listening at Port 8000');
})