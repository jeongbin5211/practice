//! 1.
// 배열에 여러 종류의 자료형을 넣고, 각 요소의 자료형을 출력
// 숫자, 문자, 논리, null, undefined, 배열의 자료형을 모두 포함하는 배열 생성
// 반복문 사용

//! 2. 
// 객체를 생성하고, 그 객체의 특정 프로퍼티가 존재하는지 확인하는 함수를 작성

//? person 객체 생성
// name, age, address 속성 (속성값 임의 지정)

let person = {
  name: "JeongBin",
  age: 28,
  address: "대한민국"
}

//? checkProperty 함수 생성
// : 매개변수 obj, propName 
// : hasOwnProperty 메서드 사용하여 불리언 값 출력
// hasOwnProperty - 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 Boolean 값을 반환
// : 객체.hasOwnProperty(속성명)

const checkProperty = (obj, propName) => {
  
}

//? checkProperty 함수를 사용하여 person 객체에 name속성과 job속성이 있는지 여부를 boolean값으로 출력

//! 3. 
// let으로 선언한 변수의 값을 변경하고, const로 선언한 상수의 값을 변경하려고 할 때 어떤 결과가 나오는지 확인하여 출력값을 주석 처리하여 첨부하세요.
// - 값은 임의 지정

// 변수명 variable
// 상수명 constant
let variable = 1;
const constant = 10;

//! 4.
// 상수를 사용하여 배열과 객체를 선언하고, 내부의 값을 변경할 수 있는지 확인하여 출력값을 주석 처리하여 첨부하세요.

// 배열 상수명 constantArray: [1, 2, 3]
// 배열 객체명 constantObject: {name: 'Seung Ah', job: 'Developer'}

// 변경값은 임의 지정

const constantArray = [1, 2, 3];
constantArray[0] = 30;
console.log(constantArray); // [30, 2, 3];

const constantObject = {
  name: 'Jeong Bin',
  job: 'Developer',
}

constantObject.name = 'jb';
console.log(constantObject); // {name: 'jb', job: 'Developer'} 

//! 5. 
// 문자 '123'을 숫자형으로 변환하고 출력

console.log(Number('123'));

//! 6. 
// Boolean 자료형 변환을 테스트
// 6-1. false 값을 출력하는 자료형을 모두 작성
// 6-2. 문자열, 숫자, 배열 등을 Boolean으로 변환

//! 7. 
// number 변수에 숫자 지정
// 주어진 숫자가 짝수인지 홀수인지 판별하는 코드를 작성
// if / else 문 작성
let number = 11;
if (number % 2 == 0) {
  alert('짝수입니다.')
} else {
  alert('홀수입니다.')
};

//! 8. 
// 변수 a, b, c에 숫자 할당
// 세 개의 숫자 중 가장 큰 숫자를 찾는 코드를 작성
// if 문 작성
let a = 1;
let b = 2;
let c = 3;



//! 9.
// 주어진 숫자 N에 대해 N의 팩토리얼을 구하는 함수 factorial() 작성
// 팩토리얼: 그 수보다 작거나 같은 모든 양의 정수의 곱
// 정수 N을 매개변수로 받아오기



function factorial(N) {
  let result = 1;
  for (let i = N; i >= 1; i--) {
    result *=  i;
  }

  return result
}

console.log(factorial(5));