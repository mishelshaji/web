languages = ["C", "C++", "Java"];

console.log(languages);
console.log(languages[0]);

numbers = ["Zero", 1, 2, 3, 4, 5];
console.log(numbers.length);

numbers[6] = 66;
console.log(numbers);

numbers.push(55);
console.log(numbers);

console.log(numbers.pop());

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers);
}