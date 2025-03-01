'use strict'


// isFirstLetterBig = (text) => {
//     if (text === '') {
//         return '';
//     }

//     if (text[0] === text[0].toUpperCase()) {
//         return text;
//     } else {
//         return `${text[0].toUpperCase()}${text.slice(1)}`
//     }
// }

// console.log(isFirstLetterBig('name'));





// const isJob = (job) => {
//     if (job === 'processing') {
//         return 'Делаем раз'
//     } else if (job === 'paid') {
//         return 'Делаем два'
//     } else if (job === 'new') {
//         return 'Делаем три'
//     } else {
//         return 'Делаем четыре'
//     }
// }

// console.log(isJob('new'));




// const jobH = (job) => {
//     switch (job) {
//         case 'processing': // status === 'processing' (строгое соответствие)
//             return 'Делаем раз'
//         case 'paid': // status === 'paid'
//             return 'Делаем два'
//         case 'new': // status === 'new'
//             return 'Делаем три'
//         default: // else
//             return 'Делаем четыре'
//     }
// }

// console.log(jobH('ndew'));




// const printNumbers = (initialNumber) => {
//     let lasCount = 1;

//     while (initialNumber >= lasCount) {
//         console.log(initialNumber)
//         initialNumber -= lasCount;
//     }
//     console.log('finished');
// }

// printNumbers(4);


// const sumNumbersFromRange = (start, finish) => {
//     // Технически можно менять start
//     // Но входные аргументы нужно оставлять в исходном значении
//     // Это сделает код проще для анализа
//     let count = start;
//     let sum = 0; // Инициализация суммы

//     while (count <= finish) { // Двигаемся до конца диапазона
//         sum = sum + count; // Считаем сумму для каждого числа
//         count = count + 1; // Переходим к следующему числу в диапазоне
//     }

//     // Возвращаем получившийся результат
//     return sum;
// };

// console.log(sumNumbersFromRange(1, 3));




// const multiplyNumbersFromRange = (start, finish) => {
//     let count = start;
//     let multiply = 1;

//     while (count <= finish) {
//         multiply *= count;
//         count += 1;
//     }
//     return multiply;
// }

// console.log(multiplyNumbersFromRange(1,3));




// function joinNumbersFromRange(num1, num2) {
//     let startCount = num1;
//     let string = '';

//     while (startCount <= num2) {
//         string += startCount;
//         // string = `${string}${startCount}`
//         startCount += 1;
//     }
//     return string;
// };

// console.log(joinNumbersFromRange(1, 4));




// const mySubstr = (text, textLength) => {
//     let string = '';
//     let index = 0;
//     while (index < textLength) {
//         string += text[index];
//         // string = `${string}${text[index]}`
//         index += 1;
//     }
//     return string;
// }

// console.log(mySubstr('text', 2));




// const countChars = (str, char) => {
//     let i = 0;
//     let count = 0;
//     while (i < str.length) {
//         if (str[i] === char) {
//             // Считаем только подходящие символы
//             count = count + 1;
//         }
//         // Счетчик увеличивается в любом случае
//         i = i + 1;
//     }

//     return count;
// };

// console.log(countChars('hello this is me', 'i'));




// const isPrime = (number) => {
//     if (number < 2) {
//         return false;
//     }

//     let divider = 2;

//     while (divider <= number / 2) {
//         if (number % divider === 0) {
//             return false;
//         }

//         divider += 1;
//     }

//     return true;
// }

// console.log(isPrime(2));


// const countChars = (text, letter) => {
//     const newText = text.toUpperCase();
//     const newLetter = letter.toUpperCase();
//     let i = 0;
//     let count = 0;

//     while (i < newText.length) {
//         if (newText[i] === newLetter) {
//             count += 1;
//         }
//         i += 1;
//     }
//     return count;
// };

// console.log(countChars('HeLlo', 'L'));



// let num = 0;
// console.log(num++);
// console.log(num);

// console.log('');

// let num2 = 0;
// console.log(++num2);
// console.log(num2);




// const str = 'HELLO';
// let result = '';
// let i = 0;
// while (i < str.length) {
//     const current = str[i];
//     ++i;
//     result = `${result}${current.toLowerCase()}`
//     i++;
//     console.log(result);
// }




// const makeItFunny = (text, numberOfCharToUpCase) => {

//     let result = '';
//     let index = 0;

//     while (index < text.length) {

//         const current = text[index];

//         if ((index + 1) % numberOfCharToUpCase === 0) {
//             result += current.toUpperCase();
//         } else {
//             result += current;
//         }
//         index++;
//     }
//     return result;
// }

// console.log(makeItFunny('hello', 2));



// const reverseString = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i ++) {
//         result = `${str[i]}${result}`;
//     }

//     return result;
// };


// console.log(reverseString('hello'));





// const encrypt = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i += 2) {
//         const nextSymbol = str[i + 1] || '';
//         result = `${result}${nextSymbol}${str[i]}`;
//     }

//     return result;
// };



// function getTriangleArea(h, b) {
//     return 1 / 2 * h * b;
// };

// console.log(getTriangleArea(5, 10));

// function func(n) {
//     return getTriangleArea(n, n ** 2 / 2);
// };

// console.log(func(4));



/*
Задание #3

Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):
productName — название товара.
productPrice — стоимость.
productQuantity — количество купленного товара.
resultCost — итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
Выведите в консоль строку, в которой на месте фигурных скобок будут соответствующие значения переменных:
“Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: {resultCost} ₽”.

const productName = 'Яблоко';
const productPrice = 50;
const productQuantity = 10;
const resultCost = productPrice * productQuantity;

console.log(`“Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽”`);
*/




/*
Задание #4

Выведите в консоль следующие выражения:
typeof 'Hello'
typeof 10
typeof {}
typeof null
typeof undefined
typeof true
typeof []
typeof (() => {})
Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод.

console.log(typeof 'Hello');
console.log(typeof 10);
console.log(typeof {});
console.log(typeof null);
console.log(undefined);
console.log(typeof true);
console.log(typeof []);
console.log(typeof (() => {}));
*/



/*
Задание #5

Выведите в консоль следующие выражения:
10 == 10
10 != 10
12 == 'Привет'
10 < 11
12 > 20
true && true
true && false
false && true
false || true
true || false
true || true
10 <= 10
18 <= 20
50 >= 50
51 >= 50
{} === {}
{} == {}
*/

/*
Задание #6

Создайте переменную a и b, присвойте им любые числа. Если a больше b, выведите в консоль true, иначе — false.
P. S. Нельзя использовать if...else и тернарный оператор.

const a = 4;
const b = 6;

console.log(a > b);
*/



/*
Задание #1

Создайте переменную a, присвоив в нее любое число.
Если значение переменной четное, выведите в консоль “Четное”.
Если значение переменной нечетное:
Выведите обновленное значение a.
Прибавьте к a + 1.
выведите в консоль “Нечетное”.

const a = 4;
if (a % 2 === 0) {
    console.log('Четное');
} else {
    console.log('Нечетное');
}
*/




/*
Задание #2

Напишите программу, которая последовательно выводит числа в диапазоне [0, 1000], удовлетворяющие одному из условий:
Число нечетное.
Число кратно 12.

for (let i = 0; i < 1001; i++) {
    if (i % 2 === 0 || i % 12 === 0) {
        console.log(i);
    }
}
*/



/*
Задание #3

Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].
Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.
Выведите оба массива в консоль.

// Первый вариант через map
const arr = [1, 10, 15, -100, -23, 19, 15032];
const arr2 = arr.slice().map(item => item * 1.25);

console.log(arr);
console.log(arr2);

// Второй вариант через for of
const arr = [1, 10, 15, -100, -23, 19, 15032];
const arr2 = [];

for(const element of arr) {
    arr2.push(element * 1.25);
}

console.log(arr);
console.log(arr2);
*/




/*
Задание #4

Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!". Если функция была вызвана без указания name, то выведите строку "Hello, someone!".
Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.

// function sayHello(name = 'someone') {
//     return `Hello ${name}!`
// };

const sayHello = (name = 'someone') => `Hello ${name}!`;
*/



/*
Задание #5

Напишите функцию calc(), которая принимает в параметры a и b, а также operation. В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами.

const calc = (a, b, operation) => {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            break
    }
};
*/



/*
Задание #6

Создайте переменную age, присвоив ей числовое значение.
Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
"Взрослый" — если age больше или равно 18.
"Детский" — если age меньше 18.
Выведите переменные в консоль.

const age = 25;
const category = age >= 18 ? 'Взрослый' : 'Детский';

console.log(age, category);
*/

/*
Задание #7

Создайте переменные a и b с числовыми значениями.
Создайте переменную c, в которую с помощью тернарного оператора присвоите наибольшее значение (или a, или b).
Выведите значение c в консоль.

const a = 1;
const b = 4;
const c = a > b ? a : b;

console.log(c);
*/


