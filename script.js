


//Задание 6.6.1
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
  console.log(arrValues);