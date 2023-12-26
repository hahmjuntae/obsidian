Vue 3의 Composition API에 있는 `shallowRef`는 `ref`와 유사하지만, 주된 차이점은 `shallowRef`가 제공하는 반응성이 훨씬 얕다는 점이다. `shallowRef`는 주어진 값에 대해서만 반응형을 제공하며, 값이 객체인 경우 그 객체의 속성까지는 반응형으로 만들지 않는다.

## 기본 사용법
`shallowRef`를 사용할 때, 객체나 배열을 전달하면 Vue는 해당 객체의 최상위 레벨에만 반응형을 적용한다. 이 말은, 객체의 속성이나 배열의 요소가 변경되어도, Vue는 이를 감지하지 못한다는 의미다. 하지만 객체 자체가 다른 객체로 교체되면 이 변경은 감지된다.

## 템플릿에서의 사용
`shallowRef`는 큰 객체나 배열을 다룰 때 유용하다. 만약 객체의 내부 속성들이 변경될 일이 거의 없거나 전혀 없다면, `shallowRef`를 사용하여 성능을 향상시킬 수 있다. 이는 Vue가 객체의 내부 속성까지 추적하는 데 드는 비용을 절감해 준다.

```vue
<script setup>
import { shallowRef } from 'vue';

const userProfile = shallowRef({ name: 'John', age: 30 });

function updateUserProfile(newProfile) {
	userProfile.value = newProfile;
}
</script>

<template>
	<div>
		<p>Name: {{ userProfile.name }}</p>
		<p>Age: {{ userProfile.age }}</p>
		<button
			@click="updateUserProfile({ name: 'Jane', age: 25 })"
	  >Update Profile
		</button>
	</div>
</template>
```

이 코드에서, `userProfile`는 `shallowRef`를 사용하여 생성된다. `updateUserProfile` 함수를 사용하여 `userProfile`의 값을 전체적으로 교체하면, 이 변경사항은 감지되고 반영된다. 하지만, `userProfile.value.name` 같은 개별 속성을 직접 변경한다면, 이러한 변경은 감지되지 않는다.

## 결론
`shallowRef`는 객체나 배열의 내부 속성들에 대한 반응성이 필요 없을 때 유용하다. 이를 통해 Vue 애플리케이션의 성능을 향상시킬 수 있으며, 큰 데이터 구조를 효율적으로 다룰 수 있다.