// const queryHerosPromise = new Promise((resolve, reject) => {
//     resolve(1234);
// });
// const queryApplicantsPromise = new Promise((resolve, reject) => {
//     resolve(`im going home now. Ive done my quota of work for the day!`);
// });

// async function test() {
//     let infos = await Promise.all([queryHerosPromise, queryApplicantsPromise]);
//     console.log(infos);
// }
// test();

// async function fn() {
//     return 1;
// }
// fn().then(console.log)

// function a() {
//     return "somthing";
// }

// async function test() {
//     return Promise.resolve(123);
// }

// async function quota() {
//     const v1 = await 123;
//     const v2 = await test();
//     console.log(v1, v2);
// }

// quota();

function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(n + 200)
        }, n);
    })
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}
function step2(m, n) {
    console.log(`step2 with ${m}, ${n}`);
    return takeLongTime(m + n);
}
function step3(k, m, n) {
    console.log(`step3 with ${k}, ${m}, ${n}`);
    return takeLongTime(k + m + n);
}

function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => {
            return step2(time1, time2).then(time3 => [time1, time2, time3])
        })
        .then(times => step3(...times))
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        })
}

//  async function doIt() {
//     console.time("doIt");
//     const time1 = 300;
//     const time2 = await step1(time1);
//     const time3 = await step2(time1, time2);
//     const result = await step3(time1, time2, time3);
//     console.log(time1,  time2, result);
//     console.timeEnd("doIt");
// }

doIt();