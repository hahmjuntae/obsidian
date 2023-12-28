## 속성 상속의 기본 구조

### index.vue
```html
<template>
  <div class="fb__sample__guide">
    <h2>휴대폰 번호 input 테스트</h2>
  </div>

  <section>
    <fb-input-phone id="test" class="test" v-model:phone-number="phoneNumber" />
  </section>
</template>
```

### input-phone.vue
```jsx
// ✅ template 내의 모든 태그는 부모로부터 받은 속성을 상속받을 div태그 하나로 묶여있어야함
// <div v-bind="$attrs"> : 기본값
<template>
  <div v-bind="$attrs">
    <fb-dropdown
      class="fb__select"
      :options="selectOptions"
      :searchable="false"
      placeholder-text="번호선택"
      v-model="frontNumber"
    />
    <div class="fb__phone">{{ fullNumber }}</div>
  </div>
</template>

// ❌ 부모로부터 상속받을 속성이 적용될 태그나 컴포넌트가 명확하지않아 적용되지 않고 에러가 발생함
// traneous non-props attributes (id, class, data-id...) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.
<template>
  <fb-dropdown
    class="fb__select"
    :options="selectOptions"
    :searchable="false"
    placeholder-text="번호선택"
    v-model="frontNumber"
  />
  <div class="fb__phone">{{ fullNumber }}</div>
</template>
```

---
## 속성 상속을 제거하고 커스터마이징

```html
<script lang="ts">
  export default {
    inheritAttrs: false, // 속성 상속을 받지 않는 옵션
  };
</script>
```

```ts
import { useAttrs } from 'vue';

export default function exampleComposable() {
  const attrs = useAttrs(); // 상속받은 속성들을 사용하기

  // class attrs
  const classAttrs = computed(() => {
    if (attrs.class) return { class: attrs.class };
    else return {};
  });

  // class 속성을 제외한 기능적인 속성들
  const functionalAttrs = computed(() => {
    if (attrs.class) return { ...attrs, class: '' };
    else return attrs;
  });

  return {
    classAttrs,
    functionalAttrs,
  };
}
```

- `useAttrs()` 로 부모 컴포넌트로부터 상속받은 속성을 변수에 담아 새로운 속성을 커스텀으로 생성한다. 
- 위 코드에서는 `classAttrs`, `functionalAttrs` 가 새로 생성된 커스텀 속성이다

```html
<template>
  <div class="fb__dropdown" v-bind="classAttrs">
    <multiselect v-bind="functionalAttrs" />
  </div>
</template>
```

- 자식 컴포넌트에서 `v-bind`를 통해 커스텀속성을 적용한다.