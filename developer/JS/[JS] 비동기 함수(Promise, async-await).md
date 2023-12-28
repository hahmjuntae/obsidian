# Promise와 Async/Await
 * Promise는 비동기 연산의 최종 완료(또는 실패) 및 그 결과 값을 나타냅니다.
 * Pending: 초기 상태, 완료되지 않음
 * Fulfilled: 연산이 성공적으로 완료됨
 * Rejected: 연산이 실패함
 * finally: 성공/실패 관계없이 항상 호출

# Promise 생성 예제
```js
const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('Promise is resolved!');
      // reject('Promise was rejected.');
  }, 1000);
});
```

# Promise 사용 예제
```js
promiseExample
  .then(result => {
      console.log(result);  // 'Promise is resolved!'가 출력됩니다.
  })
  .catch(error => {
      console.error(error);
  })
  .finally(() => {
    console.log('This will run regardless of the promise status.');
  });
```

# async/await
* async/await는 Promise를 더 깔끔하고 읽기 쉽게 작성할 수 있도록 합니다.
* async: async 함수는 항상 Promise를 반환합니다.
* await: Promise의 결과가 반환될 때까지 함수의 실행을 일시 중단합니다.

# async/await 예제
```js
async function asyncExample() {
  try {
      const result = await promiseExample;
      console.log(result);
  } catch (error) {
      console.error(error);
  }
}

asyncExample();
```

* 주의: await는 오직 async 함수 안에서만 사용할 수 있습니다.
* Top-level await는 최근 ECMAScript 제안의 일부입니다.
* 이를 사용하면 모듈의 최상위에서 await를 사용할 수 있게 됩니다.