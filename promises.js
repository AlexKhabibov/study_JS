
// PROMISES (Промисы)



// const fetchData = new Promise((resolve, reject => { resolve('Hello') }));


// fetchData.then(data => { console.log(data) })





// async function fetchData() {
//     console.log("Загрузка данных...");
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log("Данные загружены!");
// }

// fetchData();




// const promise1 = new Promise((resolve, reject) => {
//     console.log("Создаем промис...");
//     resolve("Промис выполнен!");
//     reject('Error dfsgs')
// });

// promise1.then((result) => console.log(result));
// console.log("Этот код выполнится до обработки промиса.");



// const myPromise = Promise.resolve("Промис выполнен!");

// myPromise.then(console.log);





// const myPromise = Promise.resolve("Промис выполнен!");
// const promise1 = Promise.reject('promise failed')

// myPromise.then(console.log);
// promise1.catch(console.log())


// const promise11 = new Promise(function (resolve, reject) {
//     resolve('Good, go go go');
//     reject('Bad, sropstopstop')
// });

// // promise11.then(res => console.log(res));
// promise11.catch(res => console.log(res));






// let generatRandomNum = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             let randomNum = Math.floor(Math.random() * 10) + 1;
//             if (randomNum) resolve(randomNum);
//             else reject('Ошибка в блоке генерации случайного числа');
//         }, 0);
//     })
// };

// generatRandomNum().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });








// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// function createNewArr(arr1, arr2) {
//     return new Promise((resolve, reject) => {
//         const newArr = [];
//         if (arr1.length === arr2.length) {
//             for (let i = 0; i < arr1.length; i++) {
//                 newArr[arr1[i]] = arr2[i];
//                 resolve(newArr);
//             }
//         }
//         reject("❌ Массивы не равны!");
//     });
// }

// createNewArr(arr1, arr2)
//     .then(console.log) // ✅ Выведет объект
//     .catch(console.error) // ❌ Выведет ошибку, если длины массивов не совпадают






// new Promise((resolve) => {
//     setTimeout(() => resolve(1), 1000);
// })
//     .then((result) => {
//         console.log(result); // 1
//         return new Promise((resolve) => {
//             setTimeout(() => resolve(result * 2), 1000);
//         });
//     })
//     .then((result) => {
//         console.log(result); // 2
//         return new Promise((resolve) => {
//             setTimeout(() => resolve(result * 2), 1000);
//         });
//     })
//     .then((result) => {
//         console.log(result); // 4
//     });






// const calculateAB = (a, b) => {
//     return new Promise((resolve) => {
//         const sum = Number(a) + Number(b);
//         resolve(sum)
//     });
// };

// calculateAB(12, 4)
//     .then((result) => console.log(result));



// const devideNums = (a, b) => {
//     return new Promise((resolve, reject) => {
//         (b === 0) ? reject('На 0 делить нельзя') : resolve(a / b);
//     });
// };

// devideNums(2, 4).then((result) => console.log(result)).catch((error) => console.error(error))








// const processData = (data) => {
//     return data;
// };

// const performOperation = (data) => {
//     return new Promise((resolve, reject) => {
//         let result = processData(data);
//         result ? resolve(result) : reject('Ошибка операции');
//     });
// };

// performOperation('test')
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));