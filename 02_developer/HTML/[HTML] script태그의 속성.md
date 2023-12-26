## **`src`** : 외부 스크립트 참조

외부 JavaScript 파일의 URL을 지정하여 외부 스크립트 파일을 불러와 해당 페이지에서 사용할 수 있다.

```jsx
<script src="path/script.js"></script>
```
---
## `type` : 스크립트 타입

스크립트의 MIME 타입을 지정한다. 자바스크립트의 경우 기본값으로 “text/javascript”가 사용된다. 최신 브라우저에서는 `type` 속성을 생략할 수 있다.

- text/javascript: 자바스크립트(기본값)
- module: 자바스크립트 모듈로 import 문법을 사용할 수 있음
- application/ld+json: JSON-LD(데이터 연결용 JSON, 구조화된 데이터에 사용됨)
- text/babel: JSX(JavaScript XML, 리액트에서 사용됨)
- text/css: CSS(스타일 지정, `<style>` 태그 대신 사용 가능하지만 사용 지양)

```jsx
// text/javascript
<script type="text/javascript">
  console.log('Hello, World!');
</script>
```

```jsx
// module
<script type="module">
  import { hello } from './hello.js';
  hello();
</script>
```

```jsx
// application/ld+json
<script type="application/ld+json">
{
  "@context": "<https://schema.org>",
  "@type": "Organization",
  "name": "Example Company",
  "url": "<https://www.example.com>"
}
</script>
```

```jsx
// text/babel
<script type="text/babel">
  class App extends React.Component {
    render() {
      return <h1>Hello, World!</h1>;
    }
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
```

```jsx
// text/css
<script type="text/css">
  body {
    background-color: red;
  }
</script>
```
---
## `async` : 스크립트 비동기 실행

HTML파일의 파싱과 동시에(병렬적으로) 스크립트파일 다운로드를 시작한다. 스크립트파일의 다운로드가 끝나면 그 즉시 파싱 과정을 멈추고 스크립트를 처리한다.

```jsx
<script async src="path/script.js"></script>
```

## `defer` : 스크립트 지연 실행

async속성과 동일하게 HTML파일의 파싱과 동시에(병렬적으로) 스크립트파일 다운로드를 시작하지만, HTML파일의 파싱이 종료된 이후에 스크립트를 처리한다.

```jsx
<script defer src="path/script.js"></script>
```

![](https://i.imgur.com/INcgLTA.png)

```jsx
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Script async와 defer 비교예제</title>
    </head>
    <body>
        <h1>Script async와 defer 비교예제</h1>
        <p>스크립트 앞 콘텐츠</p>

        <script>
            document.addEventListener('DOMContentLoaded', () => alert('DOM 준비완료'));
        </script>

        <!-- defer: 페이지 생성을 막지 않음, DOM이 준비된 후에 실행되긴 하지만 DOMContentLoaded 이벤트 발생 전에 실행 -->
        <script src="long.js" defer></script>

        <!-- async: 페이지 생성을 막지 않음, 먼저 다운로드되면 실행됨(load-first order) -->
        <script src="short.js" async></script>

        <p>스크립트 뒤 콘텐츠</p>
    </body>
</html>
```
---
## `crossorigin` : Cross Origin 공유

현재 문서와 다른 호스트에서 스크립트를 불러올 때 해당 스크립트를 어떻게 다룰 것인지 설정하는 속성이며 사용할 수 있는 값으로는 `"anonymous"` 와 `"use-credentials"`가 있다.

- **`anonymous`** : 쿠키나 HTTP 인증 정보와 같은 인증 정보가 없이 요청이 전송되어 서버에서 사용자의 민감한 정보를 볼 수 없도록 보호하는 것
- **`use-credentials`** : 인증 정보가 포함된 요청을 전송하여 서버에서 사용자의 민감한 정보에 접근할 수 있도록 하는 것

```jsx
// index.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CORS 예제</title>
    </head>
    <body>
        <h1>CORS 예제</h1>
        <p>브라우저 콘솔창에서 스크립트 로드여부 확인하기</p>

        <script crossorigin="anonymous" src="<http://127.0.0.1:5500/anonymous.js>"></script>
        <script crossorigin="use-credentials" src="<https://www.example.com/credentials.js>"></script>

        <script>
            console.log('index.html의 스크립트 실행');
        </script>
    </body>
</html>
```

```jsx
// anonymous.js (같은 도메인)
console.log('anonymous.js의 스크립트 실행');
```

```jsx
// credentials.js (다른 도메인)
console.log('credentials.js의 스크립트 실행');
```

![](https://i.imgur.com/5jHO5E1.png)

**`anonymous.js`** 파일은 성공적으로 로드되고 실행되었지만 **`credentials.js`** 파일은 CORS 정책으로 인해 로드되지 않았다.

**`credentials.js`** 파일을 불러오는 script태그의 **`crossorigin`** 속성이 `use-credentials`로 설정되어 있기 때문이다.

---
## **`integrity`** : 서브리소스의 무결성 검사

서브리소스 무결성 (Subresource Integrity, SRI)를 검사하기 위한 목적으로 사용된다. `<script>` 태그나 `<link>` 태그에서 사용 할 수 있으며, 외부 스크립트나 스타일 시트 파일이 수정되었거나 조작된 경우를 감지하고 실행이나 적용을 막을 수 있다.

해시 알고리즘과 파일의 Base64 인코딩된 해시 값으로 구성되며 브라우저는 이 값을 사용하여 파일의 내용을 검증하고, 무결성 검사에 실패하면 해당 파일을 실행하거나 적용하지 않는다.

```jsx
<script src="<https://example.com/script.js>"
  crossorigin="anonymous"
  integrity="sha384-Base64EncodedHashValue">
</script>
```

위 예시의 "sha384-Base64EncodedHashValue" 부분은 스크립트 파일의 실제 해시 값으로 대체되어야 한다. 이 값은 해당 스크립트 파일의 내용이 변경되었을 때 자동으로 변경되며, 브라우저가 실행 전에 해당 해시 값과 일치하는지 확인한다.

- 지원하는 해시는 sha256, sha384, sha512이며 이 옵션은 IE는 적용되지 않는다.
- **`integrity`** 속성 사용 시 반드시 **`crossorigin`** 속성과 함께 사용해야 무결성 검사가 정상적으로 작동한다.