```html
<!-- Vue 2 -->
<!-- 모델 데이터 전송과 업데이트 함수를 개별로 작성해야 했음 -->
<ChildComponent :modelValue="pageTitle" @update:modelValue="pageTitle = $event" />

<!-- Vue 3 -->
<!-- v-model 하나로 전송과 업데이트를 한 번에 가능 -->
<ChildComponent v-model="pageTitle" />
```

---
## v-model 예제

```html
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent v-model="parentMessage" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const parentMessage = ref('Hello from parent');
</script>
```

```html
<!-- ChildComponent.vue -->
<template>
  <div>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: String,
});
</script>
```

`ChildComponent`는 `modelValue`라는 `props`를 받아서 input 요소에 바인딩한다. 사용자가 input 요소에 무언가를 입력하면 `input`이벤트가 발생하고, 이 이벤트 핸들러에서는 'update:modelValue' 이벤트를 발생시킨다. 이 이벤트에는 새로 입력된 값(`$event.target.value`)이 인자로 전달된다.

`ParentComponent`에서는 `v-model="parentMessage"`를 통해 `ChildComponent`와 `parentMessage`를 양방향으로 바인딩한다. 이것은 `:modelValue="parentMessage"`와 `@update:modelValue="parentMessage = $event"`를 줄인 표현이다. 즉, `ChildComponent`에서 'update:modelValue' 이벤트가 발생하면, 이 이벤트의 인자가 `parentMessage`에 할당된다.

이렇게 하면 `ChildComponent`에서 발생한 사용자 입력이 `ParentComponent`의 `parentMessage`까지 반영되어 양방향 데이터 바인딩이 완성된다.

이 방법은 `props`를 통해 전달받은 값을 직접 변경하지 않고, 부모 컴포넌트에 변경 사실을 알리는 방법으로, Vue.js의 단방향 데이터 흐름을 유지하면서도 필요한 상황에 따라 데이터를 업데이트하는 데 사용된다.

---
### **`v-model:Argument`**

데이터 모델 이름을 변경해서 보내기 위해 아래와 같이 사용 가능

```html
<!-- Vue 2 -->
<!-- 데이터의 이름을 지정 하기 위해서 :propName과 @update:propName 문법 사용-->
<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />

<!-- Vue 3 -->
<!-- v-model:propName 문법으로 간단하게 사용 가능 -->
<ChildComponent v-model:title="pageTitle" />
```

![](https://i.imgur.com/cK7T6Zu.png)
