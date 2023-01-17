// 삽입 정렬은 한번에 하나의 항목을 올바른 위치에 삽입
// 배열의 정렬된 부분을 점진적으로 구축하는 방식
// 삽입 정렬의 시간 복잡도는 기본적으로 O(n^2)
// 데이터가 거의 정렬되어 있는 경우엔 O(n)이다.
// 삽입 정렬이 유리한 경우는 정렬된 부분을 유지하고 적절한 위치에 항목을 삽입하는 방식이기 때문에
// 라이브, 스트리밍 방식으로 들어온 데이터를 즉시 입력해야 하는 경우에 편리하다.


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}