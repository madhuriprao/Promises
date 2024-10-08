const myPromise = new Promise((resolve, reject)=> {
let success = true;
    
        if (success) {
            resolve("Promise is resolved");
        
        } else {
            reject("Operation was rejected");
        }
    });
    
    myPromise
        .then((message)=>{
        console.log(message);
    })
        .catch((error)=>{
        console.log("error:" + error
        );
    })