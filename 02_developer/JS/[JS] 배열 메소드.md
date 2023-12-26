# **배열 리터럴**
```js
const arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];
```
# **배열 생성자**
```js
const arr = new Array(1, 2, 3);

const arr2 = new Array(20); // 인수 하나만 넘겨줄때는 그 인수가 배열길이
arr2.length // 20
```
# **배열 Method**
- **​✏️ 메소드는 this(원본 배열)를 변경한다.**
- **🔒 메소드는 this(원본 배열)를 변경하지 않는다.**
---
## **Array.isArray(arg)** : boolean
- 정적 메소드 Array.isArray는 **주어진 인수가 배열이면** true, 배열이 아니면 false를 반환한다.

## Array.from
- ES6에서 새롭게 도입된 Array.from 메소드는 **특정 객체를 변환하여** **새로운 배열을 생성**한다.
- 변환 할 수 있는 특정한 객체는 다음과 같다.

- **유사배열 객체(array-like objects)** : length 프로퍼티와 인덱스 된 요소를 가지고 있는 객체
- **이터러블 객체 (iterable objects)** : Map과 Set 객체 및 문자열과 같이 해당 요소를 개별적으로 선택할 수 있는 객체
```js
// 문자열은 이터러블이다.
const arr1 = Array.from('Hello');
console.log(arr1); // [ 'H', 'e', 'l', 'l', 'o' ]

// 유사 배열 객체를 새로운 배열을 변환하여 반환한다.
const arr2 = Array.from({ length: 2, 0: 'a', 1: 'b' });
console.log(arr2); // [ 'a', 'b' ]

// Array.from의 두번째 매개변수에게 배열의 모든 요소에 대해 호출할 함수를 전달할 수 있다.
// 이 함수는 첫번째 매개변수에게 전달된 인수로 생성된 배열의 모든 요소를 인수로 전달받아 호출된다.
const arr3 = Array.from({ length: 5 }, function (v, i) { return i; });
console.log(arr3); // [ 0, 1, 2, 3, 4 ]
```


## Array.of
- ES6에서 새롭게 도입된 Array.of 메소드는 **전달된 인수를 요소로 갖는 배열을 생성**한다.
- Array.of는 Array 생성자 함수와 다르게 전달된 **인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성**한다.
```js
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
const arr1 = Array.of(1);
console.log(arr1); // // [1]

const arr2 = Array.of(1, 2, 3);
console.log(arr2); // [1, 2, 3]

const arr3 = Array.of('string');
console.log(arr3); // 'string'
```

## ✏️Array.fill(value, start, end)
- 배열의 **시작 인덱스부터** 끝 인덱스 이전 **(끝 인덱스 자기자신은 미포함) 까지** **하나의 값으로 채워주는** 메서드이다.  
- **원본배열을 직접 변경하며, 리턴값은 변형한 배열이다.**

- value : 배열을 채울 값.
- start : 시작인덱스, **기본값 0.** 옵션
- end : 끝인덱스, **기본값 arr.length.** 옵션

```js
// 길이가 6이고 배열의 원소가 모두 0인 배열을 만들기

// 리터럴 방법
const zeroArray = [0, 0, 0, 0, 0, 0];

// fill()메소드 방법
const zeroArray2 = Array(6).fill(0);
console.log(nullArray); // [0, 0, 0, 0, 0, 0]
```

```js
[1, 2, 3].fill(4)                // [4, 4, 4] 모두 4로 채룸
[1, 2, 3].fill(4, 1)             // [1, 4, 4] 1번째 인덱스 부터 쭉 4로 채움
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3] 1번째에서 2번째 인덱스 전까지 4로 채움
```

```js
// fill ()을 사용하여 모두 1의 행렬(2차원 배열) 만들기
const arr = new Array(3);

for (let i=0; i<arr.length; i++) {
  arr[i] = new Array(4).fill(1); // 크기가 4이고 1로 채워진 배열 생성
}

console.log(arr[0][0]); // 1
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

## **🔒** **Array.prototype.indexOf(searchElement, fromIndex)**  number
- 원본 배열에서 인수로 전달된 요소를 검색하여 **인덱스를 반환**한다.
- 두번째 인수는 검색을 시작할 인덱스이다. 두번째 인수를 생략하면 처음부터 검색한다.

- 중복되는 요소가 있는 경우, 첫번째 인덱스를 반환한다.
- 해당하는 요소가 없는 경우, -1을 반환한다.

> indexOf 메소드는 배열에 요소가 존재하는지 여부를 확인할 때 유용하다.

```js
const foods = ['apple', 'banana', 'orange'];

