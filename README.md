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


