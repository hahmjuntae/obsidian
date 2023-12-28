 * Vue에서 props의 기본값으로 Object나 Array를 사용할 때는 주의가 필요합니다.
 * 같은 객체 또는 배열 참조가 모든 컴포넌트 인스턴스에 공유될 위험이 있기 때문에,
 * Object나 Array 타입의 props의 기본값을 제공할 때는 함수를 사용해야 합니다.

```ts
import { PropType } from 'vue';

export default {
  props: {
	someData: {
	  type: String,
	  default: '', // 일반 타입의 기본값 제공
	},
    someArray: {
      type: Array as PropType<string[]>,
      default: () => ([]), // 함수를 사용하여 기본값 제공
    },
    someObject: {
      type: Object as PropType<{ [key: string]: any }>,
      default: () => ({}) // 함수를 사용하여 기본값 제공
    },
  }
};
```

 * 위의 예제에서, `someArray`와 `someObject` props는 기본값을 제공하기 위해 함수를 사용합니다.
 * 이렇게 함으로써 각 컴포넌트 인스턴스는 독립적인 배열 또는 객체를 받게 됩니다.