/*
Задание #1

Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.
Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль: “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”.
Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.
Выведите циклом все названия свойств и их значения, которые есть у объекта john.

const john = {
    name: 'John',
    age: 25,
    pet: 'Archi'
};

const ann = {
    name: 'Ann',
    age: 28,
    pet: 'Ryan'
};

const introduce = (human) => {
    console.log(`Меня зовут ${human.name}, мне ${human.age}, у меня есть питомец ${human.pet}`);
};

const incrementAge = (human) => {
    return human.age ++;
};

for (const key in john) {
    console.log(`Свойство: ${key}, Значение: ${john[key]}`);
};
*/


/*
Задание #2

Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

const arr = [1, 2, 3, 4, 5];

// через for
const sumArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// через for in
const sumArr = (array) => {
    let sum = 0;
    for (const i of array) {
        sum += i;
    }
    return sum;
};

console.log(sumArr(arr));


*/



/*
Задание #3

Создайте пустой массив names. Добавьте в него 5 любых имен. Выведите массив в консоль. Уберите из начала и конца массива по 1 элементу. Снова выведите массив в консоль.

const names = ['Alex', 'Kaleb', 'Jack', 'Jill', 'Kyle'];
console.log(names);

names.pop();
names.shift()
console.log(names);
*/

/*
Задание #4

Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

const func = (array) => {
    let list = document.createElement('ul');
    array.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element;
        list.appendChild(li);
    });
};

// второй простой способ через map
const render = names => `<ul>${names.map(item => `<li>${item}</li>`).join('')}</ul>`;
*/




/*
Задание #5
Дан объект:

const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
}

Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль.

const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
}

const { age, favColor, height, pet, money } = obj;
console.log(age, favColor, height, pet, money);
*/


/*
Задание #6

Даны объекты:
const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
};

const updateObj = {
    age: 23,
    favColor: 'blue',
    money: 11450
};

// const obj2 = { ... };
// console.log(obj2);
//
//  {
//  age: 23,
//  favColor: 'blue',
//  height: 188,
//  pet: 'dog',
//  money: 11450
//  }
//

 Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj.

 const obj = {
     age: 22,
     favColor: 'red',
     height: 188,
     pet: 'dog',
     money: 12300
 };

 console.log(obj);

 const updateObj = {
     age: 23,
     favColor: 'blue',
     money: 11450
 };

 const obj2 = Object.assign({}, obj, updateObj);

 // второй способ через spread

 const obj2 = { ...obj, ...updateObj };
*/


/*
Задание #1

Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.

const isPrimeNumber = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return number !== 1;
}

console.log(isPrimeNumber (6));
*/



/*
Задание #2

Напишите функцию func(), которая принимает num, min, max:
Если число num < min, то функция возвращает min ** 2.
Если число num > max, функция возвращает max ** 2.
Если число num < max - (max - min) / 2, то функция возвращает num ** 2.
Иначе возвращает округленное вниз значение num.

const func = (num, min, max) => {
    if (num < min) {
        return min ** 2;
    } else if (num > max) {
        return max ** 2;
    } else if (num < max - (max - min) / 2) {
        return num ** 2
    } else {
        Math.round(num);
    }
};

console.log(func(3, 1, 10));
*/



/*
Задание #3

Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true,
если число является совершенным, и false в противном случае.

const isPerfectNumber = num => {
    const a = [];
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            a.push(i);
        }
    }
    return a.reduce((a, b) => a + b, 0) === num;
}
*/




/**
Задание #1

const car = {
  name: 'Hyundai Solaris',
    type: 'sedan',
    maxSpeed: '320',
    color: 'red',
}

Необходимо написать написать функцию, которая принимает объект машины и возвращает строку с HTML, заполненную значениями переданного объекта.

const car = {
    name: 'Hyundai Solaris',
    type: 'sedan',
    maxSpeed: '320',
    color: 'red',
}

function generateCarHTML(car) {
    return `
      <article>
        <div>
          <h2>${car.name}</h2>
          <span>${car.type}</span>
        </div>
        <div>
          <span>Maximum speed:</span>
          <span>${car.maxSpeed}</span>
        </div>
        <div>
          <span>Color:</span>
          <span>${car.color}</span>
        </div>
      </article>
    `;
  }

  // Генерация и вставка на страницу
  const carHTML = generateCarHTML(car);
  document.body.innerHTML += carHTML;
 */




/*
  Задание #2

  Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.
  const sentence = "Hello, how are you?";
  console.log(countWords(sentence)); // 4

  const countWords = (text) => text.split(' ').length;
  */





/**
Задание #3

Необходимо написать функцию getInitials(), которая принимает полное имя в виде строки (например, “John Doe”) и возвращает инициалы в формате “J. D.”.
const fullName = "John Doe";
const initials = getInitials(fullName);
console.log(initials); // "J. D."

const getInitials = (name) => {
    const words = name.trim().split(' ');
    const initials =  words.map(word => word[0].toUpperCase());
    return initials.join('. ') + '.';
};
 */



/**
 * Задание #4

Необходимо написать функцию generateGoogleString(), которая принимает число и возвращает сроку ”Google” с указанным количеством букв “o”. При этом минимальное количество букв “о” равно 2.
console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google

function generateGoogleString(string) {
    // Минимум 2 'o', если число меньше 2, делаем его равным 2
    const Counto = Math.max(2, string);
    return `G${'o'.repeat(Counto)}gle`;
}

console.log(generateGoogleString(4)); // Goooogle
console.log(generateGoogleString(0)); // Google
console.log(generateGoogleString(-2)); // Google
 */




/* Задание #5

Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв (латинских и кириллических) в переданной строке.
const str = "Hello, Привет!";
console.log(countVowels(str)); // 4

function countVowels(text) {
    const vowelLetters = ['а', 'у', 'о', 'и', 'э', 'ы', 'я', 'ю', 'е', 'ё', 'a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    for (const char of text.toLowerCase()) {
        if (vowelLetters.includes(char)) {
            count++;
        }
    }
    return count;
};

// или через for
 for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
 */



/* Задание #1

Напишите функцию sumNumbers(), которая принимает произвольное количество чисел через запятую и возвращает их сумму.
const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60


function sumNumbers(...numbers) {
    let sum = 0;

    for (const num of numbers) {
        sum += num
    }
    return sum;
}
 */




/** Задание #2

Напишите функцию findMaxValue(), которая принимает массив чисел и находит максимальное значение. Если массив пустой, то возвращается значение undefined.
const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);
console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
console.log(max2); // 30

const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
console.log(maxEmpty); // undefined

*/




// Счетчик while
// let number = 0;
// while (number < 100) {
//     console.log(number);
//     number++;
// };


// тот же счетчик, только проще (for)
// const numbers = [1, 3, 0, 5, 2, 4, 10, 9]

// for (let index = 0; index < numbers.length; index++) {
//     // console.log(index);
//     console.log(numbers[index]);
// };


/** Построение треугольника в цикле
Напишите цикл, который делает семь вызовов console.log и выводит сле- дующий треугольник:
#
##
###
####
#####
######
#######
Возможно, вам будет полезно узнать: чтобы получить длину строки, нужно написать после нее .length.
let abc = "abc";
console.log(abc.length);
// → 3
 */


// Добавляем циклом for решетки в виде треугольника
// for (let index = '#'; index < '#########'; index += '#') {
//     console.log(index);    
// }


// Добавляем циклом while решетки в виде треугольника
// let string = '##########';
// let counter = 0;
// let result = '';

// while (counter <= string.length) {
//     result += '#';
//     counter++
//     console.log(result);
// }


/** FizzBuzz
Напишите программу, в которой с помощью console.log выводятся все чис- ла от 1 до 100 с двумя исключениями. Для чисел, кратных 3, вместо числа выводится "Fizz", а для чисел, кратных 5 (но не 3), — "Buzz".

Когда это заработает, измените программу так, чтобы она печатала "FizzBuzz" для чисел, которые делятся и на 3, и на 5 (и по-прежнему печатайте "Fizz" или "Buzz" для чисел, кратных только одному из них).
На самом деле такой вопрос задают на собеседованиях и, по утверждениям, отсеивают на нем значительную долю кандидатов в программисты. Поэтому если вы решили эту задачу, то стоимость вашего труда резко возросла.

for (let i = 1; i <= 100; i++) {
    let result = '';
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Bazz';
    console.log(result || i);
}
 */
/**
 Если строка result не пустая (то есть в неё добавилось "Fizz", "Bazz" или обе строки), она выводится в консоль.
Если строка result осталась пустой, выводится число i.
это принцип работы логического оператора иИЛЛ ( || )
 */




/** Шахматная доска
Напишите программу, которая создает строку, представляющую сетку 8 × 8, используя для разделения строк символы новой строки. В каждой позиции сетки стоит либо пробел, либо символ "#". Эти символы должны распола- гаться в шахматном порядке.
Передавая данную строку в console.log, вы должны получить что-то вроде этого:
### # ### #
### # ### #
### # ### #
### # ### #
Если вы уже написали программу, которая генерирует этот узор, определите привязку size = 8 и измените программу так, чтобы она работала для любого size, выводя сетку заданных ширины и высоты.

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
 */


