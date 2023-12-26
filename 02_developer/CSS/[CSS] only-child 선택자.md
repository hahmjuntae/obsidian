```css
.parent {
  .radio-group:only-child {
    // 원하는 스타일을 적용하지 않음 (다음 요소가 없을 때)
  }

  .radio-group:not(:only-child) {
    // 원하는 스타일 적용 (다음 요소가 있을 때)
  }
}
```
