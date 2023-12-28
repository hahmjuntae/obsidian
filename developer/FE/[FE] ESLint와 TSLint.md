# package.json
```json
{
  script:{
    "lint": "eslint src/**/*.{vue,ts}",
    "tslint": "npx tsc --noEmit"
  }
}
```

## npm run lint
eslint 검사 후 로그만 출력, fix는 안됨

## npm run tslint
ts파일 에러만 검사 후 출력하며, 컴파일은 진행하지 않음