// let fun1 = function () {
//     return 10;
// };

// console.log(fun1());

// fun2 = function (dfgdg) {
//     return dfgdg + 1
// };

// console.log(fun2(fun1()));




// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }

// let wrapValue1 = wrapValue(1);
// console.log(wrapValue1());


// // с использованием анонимной функции
// function multiplier(factor) {
//     return number => number * factor;
// };

// let twice = multiplier(2);
// console.log(twice(5));

/**
 function multiplier(factor) {

     function multiplyNumber(number) {
         return number * factor;
     }

     return multiplyNumber;
 }

 const twice = multiplier(2);
 // twice теперь содержит функцию multiplyNumber с замыканием

 console.log(twice(4));
 // 10
 *
 */
// без использования анониманой функции



// function power(base, exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent - 1);
//     }
// };

// console.log(power(5, 4));




// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) ||
//                 find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }
// console.log(findSolution(24));


/* function addZero(animalsNum, zeroWidth) {
    let animalsStrings = String(animalsNum);
    while (animalsStrings.length < zeroWidth) {
        animalsStrings = '0' + animalsStrings;
    }
    return animalsStrings;
}

function printFarmInventory2(animalsStrings, animalsName) {
    console.log(`${animalsStrings} ${animalsName}`);
};


printFarmInventory2(addZero(23, 3), 'поросят')
printFarmInventory2(addZero(3, 3), 'петуха')
printFarmInventory2(addZero(4, 3), 'овцы')
*/

/* Задача Минимум
В предыдущей главе была представлена стандартная функция Math.min, которая возвращает наименьший из ее аргументов. Теперь мы можем сами создать нечто подобное. Напишите функцию min, которая принимает два аргумента и возвращает их минимум.

function findMinNum(num1, num2) {
    if (num1 > num2) {
        return num2
    } else return num1
};

console.log(findMinNum(5, 4));
 */



/* Задача Рекурсия
Как мы видели, оператор % (оператор остатка) можно применять для проверки, является число четным или нечетным. Для этого нужно использовать %2, чтобы узнать, делится ли оно на два. Вот еще один способ определить, является ли положительное целое число четным или нечетным:
- ноль четный;
- единица нечетная;
- четность любого другого числа N совпадает с четностью N – 2.
Определите рекурсивную функцию isEven, соответствующую этому опи- санию. Функция должна принимать один параметр (положительное целое число) и возвращать логическое значение.
Проверьте эту функцию на числах 50 и 75. Посмотрите, как она ведет себя для –1. Почему? Можете ли вы придумать способ, как это исправить?

function isEven(number) {
    if (number % 2 === 0) {
        return true
    } else { return false }
};

// второй вариант с рекурсией
function isEven(number) {
    if (number === 0) return true;
    else if (number == 1) return false;
    else if (number < 0) return isEven(-number);
    else return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
 */


/* Задача Подсчет букв
Чтобы получить N-й символ или букву из строки, нужно написать "string"[N]. Возвращаемым значением будет строка, содержащая только один символ (например, "b"). Первый символ имеет позицию 0, в результате чего по- следний находится в позиции string.length - 1. Другими словами, длина строки из двух символов равна 2, а ее символы находятся в позициях 0 и 1.
Напишите функцию countBs, которая принимает строку в качестве един- ственного аргумента и возвращает число, показывающее, сколько больших букв «B» содержится в этой строке.
Затем напишите функцию countChar, которая ведет себя как countBs, за ис- ключением того, что принимает второй аргумент, указывающий, какие имен- но символы нужно посчитать (вместо того чтобы считать только большие буквы «B»). Перепишите countBs, чтобы использовать эту новую функцию.

function countChar(string, char) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            counter += 1;
        }
    }
    return counter;
};

console.log(countChar('sdfsfBBB', 'B'));
 */



// let anObject = { 
//     left: 1, 
//     right: 2 
// };

// console.log(Object.keys(anObject));
// console.log(anObject.left);

// delete anObject.left;
// console.log(anObject);
// console.log("left" in anObject);
// console.log("right" in anObject);

// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {c: 3, d: 4});
// console.log(objectA);


// let object1 = {value: 10};
// console.log(object1);

// let object2 = object1;
// let object3 = {value: 10};

// console.log(object1 === object2);

// object1.value = 15;
// console.log(object1);

// console.log(object2);
// console.log(object1 === object2);


// let journal = [];
// function addEntry(events, squirrel) {
//     journal.push({ events, squirrel });
// };

// addEntry(["работал", "трогал дерево", "ел пиццу", "бегал",
//     "смотрел телевизор"], false);
// addEntry(["работал", "ел мороженое", "ел цветную капусту",
//     "ел лазанью", "трогал дерево", "чистил зубы"], false);
// addEntry(["выходной", "катался на велосипеде", "отдыхал",
//     "ел арахис", "пил пиво"], true);

// console.log(journal);



// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0];
//     for (let i = 0; i < journal.length; i++) {
//         let entry = journal[i];
//         let index = 0;
//         if (entry.events.includes(event)) index += 1;
//         if (entry.squirrel) index += 2;
//         table[index] += 1;
//     }
//     return table;
// }
// console.log(tableFor("ел пиццу", JOURNAL));


// for (let i = 0; i < JOURNAL.length; i++) {
//     let entry = JOURNAL[i];
//     for (let entry of JOURNAL) {
//         console.log(`${entry.events.length} событий.`);
//     }
// };



// function journalEvents(journal) {
//     let events = [];
//     for (let entry of journal) {
//       for (let event of entry.events) {
//         if (!events.includes(event)) {
//           events.push(event);
//         }
// } }
//     return events;
// }
// console.log(journalEvents(JOURNAL));
// // → ["ел морковь", "делал зарядку", "выходной", "ел хлеб", ...]


// let todoList = [];

// todoList.push('1', '2', '3'); // добавляет в конец
// // todoList.pop() // удаляет с конца

// todoList.unshift('4') // добаялет в начало
// // todoList.shift() // удаляет с начала

// console.log(todoList);



// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = arr.slice();


// console.log(arr.slice(1,4));
// console.log(arr2);

// let arr3 = arr.concat(arr2)
// console.log(arr3);

// let arr4 = arr2.concat(10); // просто добавялем значние в массив (типа как пуш)
// console.log(arr4);


// console.log("кокосы".slice(3, 6));
// // → осы
// console.log("кокос".indexOf("с"));
// // → 4
// console.log("один два три".indexOf("ри"));
// // → 10
// console.log("  окей \n ".trim());
// // → окей
// console.log(String(6).padStart(3, "0"));
// // → 006


// let sentence = "Птицы-секретари умеют громко топать";
// let words = sentence.split(" ");
// console.log(words);
// // → ["Птицы-секретари", "умеют", "громко", "топать"]
// console.log(words.join(". "));
// // → Птицы-секретари. умеют. громко. топать

// console.log("ЛА".repeat(3));
// // → ЛАЛАЛА



// function max(...numbers) {
//     let result = -Infinity;
//     for (let number of numbers) {
//         if (number > result) result = number;
//     }
//     return result;
// }
// console.log(max(4, 1, 9, -2));


// const array = [1, 2, 3, 4, 5, 6, 11];

// console.log(array);
// console.log(...array);
// console.log(max(10, ...array));

// const [num1, num2] = [2, 4];

// console.log(num1, num2);

// const obj1 = {
//     name: 'Alex',
//     age: 32
// };

// const {name, age} = obj1;
// console.log(name);
// console.log(age);

// console.log(obj1);
// console.log(obj1.name);

// console.log(name, age);



// let string = JSON.stringify({
//     squirrel: false,
//     events: "выходной"
// });
// console.log(string);
// // → {"squirrel":false,"events":"выходной"}
// console.log(JSON.parse(string).events);
// // → "weekend"


// const dog = {
//     age: 5,
//     name: 'Chuk',
//     color: 'black',
// };

// const stringDog = JSON.stringify(dog);
// console.log(dog);
// console.log(stringDog);

// const dog2 = JSON.parse(stringDog);
// console.log(dog2);




/* Задача Сумма диапазона
Во введении к этой книге упоминался следующий хороший способ вычис- лить сумму диапазона чисел:
console.log(sum(range(1, 10)));
Напишите функцию range, которая принимает два аргумента, start и end,
и возвращает массив, содержащий все числа от start до end включительно.

Затем напишите функцию sum, которая принимает массив чисел и возвра- щает их сумму. Запустите пример программы и посмотрите, действительно ли она возвращает 55.

В качестве дополнительного задания: измените функцию range так, чтобы она принимала необязательный третий аргумент, который указывал бы значение шага, используемое при построении массива. Если шаг не задан, элементы увеличиваются на единицу, что соответствует старому поведению. Вызов функции range(1, 10, 2) должен возвращать [1, 3, 5, 7, 9]. Убедитесь, что функция также работает и с отрицательными значениями шага, так что результатом range(5, 2, -1) является [5, 4, 3, 2].


function range(start, end, step = start < end ? 1 : -1) {
    let result = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i)
        }
    } else {
        for (let i = start; i >= end; i += step) {
            result.push(i)
        }
    }
    return result;
};

console.log(range(5, 2));


function sum(array) {
    let sum = 0;

    for (let i = 0; i <= array.length; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(range(1, 10)));
 */




