/*
// АЛГОРИТМЫ

// бинарный поиск
function binarySearch(arr, target) {
    let left = 0; // точка начала слева
    let right = arr.length - 1; // точка начала справа

    while (left <= right) { // двигаемся слева направо пока не дойдем до пересечения
        let mid = Math.floor((left + right) / 2); // опеределяем середину массива

        if (arr[mid] === target) { // если целевой элемент равен середине
            return `Элемент "${target}" найден, он есть в массиве ${arr}`; //  возвращаем найденный элемиент
        } else if (arr[mid] < target) { // если середина меньше чем целевой элемент
            left = mid + 1; // идем вправо на один элемент по индексу
        } else {
            right = mid - 1; // идем влево на один элемент по индексу
        }
    }

    return `Элемент "${target}" не найден, его нет в массиве ${arr}`; // Элемент не найден
}

const sortedArray = [1, 3, 5, 7, 9, 11, 15, 18, 21];

console.log(binarySearch(sortedArray, 7));
*/