// 1.დაწერეთ ისარი ფუნქცია(Arrow Function), რომელიც აბრუნებს გადაცემული რიცხვის კვადრატს.

const numPow = num => {
    const powNum = Math.pow(num, 2)
    return powNum;
}

let num = 5;
console.log(numPow(num));


// 2.შექმენით ისარი ფუნქცია(Arrow Function, რომელიც ამოწმებს, შეიცავს თუ არა სტრინგი მოცემულ სიმბოლოს. გამოიყენეთ includes() ფუნქცია.

const ifIncludes = (str, char) => {
    if(str.includes(char)) return "Yes!";
    else return "No!";
} 

const str = "Hello World!", char = 'W';

console.log(ifIncludes(str, char));


// 3.დაწერეთ ისარი ფუნქცია(Arrow Function), რომელიც იღებს ორ რიცხვს და აბრუნებს უფრო დიდს.

const maxOfTwo = (num1, num2) => {
    return Math.max(num1, num2);
}

const num1 = 10, num2 = 7;

console.log(maxOfTwo(num1, num2));


// 4.შექმენით ისარი ფუნქცია(Arrow Function), რომელიც იღებს მასივს და აბრუნებს მასივის ელემენტების ჯამს. გამოიყენეთ reduce() ფუნცქია.

const sumArray = (arr) => arr.reduce((sum, current) => sum + current, 0);

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); 


// 5.დაწერეთ Arrow Function  , რომელიც ამოწმებს, არის თუ არა ობიექტის ველი კონკრეტული მნიშვნელობის ტოლი. გამოიყენეთ obj[field].

const check = (obj, field, value) => {
    if(obj[field] === value) console.log("YES, true");
    else console.log("NO, false");
    
    

}

const car = {
    carModel: "Toyota",
    carYear: 2024,
    carColor: "Black"
}

check(car, "carModel", "Toyota");
check(car, "carYear", 2022);