/* Задача Массив в обратном порядке
У массивов есть метод reverse, который изменяет порядок следования элементов в массиве. Для выполнения этого упражнения напишите две функции: reverseArray и reverseArrayInPlace. Первая функция, reverseArray, принимает массив в качестве аргумента и создает новый массив, содержащий те же элементы в обратном порядке. Вторая, reverseArrayInPlace, делает то же, что и метод reverse: преобразовывает массив, заданный в качестве аргумента, меняя порядок следования его элементов на обратный. Не ис- пользуйте для этого стандартный метод reverse.
Вспомните, что мы говорили о побочных эффектах и чистых функциях в предыдущей главе, и ответьте на вопрос: какой из этих вариантов, по ва- шему мнению, будет полезен в большинстве случаев? Какой из них быстрее работает?


const array = [2, 4, 5, 6, 3, 4, 10, 'e'];


// разворот путем перебора в обратную сторону и установкой в новый массив
function reverseArray(array) {
    const reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i])
    }
    return reverseArray;
}


// с перестановкой мест через половины массива и промежуточную переменную с сохранением переменной изначального массива
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i]; // собираем значения с левой части массива [2 4 5 6] и  скидываем в промежуточную переменную old
        console.log(old);
        array[i] = array[array.length - 1 - i]; // собираем значения в правой части массива [3 4 10 e] и закидываем их в левую часть массива
        array[array.length - 1 - i] = old; // закидываем собранные значения (в промежуточной переменной old) в конец массива
    }
    return array;
};


console.log(reverseArray(array));

// стандартным методом reverse()
console.log(array.reverse());
 */




/* Задача Список
Объекты как обобщенные скопления значений можно использовать для построения любых структур данных. Одной из таких распространенных структур данных является список (не путать с массивом). Список — это иерархический набор объектов, где первый объект содержит ссылку на второй, второй — на третий и т. д.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
value: 3,
rest: null }
} };


В результате получается примерно такая цепочка объектов:

value: 1, rest: => value: 2, rest: => value: 3, null: =>

Одно из приятных свойств списков — то, что они могут совместно использовать часть собственной структуры. Например, если я создам два новых значения, {value: 0, rest: list} и {value: -1, rest: list} (где list указывает на определенную ранее привязку), то эти значения будут независимыми списками, но оба они будут задействовать одну и ту же структуру, образующую последние три их элемента. Исходный список также является корректным списком, состоящим из трех элементов.
Напишите функцию arrayToList, которая строит список, чья структура подобна показанной, если передать функции массив [1, 2, 3] в качестве аргумента. Напишите также функцию listToArray, создающую массив из списка. Затем добавьте вспомогательную функцию prepend, принимающую элемент и список и создающую новый список, в котором заданный элемент добавлен в начало исходного списка. Кроме того, создайте функцию nth, принимающую список и число и возвращающую элемент, находящийся в за- данной позиции в этом списке (где ноль соответствует первому элементу), или undefined, если элемента в заданной позиции не существует.
Если вам этого все еще недостаточно, напишите рекурсивную версию функ- ции nth.

function arrayToList(array) {
    let list = {};
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

console.log(arrayToList([10, 20]));


function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]


function prepend(value, list) {
    return { value, rest: list };
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}


function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/




/* Задача Глубокое сравнение
Оператор == сравнивает объекты по их тождественности. Но иногда желательно сравнить значения их реальных свойств.
Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если эти объекты имеют одинаковое значение или являются объектами с одинаковыми свойствами и значения свойств равны при сравнении с рекурсивным вызовом deepEqual.
Чтобы выяснить, нужно сравнивать значения напрямую (для этого исполь- зуйте оператор ===) или их свойства, можете использовать оператор typeof. Если его результатом для обоих значений является "object", то требуется выполнить глубокое сравнение. Но вам следует принять во внимание одно глупое исключение: исторически сложилось так, что результатом typeof null также будет "object".
Для перебора и сравнения свойств объекта вам также пригодится функция Object.keys.

function deepEqual(param1, param2) {
    if (param1 === param2) return true;
    if (param1 === null || typeof param1 !== 'object' || param2 === null || param2 !== 'object') return false;


    let keysParam1 = Object(keys.param1);
    let keysParam2 = Object(keys.param2);

    if (keysParam1.length === keysParam2.length) return true;

    for (let key of keysParam1) {
        if (!keysParam2.includes(key) || !deepEqual(param1[key], param2[key])) return false;
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
 */


// const x = [1,2,3];
// const y = [1,2,3];

// console.log(x.concat(y)[1]* 2 + y.length);

// console.log(x === y);



// function  greaterThenNumber(number) {
//     return number2 => number2 > number;    
// };

// let greaterThen10 = greaterThenNumber(10);

// console.log(greaterThen10(11));
// console.log(greaterThen10(3));



// function noisy(f) {
//     return (...args) => {
//         let result = f(...args);
//         console.log("вызов для", args, " возвращает", result);
//         return result;
//     };
// }
// noisy(Math.min)(3, 2, 1);
// // → вызов для [3, 2, 1]
// // → вызов для [3, 2, 1] возвращает 1





// const array = [1, 2, 4, 6, 'g', 'h', true , null, undefined];

// array.forEach(element => console.log(element));
// // → A
// // → B



/* Задача Свертка
Используйте метод reduce в сочетании с методом concat для свертки массива, состоящего из нескольких массивов, в один массив, у которого есть все элементы входных массивов.


let arrays = [[1, 2, 3], [4, 5], [6], [1, 2, 3, 4]];

console.log(arrays.reduce((a, b) => a.concat(b)));
 */




/** Ваш собственный цикл
Напишите функцию высшего порядка loop, которая представляет собой ана- лог оператора цикла for. Она принимает значение, функцию условия, функ- цию обновления и функцию тела. На каждой итерации сначала выполняется функция условия для текущего значения цикла. Если эта функция возвращает false, то выполнение цикла прекращается. Затем вызывается функция тела, которой передается текущее значение цикла. Наконец, вызывается функция обновления для создания нового значения, и цикл запускается сначала.
При определении функции вы можете использовать обычный цикл для перебора значений.


function loop(start, end, update, result) {
    for (let i = start; end(i); i = update(i)) {
        result(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
*/




/* Метод every
Для массивов существует метод every, аналогичный методу some. Этот ме- тод возвращает true, когда заданная функция возвращает true для каждого элемента массива. В некотором смысле some — это версия оператора || для массивов, а метод every подобен оператору &&.
Реализуйте метод every, принимающий в качестве параметров массив и пре- дикативную функцию. Напишите две версии: одну с использованием цикла, а вторую — с применением метода some.

function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
*/




// let arr = []
// arr.push(1, 2);
// arr.unshift(3)
// arr.join();
// console.log(arr);




// let user = new Object(); // синтаксис "конструктор объекта"
// console.log(user);

// let user2 = {}; // синтаксис "литерал объекта"
// console.log(user2);





// const array = [1, 2, 3].map(num => { // 2 2 6
//     if (num % 2) {
//         return num * 2;
//     }
//     console.log(num);
//     return num;
// });




// const user3 = {
//     name: 'Alex',
//     age: 30,
//     isAdmin: false
// };

// user3.hasDog = true;
// user3['second name'] = 'Jake';

// console.log(user3);

// const user3Keys = Object.keys(user3);
// console.log(user3Keys);



// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//     [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert(bag.apple); // 5, если fruit="apple"



// function makeUserObj(name, age) {
//     return {
//         name: name, // можем просто написать name
//         age: age // можем просто написать age
//     }
// };

// let user1 = makeUserObj('Alex', 30);
// console.log(user1);

// function makeUserArr(name, age) {
//     return [name, age]
// };

// let user2 = makeUserArr('Jake', 29)
// console.log(user2);

// for (const key in user2) {
//     console.log(key);
// }

// console.log(Object.values(user2));

// let key = 'Glen';

// let user4 = {
//     userName: 'Alex',
//     age: 30
// }

// console.log(user4[key]);


/* Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.

const user = {};

user.name = 'John';
user.surname = 'Smith';
console.log(user);

user.name = 'Pete';
console.log(user);

delete user.name;
console.log(user);
*/


/* Напишите функцию isEmpty(obj),
которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false



function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

let schedule = {};
// schedule.age = 30;

console.log(isEmpty(schedule));
*/




/* Сумма свойств объекта

У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.

function sumSalaries(salaries) {
    const salariesArray = Object.values(salaries);
    console.log(salariesArray);
    // через reduxe
    return salariesArray.reduce((a, b) => a + b);

    // или через for..in
    // let sum = 0;
    // for (const key in salaries) {
    //     sum += salaries[key];
    // }
    // return sum;
};

console.log(sumSalaries(salaries));
 */




/* Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
 */







/* РАБОТА С ОБЪЕКТАМИ */

// const obj1 = {};
// const obj2 = {};

// console.log(obj1 === obj2);


// const arr1 = [];
// const arr2 = [];

// console.log(arr1 === arr2);


// const message = 'Hello';
// const result = message;

// console.log(result === message);


// const objDog = { name: 'Shteffi' }
// const objCat = objDog;

// objCat.name = 'asdad';
// console.log(objCat, objDog);

// console.log(objCat === objDog);





// let menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

// console.log(menu);

// можем скопировать через спрэд оператор
// let menu2 = { ...menu };
// console.log(menu2);

// или через пробежку циклом и копирование всех свойст объектов
// let menu2 = {};

// for (const key in menu) {
//     menu2[key] = menu[key]
// }

// console.log(menu2);

// либо через метод Object.assign()

// let menu2 = {};
// Object.assign(menu2, menu, objDog) // можно сразу из многих объектов вязть ключи, так оычно делают для объединения объектов, когда из нескольких объектов он берет только уникальные ключи
// // но лучше использовать более короткую запись

// let menu2 = Object.assign(menu);

// console.log(menu2);



// const animal1 = {
//     type: 'Tiger',
//     color: 'white',
//     hasFourLegs: true,
//     isPredator: true,
//     canDo () {console.log('tiger running')},
//     nameOfKids: ['Jake', 'Noble', 'Glen']
// };

// console.log(animal1);


// const animal2 = {...animal1}; // копируем ссылку на объект
// console.log(animal2);


// ГЛУБОКОЕ КЛОНИРОВАНИЕ становится возможным благодаря копированию всего содержимого объекта c помощью цикла или рекурсии

// function deepCopy(obj) {
//     if (typeof obj === 'object' && obj != null && !Array.isArray(obj)) {
//         const result = {};
//         for (key in obj) {
//             result[key] = deepCopy(obj[key]);
//         }
//         return result;
//     }
//     if (Array.isArray(obj)) {
//         return obj.map((el) => {
//             return deepCopy(el);
//         });
//     }``
//     return obj;
// }


//  console.log('' ||  !'' && false);








// СИМВОЛЫ

// let symbol = Symbol.for('symbol1');
// console.log(symbol);

// const dog = Symbol.for('symbol1')
// console.log(dog);

// console.log(dog === symbol);

// Symbol.iterator(dog)


// symbol = Symbol('symbol11');
// symbol = 11;
// console.log(symbol);




// console.log(symbol1 === symbol2); // false
// console.log('Hello World');


// const toStringSymbol = Symbol("toString");

// Array.prototype[toStringSymbol] = function () {
//     return `${this.length} см голубой шерсти`;
// };

// console.log([1, 2].toString());
// console.log([1, 2][toStringSymbol]());


// // Создаем символ
// const uniqueKey = Symbol('uniqueKey');
// console.log(uniqueKey);
// // Создаем объект
// const obj = {};

// // Присваиваем значение с использованием символа как ключа
// obj[uniqueKey] = 'This is a val symbol';

// // Выводим значение, ассоциированное с символом
// console.log(obj[uniqueKey]); // "This is a value associated with the symbol"
// console.log(obj);

// const obj = { name: "Alice", age: 25 };
// const uniqueKey = "name";
// console.log(obj[uniqueKey]);  // Выведет: "Alice"






// КЛАССЫ

// class Rabbit {
//     constructor(type) {
//         this.type = type;

//     }
//     sayHi(text = 'Hello') {
//         console.log(`${this.type} кролик говорит: '${text}'`);
//     }
// }
// let killerRabbit = new Rabbit("Убийственный");
// killerRabbit.sayHi('slkfghs')

// let blackRabbit = new Rabbit('black')


// let blackRabbit = new Rabbit("Черный");


// console.log(killerRabbit);
// console.log(killerRabbit.speak('Я тебя съем'));
// killerRabbit.speak = 'hello'
// console.log(killerRabbit.speak);




// console.log(cat);

// let object = new class {
//     getWord() { return "привет"; }
// };

// console.log(object.getWord());

// const newColl = new Map();
// newColl.set('age', 32)

// console.log(newColl.get('age'));
// console.log(newColl.has('age'));



// Rabbit.prototype.toString = function () {
//     return `${this.type} кролик`;
// };
// console.log(String(blackRabbit));


// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(val) {
//         if (!val) {
//             console.log( 'Введите имя');
//             return
//         }
//         this._name = val;
//     }
// }

// let user1 = new User('Herald');
// console.log(user1 instanceof User);
// console.log(user1.name ? user1.name : 'Имя отсутвует');




/*
function Clock({ template }) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
*/




// const map1 = new Map();
// map1.set('name', 'Alice');
// map1.set('age', 30);
// map1.set('city', 'New York');
// console.log(map1);



// const array = [1, 2, 3, 4, 4, 4];
// const set1 = [...new Set((array))];
// console.log(set1);

// const obj1 = { age: 23 }
// console.log(obj1);




/* Группы
Стандартная среда JavaScript предоставляет еще одну структуру данных, которая называется Set. Подобно экземпляру Map, Set содержит коллекцию значений. В отличие от Map класс Set не связывает с ними другие значения — только отслеживает, какие значения являются частью множества. Значение может входить в состав множества только один раз — попытка добавить его снова не будет иметь никакого эффекта.
Напишите класс с именем Group (поскольку имя Set уже занято). Как и Set, он располагает методами add, delete и has. Его конструктор создает пустую группу, add добавляет в нее значение (но только если такого значения там еще нет), метод delete удаляет свой аргумент из группы (если таковой там был), а has возвращает логическое значение, указывающее, является ли его аргумент членом группы.
Для того чтобы определить, одинаковы ли два значения, используйте опе- ратор === или какой-либо его эквивалент, например indexOf.
Присвойте классу статический метод from, который принимает в качестве аргумента итерируемый объект и создает группу, содержащую все значения, полученные посредством перебора.

class Group {
    constructor() {
        this.group = []
    };

    add(value) {
        this.group.push(value)
        return this.group
    };

    delete(value) {
        this.group.pop(value);
        return this.group;
    };

    has(value) {
        return this.group.includes(value);
    };
}

const gr1 = new Group();
console.log(gr1);

gr1.add(23);
gr1.add(24);
gr1.delete()
console.log(gr1);

console.log(gr1.has(23));
 * 
 */


/** Заимствование метода
Ранее в этой главе я упоминал, что объект hasOwnProperty можно использо- вать как более надежную альтернативу оператору in, если мы хотим про- игнорировать свойства прототипа. Но что, если нужно включить в словарь слово hasOwnProperty? Тогда вы больше не сможете вызывать этот метод, поскольку его значение будет скрыто за собственным свойством объекта.
Можете ли вы придумать способ вызова hasOwnProperty для объекта, у ко- торого есть собственное свойство с таким именем?

let map = { one: true, two: true, hasOwnProperty: true };

console.log(Object.prototype.hasOwnProperty.call(map, "two"));
// → true
 * 
 */





// const obj1 = {
//     age: 23,
//     isAlive: true
// }

// Object.freeze(obj1);

// delete obj1.age;

// console.log(obj1);





// ОШИБКИ

// console.log(true * "monkey") // NaN

// function canYouSpotTheProblem() {
//     "use strict";
//     for (let counter = 0; counter < 10; counter++) {
//         console.log("Супер-пупер!");
//     }
// }

// canYouSpotTheProblem()




// function Person(name) { this.name = name; }
// let ferdinand = new Person("Фердинанд"); // ой
// console.log(name);
// // → Фердинанд



// function test(text, result) {
//     if (!result()) {
//         console.log(`Failed: ${text}`);
//     };
// }

// test("convert Latin text to uppercase", () => {
//     return "hello".toUpperCase() == "HELLO";
// });

// test("convert Greek text to uppercase", () => {
//     return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
// });

// test("don't convert case-less characters", () => {
//     return " ".toUpperCase() == " ";
// });




// function promptNumber(question) {
//     let result = Number(prompt(question));
//     if (Number.isNaN(result)) throw new Error('Введите число');
//     else return result;
// }
// console.log(promptNumber("Сколько деревьев вы видите?"));




// function lastElement(array) {
//     if (array.length === 0) {
//         return { failed: 'введите массив, состоящий из не менее 1 символа' };
//     } else {
//         return { lastEl: array[array.length - 1] };
//     }
// }

// console.log(lastElement([1, 2, 3]));




// function promptDirection(question) {
//     let result = prompt(question);
//     if (result.toLowerCase() == "left") return "Л";
//     if (result.toLowerCase() == "right") return "П";
//     throw new Error("Неверное направление: " + result);
// }
// function look() {
//     if (promptDirection("Куда двигаться?") == "L") {
//         return "дом";
//     } else {
//         return "два злых медведя";
//     }
// }
// try {
//     console.log("Перед вами", look());
// } catch (error) {
//     console.log("Что-то пошло не так: " + error);
// }




// const error = new Error('Это ошибка !!!');


