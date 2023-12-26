* Shadow DOM은 웹 컴포넌트의 핵심 기술 중 하나입니다.
* 웹 컴포넌트는 사용자 정의 요소, Shadow DOM, HTML 템플릿 및 HTML 임포트로 구성됩니다.
* Shadow DOM의 주요 목적은 스타일과 코드를 캡슐화하는 것입니다.

```js
class CustomElement extends HTMLElement {
  private shadowRoot: ShadowRoot;

  constructor() {
      super();

      // Shadow DOM을 연결합니다.
      this.shadowRoot = this.attachShadow({ mode: 'open' });

      // Shadow DOM 내용 설정
      this.shadowRoot.innerHTML = `
          <style>
              p {
                  color: blue;
              }
          </style>
          <p>This is inside the Shadow DOM!</p>
      `;
  }
}

// 사용자 정의 요소 등록
customElements.define('custom-element', CustomElement);
```

* 위의 예제는 간단한 사용자 정의 요소를 만들며, 이 요소는 Shadow DOM을 사용하여 내부 스타일과 내용을 캡슐화합니다.
* 이를 통해 페이지의 나머지 부분과 독립적으로 스타일과 코드를 관리할 수 있습니다.
* 'mode' 옵션에는 'open'과 'closed' 두 가지 값이 있습니다.
* 'open'은 외부에서 shadow root에 접근할 수 있음을 의미하고, 'closed'는 외부에서 shadow root에 접근할 수 없음을 의미합니다.
