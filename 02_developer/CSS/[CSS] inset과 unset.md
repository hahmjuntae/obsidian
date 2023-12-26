##### inset
- 이 키워드는 주로 box-shadow 및 outline와 함께 사용되어 그림자 또는 테두리가 요소 내부로 들어가게 하는 것을 의미합니다.
- 일반적으로 box-shadow의 경우, 그림자는 요소의 외부에 위치합니다. 하지만 inset 키워드를 사용하면 그림자가 요소의 내부에 위치하게 됩니다.

```css
.inner-shadow {
  box-shadow: inset 0 0 10px #000; /* 요소의 내부에 10픽셀의 검은색 그림자를 추가 */
}
```
##### unset
- 이 키워드는 CSS 속성 값을 그 속성의 초기값 또는 상속값으로 재설정하는데 사용됩니다.
- unset의 동작 방식은 다음과 같습니다.
	  - 해당 속성이 상속 가능한 속성이면 (예: color, font-size 등) 그 속성의 값은 inherit처럼 동작합니다.
	  - 해당 속성이 상속 불가능한 속성이면 (예: margin, padding, background-color 등) 그 속성의 값은 initial처럼 동작합니다.
- 만약 .reset-margin이 부모 요소로부터 margin을 상속받는다면, unset은 inherit처럼 동작하여 부모의 margin 값을 상속받습니다.
- 그렇지 않다면, unset은 initial처럼 동작하여 margin의 초기값을 사용합니다.

```css
.reset-margin {
  margin: unset;
}
```
