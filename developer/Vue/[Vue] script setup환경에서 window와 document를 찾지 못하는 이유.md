Vue 3의 Composition API와 함께 `script setup`을 사용하면 `window`와 `document` 객체에 접근할 수 없는 문제가 발생할 수 있다.

이 문제는 주로 서버 사이드 렌더링 (SSR) 환경에서 나타나는데, 이 환경에서는 `window`와 `document` 객체가 정의되어 있지 않기 때문이다.

---
### **1. SSR 환경에서의 제한**:
Vue와 다른 프론트엔드 프레임워크는 서버에서 렌더링할 수 있다 (예: Nuxt.js, Vue Server Renderer). 서버에서 실행될 때, `window`와 `document`와 같은 브라우저 전용 객체는 사용할 수 없다. 이러한 객체를 서버에서 접근하려고 시도하면 오류가 발생한다.

###  **2. 코드의 순서와 실행 시점**
`script setup` 내에서 코드는 컴포넌트 인스턴스가 생성되기 전에 실행된다. 따라서 코드가 브라우저에서 실행되더라도, `window`나 `document`에 직접적으로 접근하려면 라이프사이클 훅 내에서 해야 한다.

### **3. 해결 방법**
- **브라우저 환경 확인**
  : 전역 객체의 존재 여부를 확인하여 코드가 브라우저에서 실행되는지 확인할 수 있다.
```javascript
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	// 브라우저에서 실행되는 코드
}
```

-  **라이프사이클 훅 사용**
  : `onMounted` 또는 다른 라이프사이클 훅 내에서 브라우저 전용 코드를 실행하면, 해당 코드는 클라이언트 측에서만 실행된다.

```javascript
import { onMounted } from 'vue';

onMounted(() => {
	// 브라우저에서만 실행되는 코드
});
```

---
결론적으로, `window`와 `document`는 브라우저 전용 객체이므로, SSR 환경이나 컴포넌트의 초기 실행 시점에서는 접근할 수 없다. 이를 고려하여 코드를 작성하거나 적절한 라이프사이클 훅 내에서 접근해야 한다.
