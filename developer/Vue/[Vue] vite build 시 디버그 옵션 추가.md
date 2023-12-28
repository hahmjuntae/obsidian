vite build 디버그 옵션 추가 할 경우, 옵션은 ts파일로 설정하기 때문에 빌드 명령어 맨 뒤에 --debug를 추가해야한다.

```json
"build:client": "vite build --config vite.config.client.ts --debug"
```
