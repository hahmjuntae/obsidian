---
tistoryBlogName: kyledev
tistoryTitle: "[Vue] keep-alive의 속성"
tistoryTags: vue,vue3,keepalive,include,exclude
tistoryVisibility: "3"
tistoryCategory: "1179347"
tistorySkipModal: true
tistoryPostId: "253"
tistoryPostUrl: https://kyledev.tistory.com/253
---
## `include`와 `exclude` 속성
Vue3의 `keep-alive` 컴포넌트는 `include`와 `exclude` 속성을 사용하여 특정 컴포넌트만 캐싱하거나 캐싱에서 제외할 수 있게 해준다.
이러한 속성들은 `keep-alive`의 유연성을 증가시키며, 성능 최적화와 메모리 사용 관리에 도움을 준다.

### include
- 이 속성을 사용하면, 캐싱할 컴포넌트를 지정할 수 있다.
- `include`에 지정된 컴포넌트 이름만 `keep-alive`에 의해 캐싱된다.
- 이는 문자열, 정규 표현식, 또는 컴포넌트 이름의 배열로 지정할 수 있다.

### exclude
- 반대로, `exclude` 속성을 사용하면 특정 컴포넌트를 캐싱에서 제외할 수 있다.
- `exclude`에 지정된 컴포넌트는 `keep-alive`에 의해 캐싱되지 않는다.
- 마찬가지로 문자열, 정규 표현식, 또는 컴포넌트 이름의 배열로 지정할 수 있다.

### 사용 사례
- 메모리 사용을 줄이기 위해 일부 컴포넌트만 캐싱하고 싶을 때.
- 특정 컴포넌트가 캐싱되면 부적절한 상황을 피하기 위해 특정 컴포넌트를 캐싱에서 제외하고 싶을 때.

### 예시 코드
```vue
<template>
  <keep-alive :include="includedComponents" :exclude="excludedComponents">
    <ComponentA v-if="currentTab === 'A'" />
    <ComponentB v-if="currentTab === 'B'" />
    <ComponentC v-if="currentTab === 'C'" />
  </keep-alive>
</template>

<script setup>
import { ref } from 'vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import ComponentC from './ComponentC.vue';

const currentTab = ref('A');
const includedComponents = ['ComponentA', 'ComponentB']; // ComponentA와 ComponentB만 캐싱
const excludedComponents = 'ComponentC'; // ComponentC는 캐싱에서 제외
</script>
```

이 코드에서 `keep-alive`는 `include`와 `exclude` 속성을 사용하여 `ComponentA`와 `ComponentB`는 캐싱하지만, `ComponentC`는 캐싱하지 않는다. 이를 통해 성능과 메모리 사용을 최적화할 수 있다.

### 결론
`include`와 `exclude` 속성을 사용하는 `keep-alive`는 Vue 애플리케이션에서 성능과 메모리 사용을 더 잘 관리할 수 있게 해준다.
==이를 통해 필요한 컴포넌트만 선택적으로 캐싱할 수 있으며, 애플리케이션의 성능을 효율적으로 향상시킬 수 있다.==
