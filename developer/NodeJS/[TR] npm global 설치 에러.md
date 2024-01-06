## 🔥 문제
`Error: EACCES: permission denied`

노드 패키지를 글로벌로 설치 할 때 권한 문제 발생

```zsh
/usr/local/bin/pacakge -> /usr/local/lib/node_modules/pacakge/bin/pacakge

> pacakge@4.13.0 install /usr/local/lib/node_modules/pacakge
> node scripts/install.js

Unable to save binary /usr/local/lib/node_modules/pacakge/vendor/linux-x64-72 : Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/pacakge/vendor'
    at Object.mkdirSync (fs.js:823:3)
    at sync (/usr/local/lib/node_modules/pacakge/node_modules/mkdirp/index.js:71:13)
    at Function.sync (/usr/local/lib/node_modules/pacakge/node_modules/mkdirp/index.js:77:24)
    at checkAndDownloadBinary (/usr/local/lib/node_modules/pacakge/scripts/install.js:114:11)
    at Object.<anonymous> (/usr/local/lib/node_modules/pacakge/scripts/install.js:157:1)
    at Module._compile (internal/modules/cjs/loader.js:959:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)
    at Module.load (internal/modules/cjs/loader.js:815:32)
    at Function.Module._load (internal/modules/cjs/loader.js:727:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1047:10) {
  errno: -13,
  syscall: 'mkdir',
  code: 'EACCES',
  path: '/usr/local/lib/node_modules/pacakge/vendor'
}
```

## ⚓ 원인
-g 옵션으로 global 설치할 때에만 발생하는 권한 문제인 것 같다.

## 💡 해결방안

루트 경로에 npm global 패키지용 디렉토리를 생성한다.
```zsh
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```

shell의 profile 파일을 vim에디터로 연다.
```zsh
vi ~/.profile
```

.profile 제일 하단에 다음 코드를 추가한다.
```zsh
export PATH=~/.npm-global/bin:$PATH
```

저장 후 변경된 프로필 내용을 적용한다.
```zsh
source ~/.profile
```

나는 zsh 쉘을 사용하고 .zshrc 설정파일을 별도로 가지고 있기 때문에 .zshrc파일 맨 아래에도 추가하여 zsh가 첫 실행 시 프로필을 적용하도록 한다.
```zsh
#.zshrc
...
source ~/.profile
...
```

## 🔗 참고
[https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)


