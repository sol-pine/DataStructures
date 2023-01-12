// 재귀?
// 스스로를 호출하는 함수

// JSON.parse / JSON stringify
// document.getElementById, DOM 순회 알고리즘
// 객체 순회
// 반복 대신 재귀를 사용하는게 더 깔끔하다.

// <스택 호출하기>
// 호출 스택은 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터 구조
// 함수를 호출하면 호출 스택(Call Stack)의 꼭대기에 쌓인다.
// 책상 위에 쌓인 종이 더미처럼 새로 추가한 함수가 제일 꼭대기에 위치
// 자바스크립트가 return keyword를 확인하거나 함수 내에 더이상 실행할 코드가 없으면
// 컴파일러가 스택의 제일 상단에 있는 항목을 제거

// 재귀 함수는 계속해서 새로운 함수(동일한 함수)를 호출 스택에 추가
// 추가된 함수는 호출 대기

// <재귀 함수는 어떻게 동작하는가>
// 동일한 함수를 계속 호출하면서 하나의 함수가 스스로를 재귀적으로 호출하게 하는 것
// 재귀의 첫번째 요소) 영원히 호출하지 않도록 종료 조건(Base Case)이 필요
// 종료 조건은 재귀가 멈추는 시점
// 재귀의 두번째 요소) 매번 다른 입력값(감소하는 값)
// 재귀를 통해 계속 같은 함수를 호출하지만 매번 다른 데이터를 가지고 함수 호출

// * 예제 1
function countDown(num) {
    if (num <= 0) {
        console.log('done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// countDown(3)
// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0)
// print "done!" 종료 조건

// * 예제 2
function sumRange(num) {
    if (num === 1) return 1; // 종료 조건
    return num + sumRange(num - 1);
}

// sumRange(3) => 3 + 2 + 1 = 6
// return 3 + sumRange(2) => 3 + 2 + 1
// return 2 + sumRange(1) => 2 + 1
// return 1 종료 조건 => 1

// * 예제 3
// 팩토리얼
// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total *= i
//     }
//     return total;
// }

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// <재귀의 함정>
// 종료 조건이 없으면 코드가 계속 실행되면서 스택에 계속 함수 추가
// 잘못된 값을 반환하거나, 반환을 안하면 스택에 계속 함수 추가
// => stack overflow!

// <helper 메소드 재귀>
// 재귀적이지 않은 외부 함수가 내부 재귀 함수 호출
function outer(input) { // 본 함수
    let outerScopedVariable = []

    function helper(helperInput) { // 재귀 함수
        helper(helperInput--)
    }

    helper(input)
    return outerScopedVariable;
}

// helper 메소드를 이용해 배열의 홀수 값 모으기
// function collectOdds(arr) {
//     let result = []
//
//     function helper(helperInput) { // 재귀 함수
//         if (helperInput.length === 0) {
//             return;
//         }
//         if (helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1))
//     }
//
//     helper(arr)
//     return result;
// }

// 위 함수를 순수 재귀로 다시 풀어보기
function collectOdds(arr) {
    // 함수가 재귀적으로 호출될 때마다 빈 배열로 리셋
    let newArr = [];
    if(arr.length === 0) {
        return newArr;
    }
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    // 연산이 완료됐을 때 합치기
    newArr = newArr.concat(collectOdds(arr.slice(1)));
    return newArr;
}

// collectOdds([1, 2, 3, 4, 5]) => [1, 3, 5]
// [1].concat(collectOdds([2, 3, 4, 5])) => [1, 3, 5]
// [].concat(collectOdds([3, 4, 5])) => [3, 5]
// [3].concat(collectOdds([4, 5])) => [3, 5]
// [].concat(collectOdds([5])) => [5]
// [5].concat(collectOdds([])) => [5]
// [] 종료 조건

// 헬퍼 메소드 없이 배열을 사용해 순수 재귀 솔루션을 작성할 때,
// slice, spread 연산자, cocat 메소드를 사용하면 배열을 변경할 필요없이 결과값을 축적할 수 있다.