// console.log(error);
// console.log(error.name);
// console.log(error.message);



// const data = {name: 'Helen', age: 32};
// const dataJson2 = JSON.stringify(data);

// // const dataJSON = `{"age": 39, "name": "Alex"}`

// try {
//     const user1 = JSON.parse(dataJson2)

//     if (!user1.name) {
//         throw new Error("Имя отсутвует");
//     }
//     console.log('Имя:',user1.name);
// } catch (e){
//     console.log('Ошибка файла JSON', e.message);
// }


/*
let i;

for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}


for (let i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
*/




// // создание объекта без прототипа
// const obj1 = Object.create(null);
// console.log(obj1);

// // с прототипом
// const obj2 = new Object(null)
// console.log(obj2);



// const arr = [1, 2, 3, 4, 5]
// const arr2 = arr.fill('2');
// console.log(arr);
// console.log(arr2);







// let isGiftOrdered = true;
// let isGiftDelivered;
// let isGiftShipped = !isGiftOrdered; // false
// isGiftDelivered = !!isGiftShipped; // false

// let orderStatus = isGiftOrdered ? isGiftShipped ? isGiftDelivered ? "Подарок успешно доставлен!" : "Подарок находится в процессе доставки." : "Подарок готовится к отправке." : "Подарок еще не заказан.";

// console.log(orderStatus);



// let footprints = ["up", "up", "down", "up", "down"];

// let currentPosition = 0;

// for (let footprint of footprints) {
//     if (footprint === "down") {
//         currentPosition -= 1;
//     } else {
//         currentPosition += 1;
//     }
// }

// console.log(currentPosition); // 0 // 1 2 1 2 1




// let moves = ["forward", "right", "forward", "left", "forward", "backward"];

// let currentPosition = [0, 0]; // X, Y 
// // [0, 1]
// // [1, 0]
// // [0, 2]
// // [-1, 0]
// // [0, 1]
// // [0, -1]

// for (let move of moves) {
//     switch (move) {
//         case "forward":
//             currentPosition[1] += 1; // Идти вперед по Y
//             break;
//         case "backward":
//             currentPosition[1] -= 1; // Идти назад по Y
//             break;
//         case "right":
//             currentPosition[0] += 1; // Идти вправо по X
//             break;
//         case "left":
//             currentPosition[0] -= 1; // Идти влево по X
//             break;
//     }
// }

// console.log(currentPosition);




// let numbers = [15, 5];
// let a = 10;
// let b = 10;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > a) a = numbers[i];
//     if (numbers[i] < b) b = numbers[i];
// }

// result = `${b}, ${a}`; // a = 15




// Массивы

// let items = ["Меч", "Щит", "Свиток", "Кольцо"];

// console.log([...items.pop()][0]);

// console.log(items);



// let isNiceKid = true;
// let giftCount = 0;
// let naughtyList = ["Билли", "Чарли"];

// if (isNiceKid && !naughtyList.includes("Майк")) {
//     giftCount++;
//     console.log(`Санта принес ${giftCount} подарок!`);
// } else {
//     console.log("Санта оставил уголь.");
// }

// console.log((isNiceKid && !naughtyList.includes("Майк")));



// const movieData = [
//     { title: "Один дома 1", rating: 8.5 },
//     { title: "Один дома 2", rating: 7.8 },
//     { title: "Один дома 3", rating: 6.9 },
//     { title: "Один дома 4", rating: 5.5 },
//     { title: "Один дома 5", rating: 4.2 }
// ];

// const ratedMovie = movieData.sort((a, b) => a.rating - b.rating)[0];

// console.log(ratedMovie['title']);




// let enemies = [
//     { name: "Гоблин", health: 10 },
//     { name: "Скелет", health: 20 },
//     { name: "Орк", health: 30 }
// ];

// let lowHealthEnemies = enemies.filter(enemy => enemy.health < 30);

// console.log(lowHealthEnemies[1].name[1]);




// Строки

// const a = '34';
// const b = parseInt(a)

// console.log(a, typeof(a));
// console.log(b, typeof(b));

// const a1 = 34;
// const b1 = toString(a1);

// console.log(a1, typeof(a1));
// console.log(b1, typeof(b1));




// КОЛБЭКИ

// function sayHello(name) {
//     console.log(`Hello ${name}`);
// };

// function func(function1, userName) {
//     function1(userName);
// };

// func(sayHello, 'Alex');



// function func2(param) {
//     console.log(param);
// }

// function func1(param1) {
//     return func2(param1);
// }


// func1('Hello');



// function func1(action, name) {
//     return action(name);
// };

// func1((name) => console.log(`Hello ${name}`), 'Alex')





// let grinch = {
//     name: "Гринч",
//     health: 3000,
//     power: 5000,
//     location: "Кто-вилль",
//     active: false
// };

// grinch.power = 7000;

// console.log(grinch.active && Object.freeze(grinch));

// grinch.power = 6000;

// console.log(grinch.power);




// let santa = {
//     name: "Санта",
//     power: 1000000,
//     location: "Снежное царство"
// };

// Object.defineProperty(santa, "festive_aura", {
//     value: true,
//     writable: true
// });

// Object.preventExtensions(santa);

// console.log(Object.isExtensible(santa));





// function syncCallback(callback) {
//     console.log("Перед вызовом колбэка");
//     callback();
//     console.log("После вызова колбэка");
// }

// syncCallback(() => console.log("Колбэк выполнен"));




// function fdghdg(message, timer) {
//     console.log('1s clg');

//     setTimeout(() => {
//         console.log(message);
//     }, timer);

//     console.log('2nd clg');
// };

// fdghdg('Timer', 2000)



// function func(param1, param2) {
//     param1();
//     param2();
// };

// function param1() {
//     console.log('param1');
// };

// function param2() {
//     console.log('param2');
// };

// func(param1, param2);




// let A = new Set(["Кевин", "Санта", "Базз"]);
// let B = new Set(A);
// let C = new Set(["Фуллер", "Эльф"]);
// let D = new Set([...B, ...C]);


// let items = new Set(["Трава", "Трава", "Трава", "Дерево", "Дерево", "Земля", "Земля"]);

// console.log(items.size);


// let items1 = new Set(["Земля", "Вода", "Земля", "Вода"]); // 2
// let items2 = new Set(items1); 
// let items3 = new Set(["Трава", "Дерево", "Дерево", "Алмаз", "Рубин"]); // 4
// let items4 = new Set([...items2, ...items3]);



// let items = new Set();
// let i = 0;

// items.add("рубин").add("золото").add("серебро");



// let items = new Set([1, 2, 3]);
// let entries = items.entries();
// let result = 0;

// for (let entry of entries) {
//     result += entry[0] + entry[1];
// };

// console.log(result);




// let items = new Set(['рубин', 'алмаз']);

// console.log(items);




// let items = new Set();

// items.add("рубин").add("золото").add("серебро");

// items.clear();

// items.add("алмаз");

// console.log([...items][0]);



// let timeLimit = 10;
// let currentTime = 0;

// function runTimer() {
//     currentTime += 5;
// }


// while (currentTime < timeLimit) {
//     runTimer();
//     console.log(`Прошло ${currentTime} секунд. Кевин все еще в поисках подарков.`);
// }

// console.log("Время вышло! Кевину пора возвращаться домой.");




// let setFlag = (flag) => flag && "Флаг";

// console.log(setFlag(false), setFlag(true));



// console.log(Math.abs([-1984, 1985]));




// const champion = {
//     alias: "Жанна",
//     powerLevel: 30,
// };

// champion.powerLevel = 15;

// console.log(champion.powerLevel);




// let guild = {
//     name: "Рыцари света",
//     leader: "Леонард"
// };

// function changeGuildLeader(newLeader) {
//     let guild = {
//         name: "Тени ночи",
//         leader: "Сильвия"
//     };
//     console.log(guild);

//     guild.leader = newLeader;
//     console.log("Новый лидер гильдии: " + guild.leader);
// };

// changeGuildLeader('df')


// const dungeon = {
//     name: "Подземелье ужасов",
//     enemies: ["зомби", "скелеты", "пауки", "гномы", "орки"]
// };

// const enemy = dungeon.enemies.shift();
// console.log(enemy);



// console.log({ counter: 0, age: 23 }.age);



// console.log({counter: 1}.counter + [].length);




// let dragon = {
//     name: "Смауг",
//     health: 1000,
//     abilities: {
//         fireBreath: true,
//         flight: true
//     }
// };

// let injuredDragon = {
//     ...dragon,
//     health: 800,
//     abilities: {
//         ...dragon.abilities,
//         fireBreath: false
//     }
// };


// console.log(injuredDragon);
// console.log(injuredDragon.abilities.fireBreath);



// let student = {
//     name: "Гарри",
//     health: 100,
//     spells: ["Защитный щит", "Левитация"],
//     inventory: ["Палочка", "Зелье силы"]
// };

// let upgradedStudent = {
//     ...student,
//     health: 100,
//     spells: [...student.spells, "Огненный шар"],
//     inventory: [...student.inventory, "Мантия невидимости"],
// };

