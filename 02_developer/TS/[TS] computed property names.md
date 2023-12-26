 * TypeScript에서 계산된 프로퍼티 이름(computed property names)을 사용하면, 다른 객체의 키/값을 참조하여 새로운 객체의 키와 값을 동적으로 선언할 수 있다.

```ts
const sourceObject = {
  key1: 'value1',
  key2: 'value2'
};

// sourceObject의 키/값을 참조하여 새로운 객체 생성
const newObject = {
  [sourceObject.key1]: sourceObject.key1,
  [sourceObject.key2]: sourceObject.key2
};

console.log(newObject);
// 출력: { value1: 'value1', value2: 'value2' }
```

* 위의 예제에서, `sourceObject`의 각 키/값을 사용하여 `newObject`의 키와 값을 동적으로 생성했다.
* 대괄호 `[]` 내부의 표현식을 계산하여 동적으로 객체의 프로퍼티 이름을 결정할 수 있다.