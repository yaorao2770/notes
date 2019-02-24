// const Promise = require("bluebird");
// // Promise.promisifyAll可以把一个模块所有的函数都变为 async的,具体变现是该模块下的方法后缀添加 Async: fs.readFileAsync(file)
// const fs = Promise.promisifyAll(require("fs"));

// async function main() {
//     const contents = await fs.readFileAsync("input.txt", "utf8");
//     console.log(contents);
// }

// main();

// const fs = require("fs");

const file = "input.txt";

// const beforeContent = fs.readFileSync(file);

// console.log("beforeContent--------", beforeContent.toString());

// fs.writeFile(file, "牙疼", err => {
//     if (err) console.log("写入数据出错", err);

//     fs.readFile(file, (err, data) => {
//         if (err) console.log("再次读取数据出错", err);
//         console.log("read again file content is:", data.toString());
//     })
// });

// const Promise = require("bluebird");
// const fs = Promise.promisifyAll(require("fs"));

// fs.readFileAsync(file, "utf8")
//     .then(() => fs.writeFileAsync(file, "write file new content by promise"))
//     .then(() => fs.readFileAsync(file, "utf8"))
//     .then(result => console.log("最终结果是", result))
//     .catch(err => console.log(err))

function getHeroPromise() {
    return new Promise((resolve, reject) => {
        const heros = [
            { id: 1, name: "join" },
            { id: 2, name: "apple" },
            { id: 3, name: "babab" }
        ];
        resolve(heros);
    });
}

const queryApplicantsPromise = new Promise((resolve, reject) => {
    const applicants = [
        { name: "张三", sex: "man" },
        { name: "李四", sex: "man" },
        { name: "阳阳", sex: "woman" }
    ];
    resolve(applicants);
});

// queryApplicantsPromise.then()

// Promise.resolve(1)
//     .then(() => {return queryApplicantsPromise})
//     .then(applicants => console.log("applicants------", applicants))

// const resolvedProm = Promise.resolve(33);

// let thenProm = resolvedProm.then((value)=>{
//     console.log("value: " + value);
//     return value;
// });
// // instantly logging the value of thenProm
// console.log(thenProm);

// // using setTimeout we can postpone the execution of a function to the moment the stack is empty
// setTimeout(()=>{
//     console.log(thenProm);
// });

Promise.resolve('foo')
    .then(string => {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                string += 'bar';
                resolve(string);
            }, 1);
        });
    })
    .then(function (string) {
        setTimeout(function () {
            string += 'baz';
            console.log(string);
        }, 1)
        return string;
    })
    .then(function (string) {
        console.log("最后一个string", string);
    });

var first = function(){
    return new Promise((resolve, reject) => {
        resolve("first");
    })
};

var second = function(string){
    console.log(string)
    setTimeout(function () {
        string += '----second';
    }, 1)
    return string;
}

var third = function(){
    // return new Promise((resolve, reject) => {
    //     resolve("third");
    // })
}

// Promise
//     .resolve()
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 resolve('first');
//             }, 1);
//         })
//     })
//     .then((string) => {
//         console.log("outer", string)

//         setTimeout(function () {
//             string += '----second';
//             console.log("inner:", string)
//         }, 1)
//         return string;
//     })
//     // .then(third)
//     .then(num => console.log("num:", num))

