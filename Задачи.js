
/*/Задача: Напиши функцию, которая принимает массив чисел 
и возвращает произведение всех чисел в массиве.
Если массив пустой,верни Описание: Функция должна инициализировать 
переменную result значением 1, так как это нейтральный элемент
для умножения. Затем пройди по каждому элементу массива
и умножь его на result. 
В конце функция вернет итоговое произведение./*/

Решение
function multiplyNumbers(numbers) {
    let result = 1;

    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }

    return result;
}
console.log(multiplyNumbers([1, 2, 3, 4])); // 24
console.log(multiplyNumbers([])); // 1


/*/Задача: Напиши функцию, которая находит и возвращает наибольшее
число в массиве. Если массив пустой, верни undefined.
Описание: Функция должна инициализировать переменную max первым 
элементом массива. Затем, начиная со второго элемента, 
сравнивай каждый элемент с текущим значением max и обновляй его, 
если встречаешь большее число./*/
Решение
function findMax(numbers) {
    if (numbers.length === 0) return undefined;

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(findMax([10, 5, 8, 20])); // 20
console.log(findMax([])); // undefined


/*/Задача: Напиши функцию, которая вычисляет и возвращает среднее 
арифметическое чисел в массиве. Если массив пустой, верни 0.

Описание: Функция должна посчитать сумму всех чисел массива, 
а затем разделить эту сумму на количество элементов. Если массив 
пустой, результат будет 0./*/

function average(numbers) {
    if (numbers.length === 0) return 0;

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

console.log(average([10, 20, 30, 40])); // 25
console.log(average([])); // 0
/*/Задача: Напиши функцию, которая принимает массив чисел и возвращает
минимальное число из массива. Если массив пустой, верни undefined.

Описание: Функция должна пройти по массиву и сохранить текущее 
минимальное значение, сравнивая его с каждым элементом массива. 
Если массив пустой, функция вернет undefined./*/

function findMin(numbers) {
    if (numbers.length === 0) return undefined;

    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

/*///Задание 6.6.1
// Палиндром

const word = "Довод".toLocaleLowerCase();

const arrayWords = word.split("");

console.log(arrayWords);

const reverseWords = arrayWords.reverse();

console.log(reverseWords);

const wordsString = arrayWords.join("");

const reverseStrings = reverseWords.join("");

console.log(word.toLowerCase());

console.log(reverseStrings);

if (word.toLowerCase() === reverseStrings.toLocaleLowerCase()) {
    console.log("Палиндром");
 }

const reverseString = word.split("Довод").reverse().join("Довод").toLocaleLowerCase();

if (word === reverseStrings) {
  console.log("Палиндром");
} else {
  console.log("Не палиндром");
}



//Задание 6.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];

const uniqueArr = Array.from(new Set(arr));

console.log(uniqueArr);

//Задание 6.6.3
const Number = prompt("Число");
for (let i = 0; i <= 5; i++) {
    console.log(i);  
}

//Задание 6.6.4

const array = [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["x", "o", "x"],
];
    
for (let index = 0; index < array.length; index++) {
console.log(array[index].join(" ")); 
}
//Задание 6.6.5

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
  
const arrValues = [];
  
for (const key in obj) {
    const value = obj[key];
  
if (Array.isArray(value)) {
      arrValues.push(value);
} else {
arrValues.push(value);
}
}
  console.log(arrValues);/*/

/*/const users = [
  { name: "Кайло Рен", age: 28 },
  { name: "Дарт Вейдер", age: 31 },
  { name: "Лорд Гривус", age: 21 },
];

const filteredUsers = users.filter((user) => {
  return user.age > 25; // фильтруем только пользователей старше 25 лет
});

console.log(filteredUsers);
//Напишите стрелочную функцию, которая принимает массив чисел
//в качестве параметра и возвращает сумму всех чисел в массиве.
/*/
/*/const numbers = [3, 5, 1, 8, 2]

const sum = numbers => numbers.reduce((total, num) => total + num, 0);

console.log(numbers);/*/

/*/const numbers = [3, 5, 1, 8, 2]

const sumNumbers = numbers.reduce((acc, num) => {
  console.log(num);
  return acc + num
}, 0)/*/

/*/Напишите стрелочную функцию, которая принимает массив строк и 
возвращает новый массив, 
содержащий только строки с более чем пятью символами./*/
/*/const strings = ['apple', 'banana', 'pear', 'orange', 'grapefruit'];
    const longStrings = filterLongStrings(strings); {
    
const filterLongStrings = arr => arr.filter(str => str.length > 5);
    console.log(longStrings);    
}/*/

/*/ let sum = +prompt("Укажите стартовую сумму", 1000);
const persent = 15;
const result = 2000;

let count = 0;

const depositTerm = +prompt("Укажите срок дeпозита", 10);

while (count < depositTerm) {
  sum = sum + sum * (persent / 100);
  count = count + 1;
  document.write(count + ": " + sum + "<br>");
}/*/

//позиция корабля
/*/
const randomLoc = Math.floor(Math.random() * 5);
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

//потоплен или нет
let isSunk = false;
//предполагаемая позиция корабля ("выстрел")
let guess;
//добавляем счетчик попаданий
let hits = 0;
//создаём счетчик выстрелов
let guesses = 0;



while (isSunk === false) {
  //не забываем, что строку надо превратить в число
  guess = +prompt("Fire! Enter a number 0-6");
  if (guess < 0 || guess > 6) {
    alert("Plese, enter a valid cell number!");
  } else {
    //увеличиваем счётчик выстрелов
    guesses = guesses + 1
    //логоческое "или"
    if (guess === location1 || guess === location2 || guess === location3) {
      alert("HIT!");
      //считаем попадания
      hits = hits + 1;
      //если подбили
      if (hits === 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

const stats = "You have" + hits + " hits out of "+ guesses + " shots."
alert(stats)/*/

/*/const location_1 = 3
const location_2 = 4
const location_3 = 5

const guess = 4
if (guess === location_1 || guess === location_2 || guess === location_3) {
  alert("HIT!")
} else {
  alert("MISS!")
}

if(guess === location_1){
  alert("HIT!")
} else if (guess === location_2) {
  alert("HIT!")
} else if (guess === location_3) {
  alert("HIT!")
} else {
  alert("MISS!")
}/*/

/*/const inStock = true
const onSale = true

if(inStock === true) {
  if(onSale === true) {
    alert("Buy!!!")
  }
    
}
  
if(inStock === true && onSale ===true) {
  alert("Buy!!!")
}/*/

/*/function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
  
}
//правильный вызов функции
makeTea ( 3, "Earl Grey")

//недостающие аргументы функции
makeTea (3)

//"лишние" аргументы функции
makeTea (3, "Earl Grey", "hey ma!", 42);

//аргументы переданы в неверном порядке
makeTea ("Earl Grey", 3)

//функция без параметров
function barkAtheMoon() {
  console.log("Wooooooooooo!");
  
}
barkAtheMoon();
/*/

/*/
const depositAmount = 1000;
const yearlyRate = 15;
const depositTermInYears = 2;

function getDepositIncom(amount, rate, terms) {
  let depositIncome = 0;
  let count = 0;

  while (count < terms) {
    depositIncome = depositIncome + amount * (rate / 100);
    count = count + 1;
  }
  return depositIncome;
}
const depositIncome_1 = getDepositIncom(depositAmount,yearlyRate,depositTermInYears);
const depositIncome_2 = getDepositIncom(1500, 16, 3);
const totalIncome = depositIncome_1 + depositIncome_2;

console.log(totalIncome);
/*/
/*/
const pets = ["cat", "dog", "mouse"];

console.log(pets[2]);
console.log(pets[3]);
console.log(pets[1]);

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}


  
  const words1 = ["Мой кот", "Моя собака", "Мой попугай"];
  const words2 = ["любит есть", "хочет погрызть", "всегда ищет"];
  const words3 = ["морковку", "макароны", "косточку"];
  
  function makePhrases(param1, param2, param3) {
  const result = getRandomElement(param1) + " " + getRandomElement(param2) + " " + getRandomElement(param3)
  return result
  
  
}

alert(makePhrases(words1, words2, words3))
/*/

/*/const scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];/*/

// Bubble solution #0 score: 60
// Bubble solution #1 score: 50
// Bubble solution #2 score: 60

// Bubble tests: 36

// Highest bubble score: 69

// Solutions with highest score: #11, #18

/*/let i = 0
let output

while (i < scores.length) {
  output = "Bubble solution #" + i + "score: " + scores[i]
  console.log(output);
  
  i = i + 1
}/*/

/*/
let output;
let highScore = 0;

for (let i = 0; i < scores.length; i++) {
  output = "Bubble solution #" + i + "score: " + scores[i];
  console.log(output);
  if (highScore < scores[i]) {
    highScore = scores[i];
  }
}

console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

const bestSolutions = [];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === highScore) {
    bestSolutions.push(i);
  }
}
console.log("Solutions with highest score: " + bestSolutions);
/*/