// foods 배열에 'orange' 요소가 존재하는지 확인
if (foods.indexOf('orange') === -1) { // == if (!foods.includes('orange')) { } 
  foods.push('orange');
}

console.log(foods); // ["apple", "banana", "orange"]
```

## **🔒 Array.prototype.concat(…items)** **: T[]**
- 인수로 전달된 값들(배열 또는 값)을 원본 배열의 마지막 요소로 **추가한 새로운 배열을 반환**한다.
- 인수로 전달한 값이 배열인 경우, 배열을 해체하여 새로운 배열의 요소로 추가한다.
- 원본 배열은 변경되지 않는다.

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환
// 인수로 전달한 값이 배열인 경우, 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]

// 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환
result = arr1.concat(3);
console.log(result); // [1, 2, 3]

//  배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환
result = arr1.concat(arr2, 5);
console.log(result); // [1, 2, 3, 4, 5]

// 원본 배열은 변경되지 않는다.
console.log(arr1); // [1, 2]
```


## **🔒 Array.prototype.join(separator)** **: string**
- 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 값, 즉 **구분자(separator)로 연결한 문자열을 반환**한다.
- 구분자(separator)는 생략 가능하며 기본 구분자는 ,이다.

```js
const arr = [1, 2, 3, 4];

// 기본 구분자는 ','이다.
// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 기본 구분자 ','로 연결한 문자열을 반환
let result = arr.join();
console.log(result); // '1,2,3,4';

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 빈문자열로 연결한 문자열을 반환
result = arr.join('');
console.log(result); // '1234'

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 구분자 ':'로 연결한 문자열을 반환
result = arr.join(':');
console.log(result); // '1:2:3:4'
```

## **✏️ Array.prototype.push(…items)** **: number**
- 인수로 전달받은 모든 값을 **원본 배열의 마지막에 요소로 추가**하고 변경된 length 값을 반환한다.

**💡 push 메소드와 concat 메소드는 유사하게 동작하지만 미묘한 차이가 있다.**
- push 메소드는 원본 배열을 직접 변경하지만,
- concat 메소드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.

```js
const arr1 = [1, 2];
// push 메소드는 원본 배열을 직접 변경한다.
arr1.push(3, 4);
console.log(arr1); // [1, 2, 3, 4]

const arr2 = [1, 2];
// concat 메소드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
const result = arr2.concat(3, 4);
console.log(result); // [1, 2, 3, 4]
```

**💡 인수로 전달받은 값이 배열인 경우,**
- push 메소드는 배열을 그대로 원본 배열의 마지막 요소로 추가하지만
- concat 메소드는 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다.

```js
const arr1 = [1, 2];
// 인수로 전달받은 배열을 그대로 원본 배열의 마지막 요소로 추가한다
arr1.push([3, 4]);
console.log(arr1); // [1, 2, [3, 4]]

const arr2 = [1, 2];
// 인수로 전달받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다
const result = arr2.concat([3, 4]);
console.log(result); // [1, 2, 3, 4]
```

**💡 push 메소드는 성능면에서 좋지 않다.**
- push 메소드는 배열의 마지막에 요소를 추가하므로 length 프로퍼티를 사용하여 직접 요소를 추가할 수도 있다.
- 이 방법이 push 메소드보다 빠르다.

```js
const arr = [1, 2];

// arr.push(3)와 동일한 처리를 한다. 이 방법이 push 메소드보다 빠르다.
arr[arr.length] = 3;

console.log(arr); // [1, 2, 3]
```

**💡 push 메소드는 원본 배열을 직접 변경하는 부수 효과가 있다. 따라서 push 메소드보다는 ES6의 spread 문법(전개연산자)을 사용하는 편이 좋다.**

```js
const arr = [1, 2];

// ES6 spread 문법
const newArr = [...arr, 3];
// arr.push(3);

console.log(newArr); // [1, 2, 3]
```

