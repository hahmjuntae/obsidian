---
tistoryBlogName: kyledev
tistoryTitle: "[Mac] zsh 환경 설정"
tistoryTags: zsh,zshrc,mac,맥북,m2,개발환경
tistoryVisibility: "3"
tistoryCategory: "0"
tistoryPostId: "248"
tistoryPostUrl: https://kyledev.tistory.com/248
tistorySkipModal: true
---
==MacOS Catalina부터 기본 쉘로 Zsh가 도입되었다.==
많은 사용자가 Oh My Zsh를 사용해 환경을 구성하지만, 느린 터미널 속도와 불필요한 플러그인으로 인해 필요한 기능만 설정하여 사용하는 것이 바람직하다.

## zsh 폴더 설정

zsh 설정을 시작하기 위해 필요한 폴더를 만들고 환경변수를 임시로 설정한다.

```bash
mkdir $DEV_SDK/zsh
ZSH=$DEV_SDK/zsh
mkdir $ZSH/plugins
mkdir $ZSH/themes
touch $ZSH/.zshrc
```

## History 설정

Zsh 사용자의 명령어 기록을 관리하기 위한 설정을 한다. 기존 Oh My Zsh 사용자라면 기존 히스토리를 가져오고, 그렇지 않으면 새로운 파일을 생성한다.

```bash
# 기존 History 복사 또는 새로 생성
mv ~/.zsh_history $DEV_SDK/zsh/.zsh_history
touch $ZSH/.zsh_history
```

.zshrc 파일에 히스토리 관련 설정을 추가한다.

```bash
# History 설정
export HISTFILE=$ZSH/.zsh_history
export HISTSIZE=50000
export SAVEHIST=50000
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_FIND_NO_DUPS
```

## 테마 설정

원하는 Zsh 테마를 선택하고, 이를 .zshrc 파일에 설정한다.

```bash
# 테마 설치 예시: spaceship 테마
cd $ZSH/themes
git clone https://github.com/spaceship-prompt/spaceship-prompt.git

# .zshrc에 테마 설정 추가
source $ZSH/themes/spaceship-prompt/spaceship.zsh-theme
# ... 기타 테마 관련 설정 ...
```

## Plugin 설치

필요한 Zsh 플러그인을 설치하고 .zshrc 파일에 설정을 추가한다.

```bash
# 플러그인 설치
cd $ZSH/plugins
git clone https://github.com/zdharma-zmirror/fast-syntax-highlighting.git
git clone https://github.com/zsh-users/zsh-autosuggestions.git
brew install zsh-completions

# .zshrc에 플러그인 설정 추가
source $ZSH/plugins/fast-syntax-highlighting/fast-syntax-highlighting.plugin.zsh
source $ZSH/plugins/zsh-autosuggestions/zsh-autosuggestions.plugin.zsh
# ... 기타 플러그인 관련 설정 ...
```

### 안전하지 않은 디렉토리 메시지 해결

`zsh-completions` 설치 후 발생하는 안전하지 않은 디렉토리 관련 메시지를 해결하기 위해 권한을 조정한다.

```bash
chmod -R go-w '/opt/homebrew/share/zsh'
chmod -R go-w '/opt/homebrew/share/'
rm -f ~/.zcompdump; compinit
```
