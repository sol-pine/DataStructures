// <검색 알고리즘>
// <선형 검색>
// 배열에 특정 값이 포함되어 있는지 어떻게 알 수 있을까?
// 배열 내 요소를 처음부터 하나씩 확인해본다.
// indexOf, includes, find, findIndex
//function linearSearch(arr, num) {
//     return arr.indexOf(num);
// }

// 선형 검색을 for 반복문과 if 조건문을 이용한 함수로 구현해보자.
// 시간 복잡도는 O(n)
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

// <이진 검색>
// 선형 검색은 요소를 하나씩 대조하지만
// 이진 검색은 요소를 확인 후, 확인한 요소를 기준으로 조건에 해당하지 않는 항목의 절반을 없애 나간다.
// 정렬된 배열에만 유효하므로 데이터가 분류(오름차순이나 내림차순 등으로)되어 있어야 한다.
// 배열을 두 파트로 나누고 중간점을 선택해 찾는 값이 중간점을 기준으로 좌측에 있을지 우측에 있을지 확인하는 로직

// 이진 검색을 하는 함수를 구현해보자.
// 시간 복잡도 O(log n) ~ O(1)
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let center = Math.ceil((start + end) / 2)
    while (start < end) {
        if (arr[center] === val) return center
        if (arr[center] > val) {
            end = center
        } else {
            start = center
        }
        center = Math.ceil((start + end) / 2)
    }
    return -1;
}

// <문자열 검색>
// 문자쌍을 하나씩 확인
function test(long, short) {
    let cnt = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            // 문자가 일치하지 않으면 반복문 중단
            if (long[i + j] !== short[j]) break;
            // 문자가 일치하면 카운트 +1
            if (j === short.length - 1) cnt++;
        }
    }
    return cnt;
}

