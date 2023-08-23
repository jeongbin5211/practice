// 구구단 만들기 // 

// 1 ~ 9단
// 중첩된 for문 사용

// 첫 번째 루트 : 구구단이 몇 단인지 반복 
// 두 번째 루트 : 각 구구단이 실제 연산되는 반복

let dan = Number(prompt('몇단?'));
document.write(`<h2>${dan}단</h2>`);

for (let i = 1; i < 10; i++) {
  <h1>${dan}단</h1>
  document.write(`${dan} * ${i} = ${dan * i}<br />`);
}