Vue 3에서 `watch`와 `watchEffect`는 반응형 데이터 변화를 감지하고 대응하는 데 사용된다. 이들은 데이터의 변화에 따라 부수 효과를 실행하는 핵심 기능이다. `watch`는 보다 세밀한 제어를 제공하는 반면, `watchEffect`는 자동적인 의존성 추적을 제공한다.

## watch
`watch` 함수는 하나 이상의 반응형 참조나 getter 함수를 관찰하고, 그 값이 변할 때마다 지정된 콜백 함수를 실행한다.

```vue
<script setup>
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`count가 ${oldValue}에서 ${newValue}로 변경되었다.`);
});
</script>
```

---
## watchEffect
`watchEffect`는 선언적이지 않으며, 함수 내부에서 사용된 반응형 상태에 자동으로 의존한다. 이 상태가 변경될 때마다 함수가 재실행된다.

```vue
<script setup>
import { ref, watchEffect } from 'vue';

const message = ref('안녕하세요');

watchEffect(() => {
  console.log(`메시지가 변경되었다: ${message.value}`);
});
</script>
```
## 결론
`watch`와 `watchEffect`는 Vue 애플리케이션에서 중요한 역할을 한다. `watch`는 세밀한 데이터 관찰과 추가 옵션을 통한 유연한 설정을 제공하며, `watchEffect`는 코드를 간결하게 유지하면서 반응형 상태의 자동 추적을 가능하게 한다. 이러한 기능을 통해 Vue의 반응형 시스템을 효과적으로 활용할 수 있다.