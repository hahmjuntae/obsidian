Vue 3의 slot은 하위 컴포넌트에서 상위 컴포넌트의 컨텐츠를 결정하거나 덮어쓸 수 있도록 해주는 기능이다.

1. **Default Slots**: 컴포넌트 태그 안의 기본 콘텐츠를 표현한다.
```html
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

2. **Named Slots**: 특정 이름을 가진 slot을 사용하여 컴포넌트 태그 안의 특정 위치에 콘텐츠를 배치한다.
```html
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

위의 named slot을 사용하는 컴포넌트를 사용할 때는 다음과 같이 사용할 수 있다.
```html
<MyComponent>
  <template #header>
    <h1>이곳은 헤더다.</h1>
  </template>

  <template #default>
    <p>이곳은 기본 슬롯이다. Named slot으로 명시하지 않은 부분은 모두 이곳에 위치한다.</p>
  </template>

  <template #footer>
    <p>이곳은 푸터다.</p>
  </template>
</MyComponent>
```

# **대체 컨텐츠[](https://ko.vuejs.org/guide/components/slots.html#fallback-content)**

슬롯에 대체(fallback) 컨텐츠를 지정하여, 컨텐츠가 제공되지 않을 때만 렌더링되도록 하는 것이 유용한 경우가 있다.

예를 들어 `<SubmitButton>` 컴포넌트에서
```html
<button type="submit">
  <slot></slot>
</button>
```

부모가 슬롯 컨텐츠를 제공하지 않은 경우, "제출" 텍스트가 `<button>` 내부에 렌더링되기를 원할 수 있다. “submit"을 대체 컨텐츠로 지정하려면 `<slot>` 태그 사이에 배치하면 된다.
```html
<button type="submit">
  <slot>
    Submit<!-- 대체 컨텐츠 -->
  </slot>
</button>
```

이제 부모 컴포넌트 `<SubmitButton>`을 사용하여 슬롯에 컨텐츠를 제공하지 않는다.
```html
<SubmitButton />
```

그러면 대체 컨텐츠로 “Submit"이 렌더링 된다.
```html
<button type="submit">Submit</button>
```

그러나 컨텐츠를 제공하는 경우에는
```html
<SubmitButton>Save</SubmitButton>
```

제공된 컨텐츠가 대신 렌더링 된다.
```html
<button type="submit">Save</button>
```