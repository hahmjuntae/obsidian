## computed
Vue 3의 `computed`는 반응형 시스템의 핵심 기능 중 하나로, 계산된 속성을 정의하는 데 사용된다. `computed`는 종속된 반응형 데이터에 기반하여 값을 계산하고, 이 값은 종속된 데이터가 변경될 때만 다시 계산된다.

`computed` 속성은 데이터를 기반으로 한 계산을 수행한다. 이 계산은 의존하는 데이터가 변경될 때마다 자동으로 다시 수행된다. `computed`는 캐싱된 값을 반환하여, 의존하는 데이터가 변경되지 않았다면 다시 계산을 수행하지 않고 이전에 계산된 값을 사용한다. 이는 반복적인 계산에 대한 성능 최적화를 제공한다.

## 사용 사례
`computed` 속성은 다음과 같은 경우에 유용하다.
- 복잡한 계산 로직이 필요한 경우, 코드의 가독성을 높이고 재사용성을 개선하기 위해.
- 데이터가 변경될 때마다 계산을 수행해야 하지만, 해당 계산이 비용이 많이 드는 경우, 성능을 최적화하기 위해.

## 예시 코드
```vue
<script setup>
import { ref, computed } from 'vue';

const number = ref(0);

const squaredNumber = computed(() => {
  return number.value * number.value;
});
</script>

<template>
  <div>
    <input v-model.number="number" type="number" />
    <p>Number: {{ number }}</p>
    <p>Squared Number: {{ squaredNumber }}</p>
  </div>
</template>

```

이 코드에서 `squaredNumber`는 `number`의 값에 따라 계산된 속성이다. `number` 값이 변경될 때마다 `squaredNumber`도 자동으로 업데이트된다.

## 결론
`computed`는 Vue 애플리케이션에서 반응형 데이터를 기반으로 하는 계산을 효율적으로 수행할 수 있게 해준다. 캐싱 기능 덕분에 성능이 최적화되며, 코드의 가독성과 유지 보수성도 향상된다. `computed` 속성은 복잡한 데이터 연산이 필요할 때 매우 유용하다.

---
## computed의 기능 및 get과 set 분리

`computed`는 의존하는 반응형 데이터에 기반하여 값을 계산하고, 종속된 데이터가 변경될 때만 다시 계산한다. 기본적으로 `computed`는 getter 함수만을 갖지만, 필요에 따라 setter 함수를 추가하여 계산된 속성의 쓰기 동작을 사용자 정의할 수 있다.
## 사용 사례
`computed`의 setter 함수는 주로 다음과 같은 경우에 사용된다.
- 계산된 속성을 기반으로 다른 데이터를 업데이트해야 할 때.
- 계산된 속성에 값을 할당할 때 내부적으로 다른 데이터를 변경해야 할 때.

## 예시 코드
```vue
<script setup>
import { ref, computed } from 'vue';

const firstName = ref('John');
const lastName = ref('Doe');

// 계산된 속성으로 fullName을 정의한다.
const fullName = computed({
  // getter 함수: firstName과 lastName을 결합한다.
  get() {
    return `${firstName.value} ${lastName.value}`;
  },
  // setter 함수: fullName을 설정할 때 firstName과 lastName을 업데이트한다.
  set(newValue) {
    const names = newValue.split(' ');
    firstName.value = names[0];
    lastName.value = names[1] || '';
  }
});
</script>

<template>
  <div>
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full Name: {{ fullName }}</p>
    <!-- fullName을 수정하면 setter 함수가 호출된다. -->
    <input v-model="fullName" placeholder="Full Name" />
  </div>
</template>

```

이 코드에서 `fullName`은 `firstName`과 `lastName`에 의존하는 계산된 속성이다. 사용자가 `fullName`을 업데이트하면 setter 함수가 호출되어 `firstName`과 `lastName`이 적절히 업데이트된다.

## 결론
`computed`에서 getter와 setter를 분리하여 사용하면, 계산된 속성의 읽기 및 쓰기 동작을 모두 효과적으로 제어할 수 있다. 이를 통해 Vue 애플리케이션에서 복잡한 데이터 연산을 더욱 유연하게 관리할 수 있다.