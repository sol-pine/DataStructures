## ➡️ 단일 연결 리스트

### 연결 리스트?
* 데이터를 저장하는 자료 구조
* Array와 같이 순서에 따라 다수의 데이터 저장하지만 데이터에 직접 접근하기 위해 필요한 인덱스는 없음
* 연결 리스트들은 다수의 노드들로 구성
  * 각각의 노드는 다음 노드를 가리키는 정보를 저장, 다음 노드가 없는 경우엔 `null`을 저장
  * `head`, `tail`, `length`의 속성을 가짐
* 요소에 접근하기 위해선 첫 번째 노드부터 시작
  * Array는 엘리베이터가 있는 고층 건물, 층(인덱스)을 입력하면 곧바로 도착
  * 반면, 연결 리스트는 엘리베이터가 없고 각 층을 연결하는 계단만 있기 때문에 1층부터 순서대로 올라가야 함
* 랜덤한 아이템에 다이렉트로 접근은 못하지만, 새로운 항목을 추가하거나 제거할 때 매우 유용 (cf. Array는 인덱스 재지정 필요)

<img width="496" alt="image" src="https://user-images.githubusercontent.com/105091138/214528298-d26b8fda-d368-4d8c-b427-433398fc144d.png">

### Let's code it!

```javascript
// 한 노드가 가지고 있는 데이터 -> val
// 다음 노드를 참조 -> next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null; // 다음 노드가 없기 때문에 null로 초기화
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) { // 연결 리스트의 마지막에 노드 추가
        const newNode = new Node(val)
        if (!this.head) { // head에 값이 없을 시
            this.head = newNode; // head와 tail은 같음
            this.tail = this.head;
        } else {
            this.tail.next = newNode; // 지금 tail의 다음 노드가 newNode
            this.tail = newNode; // newNode가 tail
        }
        this.length++;
        return this;
    }

    // traverse(){ // 리스트 따라가기
    //     let current = this.head;
    //     while(current){
    //         console.log(current.val); // HELLO GOODBYE !
    //         current = current.next; // current를 다음 노드로 업데이트, 다음 노드가 없으면 null
    //     }
    // }

    pop() { // 연결 리스트의 마지막 노드 제거
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) { // 다음 노드가 있으면 반복
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null; // 리스트 마지막 요소 연결 끊기
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current; // 제거한 아이템 반환
    }

    shift() { // 연결 리스트의 첫 노드 제거
        if (!this.head) return undefined;
        let removedHead = this.head;
        this.head = removedHead.next; // head 다음으로 넘기기
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return removedHead; // 제거한 아이템 반환
    }
}


// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

const list = new SinglyLinkedList();
list.push("HELLO") // HELLO (HEAD/TAIL)
list.push("GOODBYE") // HELLO (HEAD) -> GOODBYE (TAIL)
list.push("!") // HELLO (HEAD) -> GOODBYE -> ! (TAIL)
list.pop() // !
list.pop() // GOODBYE
list.pop() // HELLO
list.pop() // undefined
```









