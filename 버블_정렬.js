// <정렬 알고리즘>
// 데이터를 정렬할 수 있는 방법은 많고 각 방법은 장단점이 있다.

// <자바스크립트 배열 정렬 내장 메소드>
function numberCompare(num1, num2) {
    // 두 수를 오름차순으로 정렬
    // 두 수의 차가 음수면 num1, num2 순
    // 두 수의 차가 양수면 num2, num1 순으로 정렬
    return num1 - num2;
    // 내림차순 정렬
    // return num2 - num1;
}

// = [6, 5, 80, 19].sort((a, b) => a - b)

// 문자열 길이를 기준으로 정렬할 때도
function compareByLength(str1, str2) {
    // 길이가 짧은 문자 ~ 긴 문자 정렬
    return str1.length - str2.length
}

// <버블 정렬>
// sinking sort 이라고도 함
// 숫자를 비교해서 더 큰 숫자가 한번에 하나씩 뒤로 이동
// 루프를 돌면서 각 요소를 다음 요소와 비교,
// 요소가 비교 대상인 다음 요소보다 크면 다음 요소의 뒤로 위치 이동
// 전체 요소가 오름차순으로 정렬될 때까지 반복
// 반복을 할 때마다 정렬해야 할 요소의 수 감소

// 빅오 시간 복잡도
// 일반적으로 중첩 루프가 있기 때문에 O(n^2)
// 예외적으로 데이터가 거의 정렬이 끝난 상태라면 O(n)
function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}
function anotherSwap(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(arr){
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    for(let i = arr.length; i > 0; i--){
        // 비교가 끝난 마지막 요소 한 개는 빼고 진행
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]) {
                // 앞 수가 다음 수보다 크면 위치 교환
                swap(arr, j, j + 1)
            }
        }
    }
    return arr;
}

// <버블 정렬 최적화>

function betterBubbleSort(arr){
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        // 비교가 끝난 마지막 요소 한 개는 빼고 진행
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]) {
                // 앞 수가 다음 수보다 크면 위치 교환
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        // 교환된 요소가 없다면 정렬이 완료된 것으로 간주하고 break
        if(noSwaps) break;
    }
    return arr;
}