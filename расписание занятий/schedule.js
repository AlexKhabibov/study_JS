
/* Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

7. При разработке используйте Bootstrap для стилизации элементов. */

// Строка JSON, которая будет хранить данные по умолчанию, если их нет в localStorage
const defaultData = `[
    {
        "name": "Жим лежа",
        "time": "14-00",
        "maxMembers": 10,
        "actualMembers": 6
    },
    {
        "name": "Бег",
        "time": "14-00",
        "maxMembers": 10,
        "actualMembers": 6
    },
    {
        "name": "Присяд",
        "time": "14-00",
        "maxMembers": 10,
        "actualMembers": 6
    },
    {
        "name": "Пресс",
        "time": "14-00",
        "maxMembers": 10,
        "actualMembers": 6
    }
]`;

// Загружаем данные из localStorage, если они есть, иначе используем defaultData
let exerciseData = JSON.parse(localStorage.getItem('exerciseData')) || JSON.parse(defaultData);

// Функция для сохранения данных в localStorage
function saveToLocalStorage() {
    localStorage.setItem('exerciseData', JSON.stringify(exerciseData));
}

// Функция для отображения расписания
function renderSchedule() {
    const scheduleContainer = document.querySelector('#schedule');
    scheduleContainer.innerHTML = '';  // Очищаем контейнер

    exerciseData.forEach((item, index) => {
        const isFull = item.actualMembers >= item.maxMembers;
        const buttonText = isFull ? 'Записи нет' : 'Записаться';
        const buttonDisabled = isFull ? 'disabled' : '';
        const cancelButtonDisabled = item.actualMembers === 0 ? 'disabled' : '';

        const card = `
        <div>
            <h3 class='text-center'>${item.name}</h3>
            <p>Время: ${item.time}</p>
            <p>Записано: ${item.actualMembers} / ${item.maxMembers}</p>
            <button ${buttonDisabled} class="btn btn-primary" onclick="toggleBooking(${index})">${buttonText}</button>
            <button ${cancelButtonDisabled} class="btn btn-primary" onclick="cancelBooking(${index})">Отменить запись</button>
        </div>
        <hr>
        `;
        scheduleContainer.innerHTML += card;
    });
}


// Запись на занятие
function toggleBooking(index) {
    const classData = exerciseData[index];  // Получаем объект занятия по индексу
    console.log('Before booking:', classData); // Логируем данные перед записью

    // Если есть свободные места, увеличиваем количество записавшихся
    if (classData.actualMembers < classData.maxMembers) {
        classData.actualMembers++;  // Увеличиваем количество записавшихся
        console.log('After booking:', classData); // Логируем данные после записи
        saveToLocalStorage();  // Сохраняем изменения в localStorage
        renderSchedule();  // Перерисовываем расписание
    } else {
        alert('Мест нет');  // Если мест нет, выводим сообщение
    }
}


// Функция для отмены записи
function cancelBooking(index) {
    const classData = exerciseData[index];
    if (classData.actualMembers > 0) {
        classData.actualMembers--;
        saveToLocalStorage();  // Сохраняем изменения в localStorage
        renderSchedule();
    }
}

// Загружаем расписание при старте
renderSchedule();