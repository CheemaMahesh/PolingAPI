# PolingAPI
FOLDER STRUCTURE
                                               **#POLING API**
                                                      |   
                                                      |
             =========================================|================================================================
             |              |            |          |               |            |                 |                  |
          config      controllers      models      routes      .gitignore      index.js      package-lock.json      package.json
            |              |                |          |
            |              |                |          |
        mongoose.js        |                |          |
                           |                |          |
=====================================       |        ======================================================
|                    |      |               |              |                 |                  |
home_controller.js   | option_controller.js |            index.js        option.js          question.js
                     |                      |
       question_controller.js               |
                                            |
====================================================
      |                      |
    options.js          questions.js






**Polling System API**
This is a polling system API built with Node.js that allows users to create questions, add options, and vote on them. It provides various endpoints for managing questions, options, and votes.

**Features**
1.Create a question
2.Add options to a question
3.Add a vote to an option of a question
4.Delete a question (optional: if no options have votes)
5.Delete an option (optional: if no votes have been given)
6.View a question with its options and votes

**Technologies Used**
1.Node.js
2.Express.js (for API routing)
3.MongoDB (as the database)
4.Mongoose (for MongoDB object modeling)
5.Postman (for testing the API endpoints)

**##Getting Started**
***Prerequisites***
==>Node.js installed on your local machine
==>MongoDB installed and running on your local machine
==Postman (or any other API testing tool) installed
==>Clone this repository
==>go to terminal 
    a.npm init
    b.npm install express
    c.npm install mongoose
    

**Task**
- You need to create an API where anyone can create questions with options and also add votes to it
- Authentication/User identity is not needed, this is going to be a completely open application, however
if you want to and think there’s extra time, you can create authentication
***- Features***
- Create a question (you can add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it
- 
***- Required Routes (Remember, in a real test, you won’t be given routes mostly)***
  localhost:8000 (HomePage)(to get all the questions)
- /questions/create (To create a question)
- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)

