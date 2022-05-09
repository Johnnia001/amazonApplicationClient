# Amazon Application Project Front End



## Links

- [Other Repo](https://github.com/Johnnia001/AmazonApplication
)

- [Deployed Api](https://tranquil-stream-27269.herokuapp.com/)

 - [Deployed Client](https://amazon-application-client.vercel.app/)


This is a RESTful API using MVC architectural pattern To retrieve a list of the San Francisco Food Trucks.
The front end is React with javascript and the back end uses spring boot with java.This application features a one to many relationship with the user and restaurants. Axios is used as a third party api to send requests to back end. 
Due to time constraints, features such as edit or delete is available yet.

## From the repo:

1. clone this project locally
2. Run `npm install` in your bash /command line
3. Run `npm start` in your bash /command line to start the server
   You can use nodemon, if installed, for automatic restarting in development environment
   nodemon

# REST API

## Requests
`/` Home page
`GET /restaurant/getAll` Get list of food trucks
`POST /restaurant/add` Create new food truck entry

## Responses

GET Response example:

[
{
"applicant": "Bunny Heaven",
"address": "Peter Rd",
"foodItems": "Carrots",

}
]
If not found or empty:
[]
