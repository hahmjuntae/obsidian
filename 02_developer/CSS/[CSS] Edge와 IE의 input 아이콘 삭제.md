Microsoft Edge 및 이전 버전의 Internet Explorer 브라우저에서는 텍스트 입력 필드와 비밀번호 입력 필드에 대해 기본적으로 두 가지 특별한 아이콘을 제공한다

### **-ms-clear**
- 텍스트 입력 필드 (`<input type="text">`)에 문자가 입력되었을 때 나타난다.
- 입력된 텍스트를 한 번에 지울 수 있는 'X' 아이콘을 표시한다.
- 아래의 코드로 숨김처리 할 수 있다.
```css
input::-ms-clear {
	display: none;
}
```

### **-ms-reveal**
- 비밀번호 입력 필드 (`<input type="password">`)에 문자가 입력되었을 때 나타난다.
- 비밀번호를 숨기거나 표시할 수 있는 '눈' 아이콘을 표시한다.
- 아래의 코드로 숨김처리 할 수 있다.
```css
input[type="password"]::-ms-reveal {
	display: none;
}
```

### **두 아이콘 모두 숨기기**
```css
input[type="text"]::-ms-clear,
input[type="password"]::-ms-reveal {
	display: none;
}
```

이 두 아이콘은 사용자 편의성을 위해 제공되지만, 디자인이나 사용성 관점에서 원치 않을 수 있다.  위 코드를 프로젝트의 스타일시트에 추가하면, 해당 브라우저에서 두 아이콘이 모두 표시되지 않게 된다.