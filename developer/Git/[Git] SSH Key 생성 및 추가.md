---
tistoryBlogName: kyledev
tistoryTitle: "[Git] SSH Key 생성 및 추가"
tistoryVisibility: "0"
tistoryCategory: "1110506"
tistoryPostId: "243"
tistoryPostUrl: https://kyledev.tistory.com/243
---
## 문제
새로운 맥을 구입 한 후 깃에서 클론 하려는데 권한 에러가 발생했다.

```
Permission denied (publicly).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```
## 원인
PC를 변경할 때마다 등록되지 않은 새로운 기기이므로 SSH키를 발급받아서 설정해야하는 당연한 상황이다.

## 해결방안
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

그래서 cat 명령어로 직접 파일을 열게 되면  `ssh-rsa`로 시작하는 복잡한 시퀀스 문자열이 나오게 된다.
```
cat ~/.ssh/id_rsa.pub
```
이 때, `ssh-rsa`부터 마지막에 이메일까지 복사한다.

이제 github에 SSH Key를 추가할 차례다.

Github - Settings - SSH and GPG keys의 New SSH Key 버튼을 클릭한다.
![](https://i.imgur.com/QA3KKJS.png)

Title에는 임의의 키 이름을 입력하고 Key란에 복사한 값을 입력하고 저장하면 된다.
![](https://i.imgur.com/VnSyIX6.png)

추가로, SSH Key를 생성할 때 비밀번호를 설정하면 명령어를 입력할 때마다 비밀번호를 입력해야하는 번거로움이 있다.

.zshrc에 아래 내용을 추가한다.
```zsh
# >>>SSH AGENT>>>
if [ $(ps ax | grep "[s]sh-agent" | wc -l) -eq 0 ] ; then
    eval $(ssh-agent -s) > /dev/null
    if [ "$(ssh-add -l)" = "The agent has no identities." ] ; then
	ssh-add ~/.ssh/id_rsa > /dev/null 2>&1
    fi
fi
# <<<SSH AGENT<<<
```
SSH Agent를 사용해서 zsh 쉘 실행 할때마다 새로운 세션을 실행시켜 세션이 종료될 때까지는 비밀번호를 입력하지 않아도 되도록 한다.
## 참고
https://www.tomaszmik.us/2020/09/21/auto-start-ssh-agent-zsh/