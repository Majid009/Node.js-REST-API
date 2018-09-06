# Node.js-REST-API
In this REST API all CRUD operations are performed using all convetions of REST Architechure. This is simple api to manage courses.

# Dependencies 
* Express
* body-parser

# Courses REST API details

# 1-Get List of All Courses
URL: /api/courses/ <br>
Http Method:GET <br>
Response Type:JSON <br>

# 2-Get a Course with specific id
URL: /api/courses/2   ( 2 is course id) <br>
Http Method:GET <br>
Response Type:JSON <br>

# 3-Add New Course
URL: /api/courses/add <br>
Http Method:POST <br>
Response Type:JSON <br>

 Parametes:- <br>
    id (int) <br>
    name (string) <br>
    fee (string) <br>
    
# 4-Delete Course
URL: api/courses/delete/2  ( 2 is course id) <br>
Http Method:DELETE <br>
Response Type:JSON <br>
