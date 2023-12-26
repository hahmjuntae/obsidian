* Rest parameters는 함수의 인수들을 배열로 수집하는 데 사용됩니다.
* Rest parameters는 항상 함수의 마지막 파라미터로 위치해야 합니다.

- 다음 함수에서, 첫 번째 인수는 `first`, 나머지 모든 인수들은 `remaining` 배열에 수집됩니다.
```ts
function collectArgs(first: string, ...remaining: string[]): void {
  console.log(`First argument: ${first}`);
  console.log(`Remaining arguments: ${remaining.join(', ')}`);
}

collectArgs('A', 'B', 'C', 'D');
// 출력:
// First argument: A
// Remaining arguments: B, C, D
```

* 위의 예제에서, `collectArgs` 함수는 첫 번째 인수와 그 이후의 모든 인수들을 각각 분리하여 처리합니다.
* `...remaining`은 rest parameter로, 여러 개의 인수들을 `remaining`이라는 하나의 배열로 수집합니다.

