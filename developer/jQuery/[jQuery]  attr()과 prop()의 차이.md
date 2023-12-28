- attr() : HTML 속성 (Attribute) 취급
- prop() : javascript 프로퍼티 (Property) 취급

```jsx
// .html
<input type="checkbox" id="example" checked="checked">
```

```jsx
// attr()
var text = $("input[type=text]");
console.log(chk.attr("id"));		// example
console.log(chk.attr("type"));		// text
console.log(chk.attr("checked"));	// checked
```

```jsx
// prop()
var text = $("input[type=text]");
console.log(chk.prop("id"));		// example
console.log(chk.prop("type"));		// text
console.log(chk.prop("checked"));	// true
```

`attr()` 은 HTML 속성 값이 모두 String의 타입이지만 `prop()` 은 boolean, date, function 등으로 가져올 수 있다.

목적에 따라 다를 수 있지만 `prop()` 이 `attr()` 보다 약 2.5배 빠르다.

- `attr()` : HTML의 속성으로 사용하고싶은 경우
- `prop()` : Script로 수정된 요소의 값을 사용하고싶은 경우