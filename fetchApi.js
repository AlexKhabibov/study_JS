// // Создадим простой запрос с эндпоинта через input, в которй будем вставлять api и обычную кнопку, которая будет фетчить из эндпоинта все данные для просмотра содержимого
// // https://jsonplaceholder.typicode.com/users/

// // Получаем элементы из DOM
// const btnEl = document.querySelector('.btn');
// const inputEl = document.querySelector('.input');
// const wrapperEl = document.querySelector('.wrapper');
// const showInput = document.querySelector('.showInput');
// const fetchData = document.querySelector('.fetchData');

// // Задаём стили для обёртки
// wrapperEl.style.display = 'flex';
// wrapperEl.style.marginTop = '50px';
// wrapperEl.style.alignItems = 'center';
// wrapperEl.style.justifyContent = 'center';
// wrapperEl.style.flexDirection = 'column';
// wrapperEl.style.fontFamily = 'Arial, sans-serif';

// // Вешаем слушателя на инпут, чтобы получить введённый URL
// let inputVal = '';

// inputEl.addEventListener('change', function () {
//     inputVal = inputEl.value;
//     showInput.textContent = `Введенный URL: ${inputVal}`;
//     console.log(inputVal);
// });

// // Создаём функцию для fetch-запроса и форматированного вывода данных
// async function getData() {
//     if (!inputVal) {
//         fetchData.innerHTML = "<p style='color: red;'>URL не введён!</p>";
//         inputEl.style.borderColor = 'red';
//         return;
//     }

//     try {
//         const response = await fetch(inputVal);

//         if (!response.ok) {
//             throw new Error(`Ошибка HTTP: ${response.status}`);
//         }

//         const data = await response.json();

//         // Очищаем блок перед добавлением новых данных
//         fetchData.innerHTML = '';

//         // Создаём список для вывода данных
//         const list = document.createElement('ul');
//         list.style.padding = '10px';
//         list.style.border = '1px solid #ccc';
//         list.style.borderRadius = '8px';
//         list.style.width = '400px';
//         list.style.backgroundColor = '#f9f9f9';

//         // Заполняем список элементами
//         data.forEach(user => {
//             const listItem = document.createElement('li');
//             listItem.style.margin = '10px 0';
//             listItem.style.padding = '10px';
//             listItem.style.background = '#fff';
//             listItem.style.borderRadius = '5px';
//             listItem.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
//             listItem.innerHTML = `<strong>${user.name}</strong> (ID: ${user.id})<br>Email: ${user.email}<br>City: ${user.address.city}`;
//             list.appendChild(listItem);
//         });

//         // Добавляем список на страницу
//         fetchData.appendChild(list);

//     } catch (error) {
//         fetchData.innerHTML = `<p style='color: red;'>Ошибка загрузки данных! ${error}</p>`;
//     }
// }

// // Вешаем слушатель на кнопку
// btnEl.addEventListener('click', getData);
