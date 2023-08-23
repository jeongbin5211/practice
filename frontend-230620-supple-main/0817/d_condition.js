// 자바스크립트의 반복문 예제 실습

//? for 문

//! 배열의 모든 요소 출력하기

let fruits = ['apple', 'banana', 'cherry'];
// 배열의 길이 확인하는 length 속성 : 배열명.length을 사용하여 배열의 모든 요소를 출력
console.log(fruits[0].length);
console.log(fruits[1].length);
console.log(fruits[2].length);

//! 1부터 10까지의 합 계산하기

// 1부터 10까지를 더한 값을 sum 변수에 할당.
// 할당 연산자(+=)
// 최종 값을 콘솔에 출력
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i
}
console.log(sum);

//? while문 

//! 배열의 모든 요소 출력하기

let fruits2 = ['apple', 'banana', 'cherry'];
// while문 사용

//! 숫자를 2로 계속 나누기

// num 변수에 100을 초기화
// 조건 1 초과 일 때 
let num = 100;
while (num > 1) {
  num /= 2
}

//? do-while문

//! 배열의 모든 요소 출력하기

let fruits3 = ["apple", "banana", "cherry"];
let index3 = 0;
// do-while문 사용

//! 사용자 입력 받기

// 실행문 시작 전에 userInput의 변수를 선언해주세요.
// do 실행 코드 블럭에 사용자로부터 숫자를 입력 받아 userInput변수에 할당해주세요.
// 사용자가 10보다 큰 숫자를 입력할 때까지 계속해서 사용자에게 입력을 요청합니다.

//? for...in 반복문

//! 객체의 속성 반복하기

let car = {
  company: "HyunDai",
  model: "hdCar",
  year: 2023
};

// 객체의 속성값을 모두 출력

//! 배열의 인덱스 반복하기 (for...of, forEach 사용 권장)

//? for...in 반복문 사용
// 배열의 인덱스 번호와 요소 모두 출력
// EX) 0: apple

let fruits4 = ["apple", "banana", "cherry"];
for (let index in fruits4) {
  console.log(index + ": " + fruits4[index])
};

//! 배열의 요소 반복하기
//? for...of 반복문 사용 

let fruits5 = ["apple", "banana", "cherry"];
for (let fruit of fruits5) {
  console.log(fruit);
}

//? forEach 반복문

let fruits6 = ["apple", "banana", "cherry"];
// forEach 반복문에서 함수의 매개변수로 요소와 인덱스 번호를 출력

// console.log("Index " + index + ": " + fruit);
fruits6.forEach(function(index) {
  console.log("Index " + index + ": " + fruits6)
})

