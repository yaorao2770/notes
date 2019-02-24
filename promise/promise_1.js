var p = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    // console.log(num)
    if (num > 1) {
        resolve("大于1");
    } else {
        reject(Error("i don`t have a cule!"));
    }
});

p.then(result => {
    // console.log(result);
}).catch(err => {
    // console.log("catch-----------", err);
});

// const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("TIMEOUT");
//     }, 1000);
// });

const queryApplicantInfo = new Promise((resolve, reject) => {
    const arr = [
        {id: 0, name: "join"},
        {id: 1, name: "apple"},
        {id: 2, name: "banna"}
    ];
    const status = 200;
    setTimeout(() => {
        if (status !== 200) {
            reject(`API ERROR ${status}`);
            return;
        }
        resolve(arr);
    }, 500);
});

const pushHeroPromise = new Promise((resolve, reject) => {
    resolve(123);
});

function multiply(input){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, 500, input*input);
    });
}

function add(input){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, 500, input+input);
    });
}

var init = new Promise((resolve, reject) => {
    resolve(1);
});

init
    .then(add)
    .then(multiply)
    .then(add)
    .then(multiply)
    .then(result => {
        console.log("result------", result);
    })
    .catch(err => console.log(err))

// Promise
//     .race([queryApplicantInfo, timeoutPromise])
//     .then(infos => {
//         console.log("applicantInfo", infos);
//     })
//     .catch(err => {
//         console.log("catch----", err);
//     })

// Promise
//     .all([pushHeroPromise, queryApplicantInfo])
//     .then(([heros, applicants]) => {
//         console.log("heros", heros);
//         console.log("applicants", applicants);
//     })
//     .catch(err => {
//         console.log("catch--all--", err);
//     })

var first = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("first");
            resolve("first");
        }, 1000);
    });
};

var second = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("second");
            resolve("second");
        }, 500);
    });
}

var third = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("third");
            resolve("third");
        }, 2000);
    });
}

Promise
    .resolve()
    .then(first)
    .then(second)
    .then(third)
    .then(num => console.log(num))


