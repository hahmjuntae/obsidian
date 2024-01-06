---
tistoryBlogName: kyledev
tistoryTitle: "[CSS] Edge와 IE의 input 아이콘 삭제"
tistoryTags: css,css3,ms-clear,ms-reveal
tistoryVisibility: "3"
tistoryCategory: "1110782"
tistoryPostId: "247"
tistoryPostUrl: https://kyledev.tistory.com/247
---
## Microsoft Edge 및 IE의 특별한 입력 필드 아이콘 숨기기

Microsoft Edge 및 이전 버전의 Internet Explorer 브라우저는 사용자 편의성을 위해 텍스트 및 비밀번호 입력 필드에 특별한 아이콘을 기본적으로 제공한다. 하지만 때로는 이러한 아이콘이 디자인이나 사용성 측면에서 방해가 될 수 있다. 아래에는 이 두 아이콘을 숨기는 방법이 설명되어 있다.

### -ms-clear 아이콘 숨기기

`-ms-clear` 아이콘은 텍스트 입력 필드(`<input type="text">`)에 문자가 입력되었을 때 나타나며, 입력된 텍스트를 한 번에 지울 수 있는 'X' 아이콘을 표시한다. 이 아이콘을 숨기려면 다음 CSS 코드를 사용한다.

```css
input::-ms-clear {
	display: none;
}
```

### -ms-reveal 아이콘 숨기기

`-ms-reveal` 아이콘은 비밀번호 입력 필드(`<input type="password">`)에 문자가 입력되었을 때 나타나며, 비밀번호를 숨기거나 표시할 수 있는 '눈' 아이콘을 표시한다. 이 아이콘을 숨기려면 다음 CSS 코드를 사용한다.

```css
input[type="password"]::-ms-reveal {
	display: none;
}
```

### 두 아이콘 모두 숨기기

텍스트 및 비밀번호 입력 필드에서 `-ms-clear`와 `-ms-reveal` 아이콘을 모두 숨기고 싶다면, 다음과 같이 CSS 코드를 작성하면 된다.

```css
input[type="text"]::-ms-clear,
input[type="password"]::-ms-reveal {
	display: none;
}
```

이 설정들을 프로젝트의 스타일시트에 추가하면, Microsoft Edge 및 Internet Explorer 브라우저에서 해당 아이콘이 더 이상 표시되지 않게 된다. 