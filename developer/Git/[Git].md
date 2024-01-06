## 🔥 문제
새로운 맥을 구입 한 후 깃에서 클론 하려는데 권한 에러가 발생했다.

```
Permission denied (publicly).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```
## ⚓ 원인
PC를 변경할 때마다 등록되지 않은 새로운 기기이므로 SSH키를 발급받아서 설정해야하는 당연한 상황이다.

## 💡 해결방안
아래 명령어를 입력하면 SSH 키를 생성하는 과정이 시작된다. RSA 알고리즘을 사용하여 새로운 SSH 키 쌍(공개키와 비밀키)을 생성하게된다.
```zsh
ssh-keygen -t rsa -C "깃 이메일주소"
```

Generating public/private rsa key pair.

Enter file in which to save the key (/Users/+PIH«UH"i/.ssh/id_rsa):



## 🔗 참고