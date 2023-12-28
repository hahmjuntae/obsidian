# escape
* escape 함수는 비-ASCII 문자를 이스케이프 문자열로 변환합니다.
* 예를 들어, '안녕'은 '%uC548%uB155'로 변환됩니다.

* 주의: 이 함수는 현대 JavaScript에서 권장되지 않습니다.
* 대신 **encodeURIComponent**나 **encodeURI**를 사용해야 합니다.

```ts
/**
 * @param str 이스케이프할 문자열
 * @returns 이스케이프된 문자열
 */
function escapeString(str: string): string {
    return escape(str);
}
```

# unescape
 * unescape 함수는 이스케이프된 문자열을 원래의 문자열로 되돌립니다.
 * 예를 들어, '%uC548%uB155'은 '안녕'으로 변환됩니다.
 
 * 주의: 이 함수는 현대 JavaScript에서 권장되지 않습니다.
 * 대신 **decodeURIComponent**나 **decodeURI**를 사용해야 합니다.
 
```ts
/**
 * @param str 이스케이프 해제할 문자열
 * @returns 이스케이프 해제된 문자열
 */
function unescapeString(str: string): string {
    return unescape(str);
}
```