---
tistoryBlogName: kyledev
tistoryTitle: "[Vue] 이벤트 핸들러 조건처리"
tistoryTags: vue,vue3,@click,directive
tistoryVisibility: "3"
tistoryCategory: "1179347"
tistorySkipModal: true
tistoryPostId: "250"
tistoryPostUrl: https://kyledev.tistory.com/250
---
## Vue.js에서 이벤트 핸들링 개선하기

Vue.js를 사용할 때, 종종 이벤트 핸들링을 위해 `@click` 같은 디렉티브를 사용한다.
조건에 따라 이벤트를 처리하는 방법을 살펴보자.

### 기존 코드
```vue
<!-- BEFORE -->
<div @click="isCheckNeeded ? checkNav : null" />
```

이 코드는 `isCheckNeeded`가 참일 때만 `checkNav` 함수를 호출하려고 시도한다.
하지만, 여기서 `checkNav`는 호출되지 않고 참조만 전달된다. 함수가 실행되지 않으므로 예상한 동작을 하지 않는다.

### 개선된 코드

이를 개선하기 위해, 함수 호출을 명확하게 하거나 다른 방식을 사용할 수 있다.
```vue
<!-- AFTER -->
<div @click="isCheckNeeded ? checkNav() : null" />
```
위 코드는 조건이 참일 때 `checkNav()`를 호출한다. 함수가 실행됨으로써 원하는 동작을 얻을 수 있다.

또는 다음과 같이 논리 연산자를 사용하여 코드를 더 간결하게 만들 수 있다.
```vue
<!-- OR -->
<div @click="isCheckNeeded && checkNav()" />
```

이 코드는 `isCheckNeeded`가 참일 경우에만 `checkNav()`를 실행한다. 더 짧고 읽기 쉬운 코드를 제공하면서도 목표를 달성한다.

이런 식으로 Vue.js에서의 이벤트 핸들링을 개선하면, 코드의 가독성을 높이고 의도치 않은 버그를 줄일 수 있다.