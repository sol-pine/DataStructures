// <frequency counters: 빈도 세기 패턴>
// 객체를 사용해 값과 빈도 수집

// * 예시 1
// 2개의 배열 arr1과 arr2가 주어질 때,
// arr2 의 모든 요소가  arr1 요소의 제곱에 해당하는 값을 가지면 true를 반환하는 same 함수를 작성하십시오.
same([1, 2, 3], [4, 1, 9]) // true 정렬은 상관 없음
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false

// naive solution
// 시간 복잡도 O(n^2)
// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length){ // 애초에 배열의 길이가 다르면 false 반환
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){ // for 반복문 => O(n)
//         let correctIndex = arr2.indexOf(arr1[i] ** 2) // Array.indexOf() => 중첩 루프 O(n^2)
//         if(correctIndex === -1){ // 배열에 원하는 요소가 없으면 false 반환
//             return false;
//         }
//         arr2.splice(correctIndex, 1) // 배열에 해당 요소가 있으면 해당 요소를 없애기
//     }
//     return true; // 빈 배열이면 true 반환
// }

// better solution
// 두 개의 개별 루프가 중첩된 루프보다 낫다 O(n)
// 두 개의 배열을 각 배열의 요소가 키인 객체를 만들어 각 배열을 비교할 수 있다.
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) { // for 반복 => O(n)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) { // for 반복 => O(2n)
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) { // for 반복 => O(3n)
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

// * 예시 2
// 2개의 문자열 str1과 str2가 주어질 때, str2가 str1의 애너그램이면 true
// 아니면 false를 반환하는 validAnagram 함수를 작성하십시오. _
validAnagram('', '') // true
validAnagram('cinema', 'iceman') // true
validAnagram('aaz', 'zza') // false
validAnagram('car', 'ar') // false

function validAnagram(str1, str2) {
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    if (arr1.length !== arr2.length) {
        return false
    }
    const frequencyCounter = {}
    for (let val of arr1) {
        // 문자가 있으면 값에 1을 더하고, 없으면 값을 1로 설정
        frequencyCounter[val] ? frequencyCounter[val] += 1 : frequencyCounter[val] = 1
    }
    for (let val of arr2) {
        // 문자를 찾을 수 없거나 값이 0이면 false 반환
        if (!frequencyCounter[val]) {
            return false
        } else {
            // 문자를 찾았으면 값에 1을 빼기
            frequencyCounter[val] -= 1
        }
    }
    return true
}

// <multiple pointers: 다중 포인터 패턴>
// 인덱스나 위치에 해당하는 포인터나 값을 만든 다음
// 조건에 따라 두 개의 포인터(변수)가 특정 방향으로 움직이도록 한다.
// 두 개의 포인터가 양 끝점에서 시작해 중간 지점을 향해 이동하는 것
// 또는 두 개의 포인터가 한 끝점(시작이나 끝 지점)에서 시작해 한 방향을 향해 같이 이동하는 것

// * 예시 1
// 오름차순으로 정렬된 정수 배열인 arr가 주어질 때, 배열의 두 요소 합이 0이 되는 요소를 반환하거나
// 0이 되는 요소가 없으면 undefined를 반환하는 sumZero 함수를 작성하십시오.
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [3, -3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined

// naive solution
// 시간 복잡도 O(n^2), 공간 복잡도 0(1)
// function sumZero(arr) {
//     for(let i = 0; i < arr.length; i++){ // for 반복 => O(n)
//         for(let j = i+1; j < arr.length; j++){ // for 중첩 반복 => O(n^2)
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// better solution
// 시간 복잡도 O(n), 공간 복잡도 O(1)
function sumZero(arr) {
    // 왼쪽은 0부터 시작
    let left = 0;
    // 오른쪽은 마지막 인덱스(배열 길이 - 1)부터 시작
    let right = arr.length - 1;
    // 왼쪽이 오른쪽보다 작으면 반복 실행
    while (left < right) { // while 반복 => O(n)
        let sum = arr[left] + arr[right];
        // 두 수의 합이 0이면 배열을 반환
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        // 합이 0보다 크면 오른쪽이 -1칸 이동
        else if (sum > 0) {
            right--;
        }
        // 합이 0보다 작으면 왼쪽이 +1칸 이동
        else {
            left++;
        }
    }
}

// * 예시 2
// 오름차순으로 정렬된 정수 배열인 arr가 주어질 때, 배열의 고유한 숫자 개수를 반환하는 countUniqueValues 함수를 작성하십시오.
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4

function countUniqueValues(arr) {
    if (arr.length === 0) return 0
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        // 인덱스 i 위치의 수와 j 위치의 수를 비교하여 다를 경우에만 i 위치를 +1칸 이동한 후,
        // j 위치의 수로 변경하고 계속 비교 진행
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

// <sliding window: 기준점 간 이동 배열 배턴>
// 특정 방식으로 연속되는 데이터의 하위 집합을 찾는데 유용
// 요소(단일 변수, 배열, 문자열)의 시작 위치(왼쪽)부터 끝나는 위치로 이동

// * 예시 1
// 정수 배열 arr와 숫자 n이 주어질 때, n개의 연속된 요소들의 합계 중
// 가장 큰 합계를 찾아 반환하는 maxSubarraySum 함수를 작성하시오.
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([], 4) // null

// naive solution
// 시간 복잡도 O(n^2)
// function maxSubarraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) { // for 반복 => O(n)
//         let temp = 0;
//         for (let j = 0; j < num; j++) { // for 중첩 반복 => O(n^2)
//             temp += arr[i + j];
//         }
//         // max보다 더 큰 합계가 나오면 max를 temp로 업데이트
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max;
// }

// better solution
// 시간 복잡도 O(n)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    // 배열의 길이가 num 보다 작으면 null을 반환
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // tempSum에 이전 수를 빼주고 다음 수를 더해줘서 배열을 오른쪽으로 한 칸씩 이동하며 더해줌
        tempSum = tempSum - arr[i - num] + arr[i];
        // maxSum과 tempSum 중 더 큰 수를 maxSum에 업데이트
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// <divide and conquer: 분할과 정복 패턴>
// 주로 배열이나 문자열 같은 큰 규모의 데이터셋 처리
// 큰 데이터 덩어리를 작은 조각으로 나누기

// * 예시
// 오름차순으로 정렬된 숫자 배열 arr과 정수 val이 주어질 때, 배열 arr에서 val의 인덱스를 찾아 반환하거나
// 배열에 val이 없으면 -1을 반환하는 search 함수를 작성하시오.

// naive solution
// 시간 복잡도 O(n)
// function search(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             return i;
//         }
//     }
//     return -1;
// }
// 배열을 분할하여 이진 탐색
// 탐색해야 할 요소의 범위를 줄이기
// 시간 복잡도 O(log n)
function search(arr, val){
    let min = 0;
    let max = arr.length - 1;

    while(min <= max){
        let middle = Math.floor((min + max) / 2);

        if(arr[middle] < val) {
            min = middle + 1;
        }
        else if(arr[middle] > val){
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

