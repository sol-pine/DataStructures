// <주파수 카운터 - sameFrequency>
// sameFrequency 라는 함수를 작성하십시오 .
// 두 개의 양의 정수가 주어지면 두 숫자의 자릿수 빈도가 같은지 확인하십시오.
// 솔루션에는 다음과 같은 복잡성이 있어야 합니다.
// 시간: O(N)

function sameFrequency(num1, num2) {
    // num1과 num2의 길이가 같지 않으면 false 반환
    if (num1.length !== num2.length) {
        return false;
    }
    // num1과 num2를 각각 arr1, arr2로 배열화
    let arr1 = num1.toString().split('');
    let arr2 = num2.toString().split('');
    // arr1의 요소를 키로 빈도 수를 값으로 한 객체 obj 만들기
    let obj = {};
    arr1.map(v => obj[v] ? obj[v] += 1 : obj[v] = 1);
    // arr2를 반복을 돌려 obj에 요소가 있으면 값을 -1, 없으면 false 반환
    for (let v of arr2) {
        if (!obj[v]) {
            return false;
        } else {
            obj[v] -= 1;
        }
    }
    // true 반환
    return true;
}

// <주파수 카운터/다중 포인터 - areThereDuplicates>
// 전달된 인수 사이에 중복이 있는지 확인하는 areThereDuplicates 라는 함수를 구현합니다.
// 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이를 해결할 수 있습니다.
// 시간 - O(n)
// 공간 - O(n)

function areThereDuplicates(...arg) {
    // 배열로 만들고
    let arr = arg.toString().split(',');
    // 빈도 수 객체로 바꾸고
    let obj = {};
    for (let v of arr) {
        if (obj[v]) {
            return true;
        } else {
            obj[v] = 1;
        }
    }
    return false;
}

// <다중 포인터 - averagePair>
// averagePair 라는 함수를 작성하십시오 .
// 정렬된 정수 배열과 목표 평균이 주어지면 쌍의 평균이 목표 평균과 동일한 값 쌍이 배열에 있는지 확인하십시오.
// 평균 목표와 일치하는 쌍이 둘 이상 있을 수 있습니다.

function averagePair(arr, avg) {
    // left는 첫번째 인덱스
    let left = 0;
    // right는 마지막 인덱스
    let right = arr.length - 1;
    while (left < right) {
        // 평균과 동일한 쌍이 있으면 true 반환
        if ((arr[left] + arr[right]) / 2 === avg) {
            return true;
        }
        // 평균이 목표 평균보다 높으면 right -1칸 이동
        else if ((arr[left] + arr[right]) / 2 > avg) {
            right--;
        }
        // 평균이 목표 평균보다 낮으면 left +1칸 이동
        else if ((arr[left] + arr[right]) / 2 < avg) {
            left++;
        }
    }
    return false;
}

// <다중 포인터 - isSubsequence>
// 두 개의 문자열을 받아서 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 하위 시퀀스를 형성하는지 확인하는 isSubsequence 라는 함수를 작성하세요 .
// 즉, 함수는 첫 번째 문자열의 문자가 순서를 변경하지 않고 두 번째 문자열의 어딘가에 나타나는지 여부를 확인해야 합니다.

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

// <슬라이딩 윈도우 - maxSubarraySum>
// 정수 배열과 숫자가 주어지면 함수에 전달된 숫자의 길이와 하위 배열의 최대 합을 찾는
// maxSubarraySum 이라는 함수를 작성하십시오.

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let temp;
    let max = 0;
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    temp = max;
    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(temp, max);
    }
    return max;
}

// <슬라이딩 윈도우 - minSubArrayLen>
// 양의 정수 배열과 양의 정수라는 두 개의 매개변수를 받는 minSubArrayLen 이라는 함수를 작성하세요 .
// 이 함수는 합계가 함수에 전달된 정수보다 크거나 같은 연속 하위 배열 의 최소 길이를 반환해야 합니다. 하나도 없으면 대신 0을 반환합니다.

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // total이 sum보다 작으면서 end가 nums 길이보다 작으면
        if (total < sum && end < nums.length) {
            // total에 end번째 값 더하기
            total += nums[end];
            end++;
        }
        // total이 sum보다 크거나 같으면
        else if (total >= sum) {
            // minLen과 end-start 중 작은 값으로 minLen 업데이트
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

// <슬라이딩 윈도우 - findLongestSubstring>
// 문자열을 받아들이고 모든 고유 문자를 포함하는 가장 긴 하위 문자열의 길이를 반환하는
// findLongestSubstring 이라는 함수를 작성합니다.

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // 객체에 문자가 있으면
        if (seen[char]) {
            // start와 문자 순서 중 큰 값을 start로 업데이트
            start = Math.max(start, seen[char]);
        }
        // index - 문자열 시작 + 1 (현재 카운트까지 포함)
        longest = Math.max(longest, i - start + 1);
        // 중복 문자 인덱스 저장
        seen[char] = i + 1;
    }
    return longest;
}