// // console.log(upgradedStudent.spells.length);
// console.log(upgradedStudent);


// Деструктуризация

// let champions = ["Ahri", "Ashe", "Lee Sin"];

// let [val1, val2, val3] = champions;
// console.log(val1, val2, val3);


// let { name: playerName } = { name: "Джейн" };
// console.log(playerName);




// let health = 10;
// let mana = 20;

// function getPlayerInfo({ name, stats: { health, mana = 10 } }) {
//     return health + mana;
// }

// let playerInfo = {
//     name: "Майк",
//     stats: {
//         health: 100,
//         mana: 50,
//     },
// };

// console.log(getPlayerInfo(playerInfo));



// let inventory = ["меч", "щит", "зелье", 'dfsf'];
// let [,,,val] = inventory;
// console.log(val);




// Computed Property (вычисляемое свойство)

// function createPlayer(name, level) {
//     return {
//         name,
//         level,
//         health: level * 10,
//         [`${name}Weapon`]: "Палка",
//     };
// }

// let name = "Mike";
// let player = createPlayer(name, 10);

// console.log(player[name + "Weapon"]);




// Дескрипторы свойств

// const user = {};


// user.name = 'sdfs';
// user.name = 'sd'; // имя можно поменять по умолчанию

// // посмотреть дескрипторы
// console.log(Object.getOwnPropertyDescriptor(user, "name")); 


// // Изменить дескрипторы
// Object.defineProperty(user, 'name', {
//     value: "Alice",
//     writable: false,     // ❌ Запрещаем менять
//     enumerable: true,    // ✅ Можно перебирать (for..in)
//     configurable: false // delete user.name не работает, так же изменение дескрипторов заблокировано
// });

// // user.name = 'dfsf'; // имя не меняется(!)

// console.log(Object.getOwnPropertyDescriptor(user, "name")); 




// const obj = {};

// Object.defineProperty(obj, 'prop', {
//   value: 42,
//   configurable: false,
// });

// delete obj.prop; // typeError

// // console.log(obj.prop); // 42




// const user = {
//     age: 34,
//     name: 'Alex'
// };

// const user1 = {...user}

// console.log(user1); 
// // копию можно делать, но вывести в консоль не даст, так как по умолчанию нельзя итерировать объект (console.log([...user]);)



// Характеристики объекта 

// const player1 = {
//     name: "Макс",
//     frags: 10,
// };

// const player2 = {
//     name: "Дастин",
//     frags: 15,
// };

// Object.freeze(player1) && Object.freeze(player2);
// console.log(Object.getOwnPropertyDescriptor(player1, 'name'));
// console.log(Object.getOwnPropertyDescriptor(player2, 'name'));

// const players = { ...player1, ...player2 }; // создали новый объект, он не заморожен

// players.frags = 5;

// console.log(players.frags);




// const player1 = {
//     name: "Макс",
//     frags: 10,
//     arr: [{ a: 1 }, { b: 1 }]
// };

// Object.freeze(player1);

// player1.arr[0] = {c: 1};

// console.log(player1);



// Array.prototype.myArrayFunction = function (arr) {
//     return [...new Set([...this, ...arr])];
// };

// console.log([2, 4, 6].myArrayFunction([0, 2, 4, 6]));



// function Character(name, health) {
//     this.name = name;
//     this.health = health;
// }

// Character.prototype.takeDamage = function (damage) {
//     this.health -= damage;
//     console.log(this.name + " получил урон. Здоровье: " + this.health);
// };

// function Player(name, health, power) {
//     Character.call(this, name, health);
//     this.power = power;
// }

// Player.prototype = Object.create(Character.prototype);
// Player.prototype.constructor = Player;

// Player.prototype.attack = function (target) {
//     const damage = this.power * 2;
//     target.takeDamage(damage);
//     console.log("Вы атаковали " + target.name + " и нанесли " + damage + " урона!");
// };

// const player1 = new Player("Воин", 100, 20);
// const player2 = new Player("Маг", 80, 30);

// player1.attack(player2);



// String.prototype.countChars = function () {
//     return this.length;
// };

// let message = "Макс";

// console.log(message.length);
// console.log(message.countChars());



// let num1 = Number(prompt('Введите num1'));
// let num2 = Number(prompt('Введите num2'));
// console.log('num1:', num1, ', num2:', num2);

// if (num1 <= 1 && num2 >= 3) console.log(true);
// else console.log(false);





// let num = +prompt();
// let number = String(num);

// let number1 = number % 10; 
// let number10 = number % 100 - number1;
// let number100 = Math.floor(number / 100)

// console.log(`в числе ${number} - сотен: ${number100}, десяток: ${number10}, единиц: ${number1}`);

// if (number.length === 2) {
//     console.log(`в числе ${number} -  десяток: ${number[0]}, единиц: ${number[1]}`);
// } else if (number.length === 3) {
//     console.log(`в числе ${number} - сотен: ${number[0]}, десяток: ${number[1]}, единиц: ${number[2]}`);
// } else if (number.length === 4) {
//     console.log(`в числе ${number} - сотен: ${number[1]}, десяток: ${number[2]}, единиц: ${number[3]}`);
// }





// const pow = (number, pow) => number ** pow + 3 ** pow;

// console.log(pow(2, 3));


// function findMaxNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(`число: ${num1} больше чем числа ${num2} и ${num3}`);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(`число: ${num2} больше чем числа ${num1} и ${num3}`);
//     } else if (num3 > num1 && num3 > num1) {
//         console.log(`число: ${num3} больше чем числа ${num1} и ${num2}`);
//     } else {
//         console.log('числа равны');
//     }
// };

// findMaxNum(+prompt(),+prompt(),+prompt())




