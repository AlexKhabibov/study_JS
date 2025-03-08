
// const data = fetch('https://jsonplaceholder.typicode.com/users/1')
// data.then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('cant fetch data'))



// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error)
// );






// fetch('https://jsonplaceholder.typicode.com/posts/1') // Отправляем GET-запрос
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Ошибка HTTP: ${response.status}`); // Обрабатываем ошибку
//         }
//         return response.json(); // Преобразуем ответ в JSON
//     })
//     .then(data => {
//         console.log('Полученные данные:', data); // Работаем с полученными данными
//     })
//     .catch(error => {
//         console.error('Ошибка запроса:', error); // Обрабатываем возможные ошибки
//     });


// через async await
// async function getData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error)
//     }
// }

// getData()


// async function func() {

//     await fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('cant fetch data'))
// }

// func();




// async function getStarWarsMovie(id) {
//     const response = await fetch(`https://swapi.dev/api/films/${id}/`)
//     if (response.ok) { console.log('ответ получен', response) }
//     return response.json()
// }

// const movies = getStarWarsMovie(1).then((movie) => {
//     console.log(movie.title)
//     // *2
// })

// console.log('результат вызова функции', movies)
// // *3





// let dataJson = fetch('https://jsonplaceholder.typicode.com/users/1')

// dataJson
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('cant fetch data - ', error));




// let dataJson = fetch('https://jsonplaceholder.typicode.com/users/1')

// async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     console.log(data);
// };

// getData().catch(error => console.error("Произошла ошибка:", error));



// const url = 'https://jsonplaceholder.typicode.com/users/1';

// fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error('Ошибка ответа от сервера!', error))




// async function hello() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await response.json();
//     return data;
// }

// hello().then(console.log); // "Привет!"
// console.log(hello()); // Promise { 'Привет!' }





// async function getData() {
// let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// let data = await response.json();
//     console.log(data);
// }

// getData(); // Ждет fetch, потом выводит данные





// async function getData() {
//     try {
//         let response = await fetch("https://jonplaceholder.typicode.com/todos/1");
//         let data = await response.json();
//         return data;
//     } catch (error) {
//         console.log('Error in getData()', error);
//     }
// }

// getData();






// async function getUserData(id) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     if (response.status === 200) {
//         const data = await response.json()
//         console.log(data);;
//     } else {
//         console.log('Ошибка загрузки');
//     }
// };

// getUserData(1)



// async function getUserData2(id) {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     if (response.status === 200) {
//         let jsonData = await response.json();
//         return jsonData;
//     } else {
//         console.log("Данные с сервера не получены");
//     }
// };

// getUserData2(2).then(result => {
//     if (result === undefined) {
//         console.log("Пользователь не найден");
//     } else {
//         console.log(result);
//     }
// }).catch(error => console.error('Ошибка загрузки'));




// const fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => resolve(data))
//             .catch((err) => reject(err));
//     });
// };


// fetchData('https://jsonplaceholder.typicode.com/posts')
//     .then(data => console.log(data))
//     .catch(error => console.error('Ошибка:', error));






// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// async function getDataFromUrl(url) {
//     const idEl = document.querySelector('.user__id');
//     const titleEl = document.querySelector('.user__title');

//     const response = await fetch(url);
//     const dataJson = await response.json();

//     idEl.textContent = dataJson.id;
//     titleEl.textContent = dataJson.title;
// };

// getDataFromUrl(url);