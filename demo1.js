
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// The constructor syntax for a promise object is:

// let promise = new Promise(function(resolve, reject) {
//   // executor (the producing code, "singer")
// });
// The function passed to new Promise is called the executor. When new Promise is created, it runs automatically. It contains the producing code, that should eventually produce a result. In terms of the analogy above: the executor is the “singer”.

// Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

// When the executor obtains the result, be it soon or late – doesn’t matter, it should call one of these callbacks:

// resolve(value) — if the job finished successfully, with result value.
// reject(error) — if an error occurred, error is the error object.


// So to summarize: the executor runs automatically, it should do a job and then call either resolve or reject.

// The promise object returned by new Promise constructor has internal properties:

// state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
// result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
// So the executor eventually moves promise to one of these states:

//-----------------------------------------------------------------------


// const myFirstPromise = new Promise((resolve, reject) => {
//     // do something asynchronous which eventually calls either:
//     //
//     //   resolve(someValue); // fulfilled
//     // or
//     //   reject("failure reason"); // rejected
//   });



// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("HUMANA!"), 1000);
//   });
  
//   promise.then(
//     result => alert(result),
//     error => alert(error) 
//   );

 





//   let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });

//   promise.then(
//     result => alert(result),
//     error => alert(error) 
//   );



// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//   });
  
//   console.log(promise1);

// new Promise((resolve, reject) => {
//     console.log('Initial');

//     resolve();
// })
// .then(() => {
//     throw new Error('Something failed');
        
//     console.log('Do this');
// })
// .catch(() => {
//     console.error('Do that');
// })
// .then(() => {
//     console.log('Do this, no matter what happened before');
// });

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   delay(3000).then(() => alert('runs after 3 seconds'));
 
const promiseToCleanTheRoom = new Promise(function(resolve,reject){
   
    const isClean = false;


        if( isClean){
            resolve ('CLean');
        } else {
            reject ( ' wala pa');
        }
});

promiseToCleanTheRoom.then(function(fromResolve){
    console.log('The Room is ' + fromResolve);
}).catch(function(fromReject){
    console.log('The room' + fromReject );
})