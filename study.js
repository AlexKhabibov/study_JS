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
//     }
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


class Animal {

    constructor(name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }

    set name (val) {
        this._name = val;
    }
};

const cat = new Animal('sdff');
// cat.name = 'sdfs';
console.log(cat);

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