// for (let index = 0; index <= 10; index++) {
//     if (index === 0) {
//         console.log(`${index} - это ноль`);
//     } else if (index % 2 === 0) {
//         console.log(`${index} - четное число`);
//     } else {
//         console.log(`${index} - нечетное число`);
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} - ${i === 0 ? 'это ноль' : i % 2 === 0 ? 'четное число' : 'нечетное число'}`);
// }



// const arr = [1, 2, 3, 4, 5, 6, 7];

// const arr1 = arr.slice(0, 3);
// const arr2 = arr.slice(3, arr.length);

// // const arr3 = arr1.concat(arr2);
// const arr3 = [...arr1, ...arr2]
// console.log(arr3);




/*

const randomArr = (arrLength) => {
    const arr = [];
    for (let i = 0; i <= arrLength; i++) {
        arr.push(Math.floor(Math.random() * 10) + 1)
    }
    
    return arr;
};


const arrElSum = (arr) => {
    console.log(arr);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};


const arrFindMinNum = (arr) => {
    console.log(arr);
    let minNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        };
    }
    return minNum;
}


const isArrHasNum3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            console.log(arr);
            return 'массив содержит цифру 3';
        }
    }
    return arr;
}

console.log(arrElSum(randomArr(5)));
console.log(arrFindMinNum(randomArr(5)));
console.log(isArrHasNum3(randomArr(5)));

*/

/*
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

const func = (obj) => {
    // Object.keys(obj).forEach(element => {
    //     if (obj[element] >= 3) {
    //         console.log(obj[element]);
    //     }
    // });

    // for (let key in obj) {
    //     if (obj[key] >= 3) {
    //         console.log(obj[key]);
    //     }
    // }
}


    // let objValues = Object.values(numbers);
    // objValues.forEach(val => {
    //     console.log(val);
    // });
    
    // console.log(objValues);

    func(numbers)

   
    
    // let objValues = Object.values(numbers);
    // console.log(objValues);
    // let findVal = objValues.filter(val => val >= 3);
    // console.log(findVal);
    */





// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);






// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach((product) => product.price *= 0.85);
// console.log(products);

// const updatedProducts = products.map(product => ({
//     ...product,
//     price: product.price * 0.85
// }));

// console.log(updatedProducts);


// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];

// console.log(products.filter(product => 'photos' in product && product.photos.length !== 0));



// const arr11 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr22 = [1, 2, 3, 4, 5, 6, 7];

// const newArr = [];

// if (arr11.length === arr22.length) {
//     for (let i = 0; i < arr11.length; i++) {
//         newArr[arr11[i]] = arr22[i];
//     }
//     console.log(newArr);
// }


// promise
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



// const obj = { x: 1, y: 2, z: 3 };

// for (let key in obj) {
//     console.log(obj[key] ** 2, key += '2');
// }

// console.log(Object.keys(obj));




// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }



// let res = 0;
// for (const key in obj) {
//     res = Object.values(obj[key]).reduce((a, b) => a + b);
// }



// const numbers = [3, 7, 2, 9];

// let sum = 0;
// numbers.map(num => sum += num);

// console.log(sum);



// const deepNestedArray = [1, [2, [3, [4]]]];

// // Если не указать глубину, по умолчанию метод распакует на 1 уровень:
// const newArr = deepNestedArray.flat(3);
// console.log(newArr);

// // Указываем глубину 2:
// console.log(deepNestedArray.flat(2));  // [1, 2, 3, [4]]

// // Указываем глубину 3:
// console.log(deepNestedArray.flat(3));  // [1, 2, 3, 4]



// const idEl = document.getElementById('super_link');
// console.log(idEl);

// const El = document.querySelectorAll('.card-link');
// El.forEach(el => el.textContent = 'ссылка');

// const El = document.querySelectorAll('.card-body > .card-link');
// console.log(El);


// const El = document.querySelector('[data-number = "50"]');
// console.log(El);

// const El = document.querySelector('title')
// console.log(El.textContent);

// const EL = document.querySelector('.card-title');
// console.log(EL.parentNode);


// const pEL = document.createElement('p').textContent = 'Привет';
// console.log(pEL);

// const cardEl = document.querySelector('.card')
// cardEl.prepend(pEL);
// console.log(cardEl);


// const h6El = document.querySelector('h6').remove();
// console.log(h6El);




// PROMISES


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



// const arr1 = [1, 2, 3, 4, 5, 6];
// const obj1 = { a: 1, b: 2, c: 3 };


// arr1.forEach(item => console.log(item))


// массивы
// for (const element of arr1) {
//     console.log(element);
// }

// объекты
// for (const key in obj1) {
//     if (Object.prototype.hasOwnProperty.call(obj1, key)) {
//         console.log(obj1[key]);
//     }
// }


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





// работа с json
// const jsonData = {
//     "name": "Иван",
//     "age": 25,
//     "isStudent": false,
//     "skills": ["JavaScript", "React", "Node.js"],
//     "address": {
//         "city": "Москва",
//         "country": "Россия"
//     }
// }

// const data = JSON.parse(jsonData);
// console.log(data);




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




// const Els = document.querySelectorAll('.dropdown-item');
// console.log(Els);
// Els.forEach(item => item.classList.add('super-dropdown'));
// console.log(Els);


// const El = document.querySelector('.btn');
// console.log(El);
// El.classList.toggle('btn-secondary');


// const El = document.querySelectorAll('.menu');
// console.log(El);
// El.forEach(item => item.classList.remove('dropdown-menu'));


// const El = document.querySelector('div.dropdown');
// console.log(El);
// El.insertAdjacentHTML("afterend", `<a href="#">link</a>`)


// const El = document.querySelectorAll('#dropdownMenuButton');
// console.log(El);
// El.forEach(item => item.id = 'superDropdown');
// console.log(El);


// const El = document.querySelectorAll('[aria-labelledby="dropdownMenuButton"]');
// console.log(El);
// El.forEach(element => element.dataset.dd = 3);
// console.log(El);



// const btnEl = document.querySelector('ul');

// function func (e) {
//     console.log( e.target.textContent, e.currentTarget);
// }

// btnEl.addEventListener('click', func);


// window.addEventListener('DOMContentLoaded', function () {
//     console.log('tags downloaded');
// });

// window.onload = function () { console.log('downloaded') }


// const bodyEl = document.querySelector('body')
// bodyEl.addEventListener('click', function (e) {
//     if (e.target.className === 'super_element') {
//         console.log(`класс super_element присутсвует у тега ${e.target.tagName.toLowerCase()} на который вы нажали`);
//     } else { console.log(`класс super_element отуствует у тега ${e.target.tagName.toLowerCase()} на который вы нажали`); }
// });


// const areaEl = document.querySelector('#area').addEventListener('mouseover', function (e) {
//     console.log('Вы навели на textarea');
// });

// const formEl = document.querySelector('#form');
// const spanEl = document.querySelector('.form__span');

// formEl.addEventListener('input', function () {
//     spanEl.textContent = formEl.value
// });


// const bntEl = document.querySelector('.messageBtn');
// const messageEl = document.querySelector('.message');

// bntEl.addEventListener('click', function () {
//     messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
//     messageEl.style.visibility = 'hidden';
// });

// const formEl = document.querySelector('form');
// const inputEl = formEl.querySelector('input.form-control');
// const selectEl = formEl.querySelector('select.form-control');
// const btnEl = formEl.querySelector('button');

// btnEl.addEventListener('click', (e) => {
//     if (inputEl.value === '' && selectEl.value === '') {
//         inputEl.classList.add('error');
//         selectEl.classList.add('error');
//         e.preventDefault();
//     } else {
//         inputEl.classList.remove('error');
//         selectEl.classList.remove('error');
//         formEl.submit();
//     }
// });

// inputEl.addEventListener('input', (e) => {
//     if (inputEl.value === '' && selectEl.value === '') {
//         inputEl.classList.add('error');
//         selectEl.classList.add('error');
//         e.preventDefault();
//     } else if (inputEl.value !== '' && selectEl.value !== '') {
//         inputEl.classList.remove('error');
//         selectEl.classList.remove('error');
//         formEl.submit();
//     };
// });





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





// const user = {
//     name: 'Alex',
//     age: 34,
//     address: {
//         city: 'Yalta',
//         rep: 'Crimea'
//     },
//     likes: [
//         1, 2, 3, 4, 5
//     ]
// }

// const user2 = JSON.stringify(user);
// user.likes = [1, 2, 3, 3, 3, 3, 0]

// const user11 = JSON.stringify(user);
// console.log(user11);
// console.log(user2);




// const arr = [1, 5, 7, 9];
// console.log(Math.min(...arr));



// function createCounter() {
//     let counter = 0;

//     return {
//         increment() { counter++ },
//         decrement() { counter-- },
//         getCounter() { return counter }
//     };
// };

// const counter = createCounter();
// counter.increment()
// console.log(counter.getCounter());




// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

// class Book {
//     constructor(title, author, pages) {
//         this.title = String(title);
//         this.author = String(author);
//         this.pages = Number(pages);
//     }

//     displayInfo(){
//         console.log(`название книги: ${this.title}, автор: ${this.author} и количество страниц: ${this.pages}`);
//     }
// }

// const book1 = new Book('BookName', 'AuthorOfBook', 234);
// console.log(book1);
// book1.displayInfo()




// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// class Student {
//     constructor(name, age, grade) {
//         this.name = String(name);
//         this.age = Number(age);
//         this.grade = Number(grade);
//     };

//     displayInfo() {
//         console.log(`имя студента: ${this.name}, возвраст: ${this.age} и грейд: ${this.grade}`);
//     };
// };

// const student1 = new Student('Alex', 23, 4);
// console.log(student1);




// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

// class Employee {
//     constructor(name) {
//         this.name = String(name)
//     };

//     displayInfo() {
//         return `Сотрудник ${this.name} из класса Employee`;
//     };
// };

// class Manager extends Employee {
//     constructor(name, department) {
//         super(name)
//         this.department = String(department);
//     };

//     displayInfo() {
//         return `Сотрудник ${this.name} из класса Employee работает в отделе ${this.department}`;
//     };
// };

// const employee = new Employee("John Smith");
// console.log(employee.displayInfo());

// const manager = new Manager();
// console.log(manager.displayInfo());




// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// class Order {
//     constructor(orderNumber) {
//         this.orderNumber = orderNumber;
//         this.products = [];
//     }

//     addProduct(product) {
//         this.products.push(product);
//     }

//     getTotalPrice() {
//         return this.products.reduce((sum, product) => sum + product.productPrice, 0);
//     }
// }

// class Product {
//     constructor(productName, productPrice) {
//         this.productName = productName;
//         this.productPrice = productPrice;
//     }
// }

// const order1 = new Order(12345);

// const product1 = new Product('Apple', 100);
// const product2 = new Product('Banana', 200);
// const product3 = new Product('Orange', 300);

// order1.addProduct(product1);
// order1.addProduct(product2);
// order1.addProduct(product3);

// console.log(order1); 
// console.log(order1.getTotalPrice());


// async function getUserData(id) {
//     const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
//     await fetch(url).then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('cant fetch data - ', error));
// };

// getUserData(1)






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


// func()

// function func() {
//     console.log('Hello');
// }


// const func = () => {
//     console.log('Hello');
// }

// func()


// const a = function name() {
//     console.log('Hello');
// };

// a()





// function createDiv(e) {
//     const bodyEl = document.querySelector('body');
//     const divEl = document.createElement('div');
//     divEl.textContent = 'Hello, i am div element'
//     bodyEl.appendChild(divEl);
//     console.log(e.target);
// };

// document.addEventListener('click', createDiv);




// const divEl1 = document.querySelector('.div1');
// const divEl2 = document.querySelector('.div2');
// const divEl3 = document.querySelector('.div3');
// const divEl4 = document.querySelector('.div4');


// divEl1.addEventListener('click', function (e) {
//     console.log('div1');
// });

// divEl2.addEventListener('click', function (e) {
//     console.log('div2');
// });

// divEl3.addEventListener('click', function (e) {
//     console.log('div3');
// });

// divEl4.addEventListener('click', function (e) {
//     console.log('div4');
//     e.stopPropagation(); // остановили всплытие принудительно
// });







