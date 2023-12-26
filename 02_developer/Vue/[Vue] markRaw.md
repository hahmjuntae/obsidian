Vue 3의 Composition API에 포함된 `markRaw` 기능은 특정 객체를 반응형 시스템에서 제외하는 데 사용된다. 이 기능은 Vue의 반응형 시스템이 특정 객체를 추적하는 것을 방지하며, 때로는 성능 최적화나 특정 라이브러리와의 통합을 위해 필요하다.

`markRaw`는 Vue가 제공하는 함수로, 이 함수로 객체를 감싸면 해당 객체는 Vue의 반응형 시스템에 의해 추적되지 않는다. 즉, 객체에 대한 변경사항이 발생해도, Vue는 이를 감지하지 않으며, 따라서 DOM 업데이트나 다른 반응형 동작을 트리거하지 않는다.

## 기본 사용법
`markRaw`를 사용하는 것은 매우 간단하다. 반응형 시스템에서 제외하고자 하는 객체에 `markRaw` 함수를 적용하면 된다. 이렇게 처리된 객체는 Vue의 반응형 시스템에 의해 추적되지 않으므로, 이 객체에 대한 변경사항은 Vue의 반응형 시스템에 영향을 주지 않는다.

## 사용 사례
`markRaw`는 주로 다음과 같은 경우에 사용된다:

- 성능 최적화: 크고 복잡한 객체나, 빈번하게 변경되는 객체에 대해 반응형 시스템을 사용하는 것이 성능에 부정적인 영향을 미칠 때.
- 외부 라이브러리와의 통합: 특정 외부 객체나 클래스 인스턴스가 Vue의 반응형 시스템과 호환되지 않을 때.

## 예시 코드
```vue
<script setup>
import { markRaw } from 'vue';

const externalLibraryObject = markRaw(new SomeExternalLibraryClass());

function doSomething() {
// externalLibraryObject 변경
	externalLibraryObject.someMethod();
}
</script>

<template>
	<button @click="doSomething">Do Something</button>
</template>
```

이 코드에서, `externalLibraryObject`는 `SomeExternalLibraryClass`의 인스턴스로, `markRaw`를 사용하여 Vue의 반응형 시스템에서 제외된다. 따라서 `externalLibraryObject`에 대한 변경사항이 발생해도 Vue는 이를 추적하지 않는다.

## 결론
`markRaw`는 Vue의 반응형 시스템에서 특정 객체를 제외할 필요가 있을 때 매우 유용하다. 이를 통해 성능을 최적화하거나, Vue 외부의 라이브러리나 시스템과의 통합을 원활하게 할 수 있다. `markRaw`를 사용함으로써 개발자는 Vue의 반응형 시스템을 보다 유연하게 운영할 수 있다.