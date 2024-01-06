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

그럼 아래와 같이 문구가 나오고 엔터를 입력하면 다음 단계로 넘어간다.
```
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/hahmjuntae/.ssh/id_rsa):
```

git 명령어를 입력할 때 사용할 비밀번호를 두번 입력한다.
```
Enter passphrase (empty for no passphrase): 
Enter same passphrase again:
```

아래와 같은 문구가 나오면 생성이 완료된다.
```
Your identification has been saved in /Users/hahmjuntae/.ssh/id_rsa.
Your public key has been saved in /Users/hahmjuntae/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256: xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
The key's randomart image is:
+---[RSA 2048] ----+
```

설명을 보면 아래 경로에 SSH키가 저장되어있다고 나와있다.
```
Your public key has been saved in /Users/hahmjuntae/.ssh/id_rsa.pub.
```

cd로 접근하려하면 파일이나 디렉토리가 아니여서 이동을 못한다.

그래서 cat 명령어로 직접 파일을 열게 되면  
```
cat ~/.ssh/id_rsa.pub
```

ssh-rsa 로 시작하고, 문자가 막 복잡하게 나열된 시퀀스가 나오게됩니다. :) 캡쳐는 안할게요. 

출처: [https://zeddios.tistory.com/120](https://zeddios.tistory.com/120) [ZeddiOS:티스토리]
## 🔗 참고