const myQuizPromise = new Promise((resolve, reject)=> {

    // Quiz question and options
    const question = "What do cats do for about 16 hours a day? ";
    const options = [
        "a) Run a marathon",
        "b) Plot world domination",
        "c) Nap like there's no tomorrow",
        "d) Pratice their meowing skills"
    ];

    // Display the question and options
    console.log(question);
    options.forEach(option => console.log(option));

    const answer = "c) Nap like there's no tomorrow";  // Change this to test different answers. 
    
    if (answer === "c) Nap like there's no tomorrow") {
        resolve("Congratulations! You resolved the quiz correctly.");
    } else {
        reject("Sorry, that's not the right answer. Try again!");
    }

});
    
myQuizPromise
        .then((message)=>{
        console.log(message);
        return fetch('https://api.adviceslip.com/advice');  //fetching random advice from Advice SIP API
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); 
    })
    .then(data => {
        console.log("Here's some advice for you: " + data.slip.advice);
    })
        .catch((error)=>{
        console.log("Error:" + error
        );
    })