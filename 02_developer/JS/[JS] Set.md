##### JavaScript의 Set 객체에 대한 설명
 * Set은 값의 집합을 나타내는 객체입니다. 각 값은 Set 내에서 한 번만 나타날 수 있습니다.
 * 다시 말해서, Set 내의 값은 고유해야 합니다.
```js
// Set 객체 생성
const mySet = new Set();
```
##### Set에 값을 추가하기
 * add 메소드를 사용하여 Set에 값을 추가할 수 있습니다.
```js
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add("Hello");
mySet.add({name: "John"});
```
##### Set에서 값을 삭제하기
 * delete 메소드를 사용하여 특정 값을 Set에서 삭제할 수 있습니다.
```js
mySet.delete(2);
```
##### Set의 크기 확인하기
 * size 프로퍼티를 사용하여 Set 내의 값의 개수를 확인할 수 있습니다.
```js
const setSize = mySet.size;
```
##### Set에 특정 값이 포함되어 있는지 확인하기
 * has 메소드를 사용하여 Set에 특정 값이 포함되어 있는지 확인할 수 있습니다.
```js
const hasHello = mySet.has("Hello");
```
##### Set의 모든 값을 삭제하기
 * clear 메소드를 사용하여 Set의 모든 값을 삭제할 수 있습니다.
```js
mySet.clear();
```
##### Set의 값을 순회하기
 * forEach 메소드 또는 for...of 루프를 사용하여 Set의 값을 순회할 수 있습니다.
```js
mySet.add(4).add(5).add(6);
mySet.forEach(value => console.log(value));
for (let value of mySet) {
    console.log(value);
}
```
##### Set 내의 객체는 참조에 의해 저장된다.
 * 따라서 두 개의 동일한 객체 리터럴을 추가하면 Set 내에 두 개의 독립적인 객체로 저장됩니다.
```js
const obj1 = {name: "John"};
const obj2 = {name: "John"};
mySet.add(obj1);
mySet.add(obj2);
// 이 경우, mySet의 크기는 2가 됩니다. obj1과 obj2는 메모리에서 다른 위치를 참조하기 때문입니다.
```
##### Set을 배열로 변환하기
 * Array.from 함수 또는 스프레드 연산자를 사용하여 Set을 배열로 변환할 수 있습니다.
```js
const setToArray = Array.from(mySet);
const setToArrayUsingSpread = [...mySet];
```