## **✏️** **Array.prototype.pop()** **: T | undefined**
- 원본 배열에서 **마지막 요소를 제거**하고 제거한 요소를 반환한다.
- 원본 배열이 빈 배열이면 undefined를 반환한다.
- pop 메소드는 원본 배열을 직접 변경한다.

```js
const a = ['a', 'b', 'c'];
const c = a.pop();

// 원본 배열이 변경된다.
console.log(a); // a --> ['a', 'b']
console.log(c); // c --> 'c'
```

## **✏️** **Array.prototype.shift()** **: T | undefined**
- 배열에서 **첫요소를 제거하고** 제거한 요소를 반환한다.
- 만약 빈 배열일 경우 undefined를 반환한다. shift 메소드는 대상 배열 자체를 변경한다.

**🔥 shift**는 **push**와 함께 **배열을 큐(FIFO: First In First Out)**처럼 동작하게 한다.

```js
const arr = [];

arr.push(1); // [1]
arr.push(2); // [1, 2]
arr.push(3); // [1, 2, 3]

arr.shift(); // [2, 3]
arr.shift(); // [3]
arr.shift(); // []
```
[![자바스크립트-Array-메소드](https://blog.kakaocdn.net/dn/WAVrf/btrfREPz0k4/p6WXph477C3vvHzQs4H0Ok/img.png)](https://blog.kakaocdn.net/dn/WAVrf/btrfREPz0k4/p6WXph477C3vvHzQs4H0Ok/img.png)

## **✏️** **Array.prototype.reverse()** **: this**
- 배열 요소의 **순서를 반대로 변경**한다.
- 이때 원본 배열이 변경된다. 반환값은 변경된 배열이다.

## **🔒** **Array.prototype.slice(start, end)** **: T[]**
- 인자로 **지정된 배열의 부분을 복사하여 반환**한다.
- 원본 배열은 변경되지 않는다.

- start : 복사를 시작할 인텍스. 음수인 경우 배열의 끝에서의 인덱스를 나타낸다. 예를 들어 slice(-2)는 배열의 마지막 2개의 요소를 반환한다.
- end : 옵션이며 기본값은 length 값이다.

```js
const items = ['a', 'b', 'c'];

// items[0]부터 items[1] 이전(items[1] 미포함)까지 반환
let res = items.slice(0, 1);
console.log(res);  // [ 'a' ]

// items[1]부터 items[2] 이전(items[2] 미포함)까지 반환
res = items.slice(1, 2);
console.log(res);  // [ 'b' ]

// items[1]부터 이후의 모든 요소 반환
res = items.slice(1);
console.log(res);  // [ 'b', 'c' ]

// 인자가 음수인 경우 배열의 끝에서 요소를 반환
res = items.slice(-1);
console.log(res);  // [ 'c' ]

res = items.slice(-2);
console.log(res);  // [ 'b', 'c' ]

// 모든 요소를 반환 (= 복사본(shallow copy) 생성)
res = items.slice();
console.log(res);  // [ 'a', 'b', 'c' ]
```

[![자바스크립트-Array-메소드](https://blog.kakaocdn.net/dn/dPMuEO/btrfVsUTwW3/JGURuG0IxGgH0ekT6LzOl0/img.png)](https://blog.kakaocdn.net/dn/dPMuEO/btrfVsUTwW3/JGURuG0IxGgH0ekT6LzOl0/img.png)
**💡 slice 메소드에 인자를 전달하지 않으면 원본 배열의 복사본을 생성하여 반환한다. 이때 원본 배열의 각 요소를 얕은 복사(shallow copy)하여 새로운 복사본을 생성한다.**
```js
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: '', completed: false }
];

// shallow copy
const _todos = todos.slice();
// const _todos = [...todos];
console.log(_todos === todos); // false

// 배열의 요소는 같다. 즉, 얕은 복사되었다.
console.log(_todos[0] === todos[0]); // true
```

**💡 이를 이용하여 arguments, HTMLCollection, NodeList와 같은 유사 배열 객체(Array-like Object)를 배열로 변환할 수 있다.**
```js
function sum() {
  // 유사 배열 객체 => Array
  const arr = Array.prototype.slice.call(arguments); // [1, 2, 3]
 
  const arr0 = [].slice.call(arguments); // [1, 2, 3]
 
  // Spread 문법
  const arr1 = [...arguments]; // [1, 2, 3]
 
  // Array.from 메소드는 유사 배열 객체를 복사하여 배열을 생성한다.
  const arr2 = Array.from(arguments); // [1, 2, 3]

}

console.log(sum(1, 2, 3));
```

## **✏️** **Array.prototype.splice(start, deleteCount, …items)** **: T[]**
- start : 배열에서의 시작 위치 인덱스 이다. start 만을 지정하면 배열의 start부터 모든 요소를 제거한다.
- deleteCount : 시작 위치(start)부터 제거할 요소의 수이다. deleteCount가 0인 경우, 아무런 요소도 제거되지 않는다. (옵션)
- items : 삭제한 위치에 추가될 요소들이다. 만약 아무런 요소도 지정하지 않을 경우, 삭제만 한다. (옵션)

>총 3가지의 기능으로 사용될수 있다.  
>  1) 배열 요소 추가 (삭제 안하고 추가)  
>  2) 배열 요소 교체 (삭제하고 추가)  
>  3) 배열 요소 삭제 (추가 안하고 삭제)

**반환값은 삭제한 요소들을 가진 배열이다.**

**💡 이 메소드의 가장 일반적인 사용은 배열에서 요소를 삭제할 때다.**
```js
const items1 = [1, 2, 3, 4];

// items[1]부터 2개의 요소를 제거하고 제거된 요소를 배열로 반환
const res1 = items1.splice(1, 2);

// 원본 배열이 변경된다.
console.log(items1); // [ 1, 4 ]
// 제거한 요소가 배열로 반환된다.
console.log(res1);   // [ 2, 3 ]

// -------------------------------------------

const items2 = [1, 2, 3, 4];

// items[1]부터 모든 요소를 제거하고 제거된 요소를 배열로 반환
const res2 = items2.splice(1);

// 원본 배열이 변경된다.
console.log(items2); // [ 1 ]
// 제거한 요소가 배열로 반환된다.
console.log(res2);   // [ 2, 3, 4 ]
```

[![자바스크립트-Array-메소드](https://blog.kakaocdn.net/dn/vptbA/btrfUNkV7Rl/AXTq9C7sMA3qQtf9PcumYk/img.png)](https://blog.kakaocdn.net/dn/vptbA/btrfUNkV7Rl/AXTq9C7sMA3qQtf9PcumYk/img.png)
**💡 배열에서 요소를 제거하고 제거한 위치에 다른 요소를 추가한다. (교체)**
```js
const items = [1, 2, 3, 4];

// items[1]부터 2개의 요소를 제거하고 그자리에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
const res = items.splice(1, 2, 20, 30);

// 원본 배열이 변경된다.
console.log(items); // [ 1, 20, 30, 4 ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ 2, 3 ]
```

[![자바스크립트-Array-메소드](https://blog.kakaocdn.net/dn/lvwlB/btrfWbrOOde/2wANKrslqliLO5sasMMcK0/img.png)](https://blog.kakaocdn.net/dn/lvwlB/btrfWbrOOde/2wANKrslqliLO5sasMMcK0/img.png)
**💡 배열 중간에 새로운 요소를 추가할 때도 사용된다. (0개를 삭제)**
```js
const items = [1, 2, 3, 4];

// items[1]부터 0개의 요소를 제거하고 그자리(items[1])에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
const res = items.splice(1, 0, 100);

// 원본 배열이 변경된다.
console.log(items); // [ 1, 100, 2, 3, 4 ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ ]
```

**💡 배열 중간에 배열을 추가할 때도 사용된다.**
```js
const items = [1, 4];
const items2 = [2, 3];

// 원본배열 item를 아규먼트 인자로 items2를 받아서,
// items[1]부터 0개의 요소를 제거하고 그자리(items[1])에 새로운 배열를 추가한다. 

// 이렇게 하면 아규먼트가 2차원형태가 되어버린다. ( 1, [ 2, 3 ], 4 )
items.splice(1, 0, items2);

// apply로 items를 주고, [1, 0].concat([2, 3])의 결과 인자 1,0, 2,3을 주게되는 꼴이 된다.
Array.prototype.splice.apply(items, [1, 0].concat([2, 3]));

items.splice(1,0, 2,3)
// == [].splice.apply(items, [1, 0].concat([2, 3]));
// == items.splice(1, 0, ...items);

console.log(items); // [ 1, 2, 3, 4 ]
```

> **Tip**
> -  slice는 배열의 일부분을 복사해서 반환하며 원본을 훼손하지 않는다.
> - splice는 배열에서 요소를 제거하고 제거한 위치에 다른 요소를 추가하며 원본을 훼손한다.
---

|   |   |
|---|---|
|**메소드**|**설명**|
|Array.isArray()|전달된 값이 Array 객체인지 아닌지를 검사함.|
|Array.from()|배열과 비슷한 객체와 반복할 수 있는 객체를 배열처럼 변환함.|
|Array.of()|인수의 수나 타입에 상관없이 인수로 전달받은 값을 가지고 새로운 Array 인스턴스를 생성함.|

|   |   |
|---|---|
|**프로토타입  <br>메소드**|**설명**|
|push()|하나 이상의 요소를 배열의 가장 마지막에 추가하고, 배열의 총 길이를 반환함.|
|pop()|배열의 가장 마지막 요소를 제거하고, 그 제거된 요소를 반환함.|
|shift()|배열의 가장 첫 요소를 제거하고, 그 제거된 요소를 반환함.|
|unshift()|하나 이상의 요소를 배열의 가장 앞에 추가하고, 배열의 총 길이를 반환함.|
|reverse()|배열 요소의 순서를 전부 반대로 교체함.|
|sort()|해당 배열의 배열 요소들을 알파벳 순서에 따라 정렬함.|
|splice()|기존의 배열 요소를 제거하거나 새로운 배열 요소를 추가하여 배열의 내용을 변경함.|
|copyWithin()|해당 배열에서 일련의 요소들을 복사하여, 명시된 위치의 요소들을 교체함.|
|fill()|시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 특정 값으로 교체함.|
|join()|배열의 모든 요소를 하나의 문자열로 반환함.|
|slice()|전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 추출하여 만든 새로운 배열을 반환함.|
|concat()|해당 배열의 뒤에 인수로 전달받은 배열을 합쳐서 만든 새로운 배열을 반환함.|
|toString()|해당 배열의 모든 요소를 하나의 문자열로 반환함.|
|toLocaleString()|해당 배열의 모든 요소를 하나의 문자열로 반환함.|
|indexOf()|전달받은 값과 동일한 배열 요소가 처음으로 등장하는 위치의 인덱스를 반환함.|
|lastIndexOf()|전달받은 값과 동일한 배열 요소가 마지막으로 등장하는 위치의 인덱스를 반환함.|
|forEach()|해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행함.|
|map()|해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 실행 결과를 새로운 배열로 반환함.|
|filter()|해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 true인 요소들만을 새로운 배열에 담아 반환함.|
|every()|해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 모두 true일 때에만 true를 반환함.|
|some()|해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 하나라도 true이면 true를 반환함.|
|reduce()|해당 배열의 모든 요소를 하나의 값으로 줄이기 위해, 두 개의 인수를 전달받는 콜백 함수를 실행함.  <br>(배열의 첫 번째 요소부터 시작함.)|
|reduceRight()|해당 배열의 모든 요소를 하나의 값으로 줄이기 위해, 두 개의 인수를 전달받는 콜백 함수를 실행함.  <br>(배열의 마지막 요소부터 시작함.)|
|entries()|배열 요소별로 키와 값의 한 쌍으로 이루어진 새로운 배열 반복자 객체(Array Iterator Object)를 배열 형태로 반환함.|
|keys()|배열 요소별로 키(key)만 포함하는 새로운 배열 반복자 객체를 배열 형태로 반환함.|
|values()|배열 요소별로 값(value)만 포함하는 새로운 배열 반복자 객체를 배열 형태로 반환함.|
|find()|검사를 위해 전달받은 함수를 만족하는 배열 요소의 값을 반환함. 만족하는 값이 없으면 undefined를 반환함.|
|findIndex()|검사를 위해 전달받은 함수를 만족하는 배열 요소의 인덱스를 반환함. 만족하는 값이 없으면 -1을 반환함.|

