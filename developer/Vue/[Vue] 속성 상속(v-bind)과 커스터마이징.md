---
tistoryBlogName: kyledev
tistoryTitle: "[Vue] 속성 상속(v-bind)과 커스터마이징"
tistoryTags: vue3,v-bind,useattrs,속성 상속
tistoryVisibility: "3"
tistoryCategory: "1179347"
tistoryPostId: "249"
tistoryPostUrl: https://kyledev.tistory.com/249
---
## Vue 컴포넌트에서의 속성 상속과 커스터마이징

Vue에서는 컴포넌트 간 속성 상속을 통해 부모 컴포넌트에서 정의한 속성을 자식 컴포넌트에게 전달할 수 있다. 이 과정에서 몇 가지 기본 규칙과 커스터마이징 방법을 알아볼 것이다.

### 속성 상속의 기본 구조

속성 상속은 부모 컴포넌트에서 자식 컴포넌트로 속성을 전달하는 과정이다. 예를 들어, `index.vue`에서 `fb-input-phone` 컴포넌트로 속성을 전달하는 구조는 다음과 같다.

```html
<!-- index.vue -->
<template>
  <div class="fb__sample__guide">
    <h2>휴대폰 번호 input 테스트</h2>
  </div>

  <section>
    <fb-input-phone id="test" class="test" v-model:phone-number="phoneNumber" />
  </section>
</template>
```

`input-phone.vue` 컴포넌트에서는 `$attrs` 객체를 사용해 부모로부터 전달받은 모든 속성을 상속받을 수 있다. 이는 다음과 같이 구현할 수 있다.

```jsx
<!-- input-phone.vue -->
<template>
  <div v-bind="$attrs">
    <!-- ... 컴포넌트 내용 ... -->
  </div>
</template>
```

### 속성 상속을 제거하고 커스터마이징

모든 속성을 상속받는 것이 아니라 일부 속성만 선택적으로 상속받거나 커스터마이즈할 수도 있다. 이를 위해 `inheritAttrs: false` 옵션과 `useAttrs` 함수를 활용한다.

```html
<script lang="ts">
  export default {
    inheritAttrs: false, // 속성 상속을 받지 않음
  };
</script>
```

속성을 커스터마이즈하기 위해 `useAttrs()`를 사용해 상속받은 속성들을 변수에 담고 새로운 속성을 생성한다.

```ts
// ... Typescript 코드 ...
```

이제 새로운 속성을 자식 컴포넌트에 적용할 수 있다.

```html
<template>
  <div class="fb__dropdown" v-bind="classAttrs">
    <multiselect v-bind="functionalAttrs" />
  </div>
</template>
```

이를 통해 Vue에서는 간결하고 유연한 컴포넌트 속성 관리가 가능해진다. 속성 상속을 통해 코드의 재사용성과 유지 보수성을 높이며, 필요에 따라 커스텀 속성을 정의하여 더욱 세밀한 컴포넌트 제어를 할 수 있다.