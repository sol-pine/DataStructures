// 버블 정렬은 큰 값을 배열 끝에 위치
// 선택 정렬은 첫번째 값과 배열의 값들을 비교하며 최솟값을 찾는 작업을 반복하고
// 반복이 끝난 마지막에 찾은 최솟값을 첫번째 요소와 위치 교환
// 순서대로 반복
// 선택 정렬의 빅오 시간 복잡도는 O(n^2)

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            // 최솟값을 가진 인덱스가 달라지면 업데이트
            if (arr[j] < arr[min]) min = j;
            // 반복을 시작한 첫번째 요소가 최솟값이 아니면 위치 교환
            if (i !== min) swap(arr, i, min);
        }
    }
    return arr;
}