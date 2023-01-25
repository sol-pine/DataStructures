## Class는 무엇인가?
* 미리 정의된 속성 및 메소드들을 이용해 객체를 생성하기 위한 blueprint

## JavaScript ES2015 Class 문법
```javascript
class Student { // Student라는 객체를 찍어내는 패턴
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}
```

#### Student 인스턴스 찍어내기
```javascript
let firstStudent = new Student("Steve", "Jobs", 3);
firstStudent.fullName() // Your full name is Steve Jobs
let secondStudent = new Student("Bill", "Gates", 1);
```

#### Instance Methods
```javascript
class Student { // Student라는 객체를 찍어내는 패턴
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0; // 초기값 0 지정
    this.scores = [];
  }
  fullName(){ // "this"는 개별 인스턴스에만 적용
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate(){
    this.tardies += 1;
    if(this.tardies >= 3) {
      return "YOU ARE EXPELLED!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score){
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage(){
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}
```

#### Class Methods
* 특정 instance와 무관
* Instance Methods에 비해 사용은 덜하지만 **유틸리티 기능**을 사용하기에 유용
```javascript
class Student { // Student라는 객체를 찍어내는 패턴
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0; // 초기값 0 지정
    this.scores = [];
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  static enrollStudents(){
    return "ENROLLING STUDENTS!"
  }
}

// firstStudent.enrollStudents(); // 개별 인스턴스와 무관
Student.enrollStudents();
```

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
```
