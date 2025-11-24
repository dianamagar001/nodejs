

// // console.log("Start");
// // setTimeout(()=>{
// //     console.log("This prints after 2 seconds");

// const { useCallback } = require("react");

// // },2000);

// // console.log("End");

// // let num=1;
// // setTimeout(()=>{
// //     num=5;
// // },10);
// // setTimeout(()=>{
// // console.log("A",num);
// // },0);
// // console.log("B:",num);

// //task (Asynchronous JS -seTimeout & order confusion)
// // you have four messages:"step 1","step 2","step 3","step 4",
// //requirements
// // console.log("step 1");
// // setTimeout(() => {
// //     console.log("step 2");
// // },0);
// // setTimeout(()=>{
// //     console.log("step 3");

// // },500);
// // setTimeout(() => {
// //     console.log("step 4")
    
// // }, 100);
    

// //task
// // print mesage "a","b","c","d" in this trivkiy order:
// //"a" prints immeditely
// //"b" prints after 0 ms.
// //"c" prints after "b" but before "d".
// //"d" prints last after 50 ms.


// // console.log("a");
// // setTimeout(()=>{
// //     console.log("b");

// // },0)
// // setTimeout(() => {
// //     console.log("c")
// // }, 0);
// // setTimeout(() => {,
    
// //     console.log("d")
// // }, 50);


// //with callback
// // function greet (name,Callback){
// //     console.log("Hello ,"+name);
// //     Callback();//executes after greet finishes
// // }
// // function askQuestion(){
// //     console.log("How are you?");
// // }
// // //using callback
// // greet("diana",askQuestion);

// //without callback
// // function greet (name){
// //     console.log("Hello,"+name);
// // }
// // function askQuestion(){
// // console.log("nam kya hain ?")}
// // greet("diana")
// // askQuestion();




// promise in javascript
// a promise is a object that represents the eventual completion or failure of an asynchronous operation.
// of an asynchronous operation and its resulting value. 
// it helps manage asynchronous tasks in a cleaner way compared to callbacks.

// a promise has three states:
// pending-intial state,neither fulfilled nor rejected.
// fulfilled-operation completed successfully.
// rejected-operation failed.