##### :is()
- :is()는 여러 선택자를 그룹화하여 동일한 스타일을 적용할 수 있습니다.
```css
:is(h1, h2, h3) {
  font-family: 'Arial', sans-serif;
}
```

:##### not()
- :not()는 해당 선택자와 일치하지 않는 요소를 선택하게 합니다.
```css

p:not(.highlight) {
  color: grey;
}
```

##### :has()
- SCSS에서 :has()는 부모 요소가 특정 자식 요소를 가지고 있을 때 선택됩니다.
- 하지만, 이것은 CSS로 컴파일될 때 출력되지 않습니다. 주로 SCSS와 JavaScript 내에서 조건부 로직을 구현할 때 사용됩니다.
```scss
div:has(> p) {
  border: 1px solid black;
}
```

##### :where()
- :where()는 :is()와 유사하지만 선택자의 우선 순위(specificity)가 0으로 처리됩니다.
```css
:where(h1, h2.special, h3) {
  font-family: 'Arial', sans-serif;
}
```
