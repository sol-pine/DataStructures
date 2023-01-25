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

### push 메소드
```javascript
// 한 노드가 가지고 있는 데이터 -> val
// 다음 노드를 참조 -> next

class Node{
  constructor(val){
    this.val = val;
    this.next = null; // 다음 노드가 없기 때문에 null로 초기화
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){ // head에 값이 없을 시
      this.head = newNode; // head와 tail은 같음
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // 현재 tail을 끝으로 추가
      this.tail = newNode; // this.tail이 newNode를 가리킴
    }
    this.length++;
    return this;
  }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

var list = new SinglyLinkedList();

```
<img width="494" alt="image" src="https://user-images.githubusercontent.com/105091138/214558816-027457e7-3a10-4711-bcb5-f8521a345dde.png">
<img width="483" alt="image" src="https://user-images.githubusercontent.com/105091138/214559247-206c1422-0555-4a80-a85c-a2cd204a9ce6.png">
