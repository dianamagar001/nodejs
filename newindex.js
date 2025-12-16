 //  Error handling middleware
// error handling middleware is used to catch and handle errors in express
// so that server doesnot crash and the user get a proper message.

// uses
// prevent server from crashing when an error comes
// sends a proper and user-friendly error message to the client
// handles all error from one central place
// helps in debugging by loging error details
// improves application security by hiding internal errors.
// allowas sending correct HTTP status codes(400,500,etc)



//example of error handling middleware
// const express = require("express");
// const app = express();
//  app.get("/", (req, res ,next) => {
//     const error=new Error("Something went wrong!");
//     next(error); 
//     });
//     app.use((err, req, res, next) => {
//     console.error("error:", err.message);
//     res.send("error occured!");
//     });
//     app.listen(5000,()=>{
//         console.log("server started http://localhost:5000");
//     });




