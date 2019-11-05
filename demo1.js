
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. a Promise object is used for handling asynchronous computations which has some important guarantees that are difficult to handle with the callback method.

// A Promise is in one of these states:

// PENDING - initial state, not fulfilled or rejected
// FULFILLED - meaning that the operation is completed successfully
// REJECTED - meaning that the operation failed .
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



// PROMISE OBJECT 

// .then (fulfilled)
// .catch = (rejected)


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
//     result => console.log(result),
//     error => alert(error) 
//   );

 





//   let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });

//   promise.then(
//     result => (result),
//     error => (error) 
//   );



// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('WEW');
//     }, 3000);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//   });
  
//   console.log(promise1);


//------------------------------------------------------


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   delay(3000).then(() => alert('runs after 3 seconds'));
 
// const promiseToCleanTheRoom = new Promise(function(resolve,reject){


//         if( isClean){
//             resolve ('CLean');
//         } else {
//             reject ( ' wala pa');
//         }
// });

// promiseToCleanTheRoom.then(function(fromResolve){
//     console.log('The Room is ' + fromResolve);
// }).catch(function(fromReject){
//     console.log('The room' + fromReject );
// })

//---------------------------------------------------------------------

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

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(" Comeback");
//     }, 3000);

//     setTimeout(() => {
//         reject (" Walang Balikan SADED");
//     }, 3000);

//     promise.then((response) => {
//         log(response);
//     }).catch((error) => {
//         log(error);
//     });

// });

// function getCurrentTime(callback) {
//     return setTimeout(function() {
//       const currentTime = new Date();
//       callback(currentTime);
//     }, 2000);
//   }
//   getCurrentTime(function(currentTime) {
//     console.log('The current time is: ' + currentTime);
//   });


// function getCurrentTime(onSuccess, onFail) {
//     // Get the current 'global' time from an API
//     return setTimeout(function() {
//       // randomly decide if the date is retrieved or not
//       const didSucceed = Math.random() >= 0.5;
//       if (didSucceed) {
//         const currentTime = new Date();
//         onSuccess(currentTime);
//       } else {
//         onFail('Unknown error');
//       }
//     }, 2000);
//   }
//   getCurrentTime(function(currentTime) {
//     console.log('The current time is: ' + currentTime);
//   }, function(error) {
//     console.log('There was an error fetching the time');
//   });


const processDataAsycn = async (num) => {   
    if(typeof num === 'number') {  
      return 2*num;  
    } else {  
      throw new Error('Something went wrong');  
    }  
  };  
  processDataAsycn(22).then((data) => {  
    console.log('Data from processDataAsycn() with async( When promise gets resolved ): ' + data);  
  }).catch((error) => {  
    console.log('Error from processDataAsycn() with async( When promise gets rejected ): ' + error);  
   
  });