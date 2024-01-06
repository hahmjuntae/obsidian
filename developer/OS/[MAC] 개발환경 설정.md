---
tistoryBlogName: kyledev
tistoryTitle: "[MAC] 개발환경 설정"
tistoryTags: mac,맥북,개발환경,devroot,zsh
tistoryVisibility: "3"
tistoryCategory: "1107241"
tistoryPostId: "246"
tistoryPostUrl: https://kyledev.tistory.com/246
---
## DEV_ROOT 설정

개발 작업을 하면서 다양한 라이브러리, SDK, 설정 파일들을 관리하는 것은 때때로 복잡해질 수 있다.
모든 개발 관련 파일을 한 곳에 모아  문제 발생 시 전체 시스템을 초기화하지 않고도 해당 폴더만 삭제함으로써 간편하게 문제를 해결할 수 있다.

### DEV_ROOT 설정하기

`DEV_ROOT`를 설정하는 과정은 여러 하위 디렉토리를 포함하는 하나의 루트 디렉토리를 생성하는 것으로 시작한다. 다음은 `DEV_ROOT`와 필요한 하위 디렉토리들을 생성하는 방법이다.

```bash
mkdir ~/.DEV_ROOT
mkdir ~/.DEV_ROOT/sdk
mkdir ~/.DEV_ROOT/lib
mkdir ~/.DEV_ROOT/bin
mkdir ~/.DEV_ROOT/include
mkdir ~/.DEV_ROOT/lib/pkgconfig
touch ~/.DEV_ROOT/.zshrc
```

### .zshrc 설정

.zshrc 파일에는 환경 변수, 경로, 별칭 등의 설정이 포함된다. `DEV_ROOT` 설정을 통해 이 모든 설정을 한 곳에서 관리할 수 있다.

```bash
# >>> DEV_ROOT >>>
DEV_ROOT=$HOME/.DEV_ROOT
source $DEV_ROOT/.zshrc
# <<< DEV_ROOT <<<
```

### ~/.DEV_ROOT/.zshrc 설정

`~/.DEV_ROOT/.zshrc` 파일에서는 개발 환경과 관련된 환경 변수와 별칭을 설정한다. 이 설정은 `DEV_ROOT` 폴더 내의 다양한 도구와 라이브러리에 대한 경로를 포함한다.

```bash
# >>> DEV_ROOT >>>
export DEV_ROOT=$HOME/.DEV_ROOT
export DEV_SDK=$DEV_ROOT/sdk
export PATH=$DEV_ROOT/bin:$PATH
# <<< DEV_ROOT <<<

# >>> alias >>>
export DESKTOP=~/Desktop
export V=~/Desktop/vault
export D=~/Desktop/docs
export W=~/Desktop/workspace
export P=~/Desktop/workspace/project

alias root='cd ~'
alias devroot='cd ~/.DEV_ROOT'
alias obsidian='cd ~/Desktop/obsidian'
alias docs='cd ~/Desktop/obsidian/docs'
alias workspace='cd ~/Desktop/workspace'
alias project='cd ~/Desktop/workspace/project'
alias desktop='cd ~/Desktop'
# <<< alias <<<

# >>> ZSH >>>
export ZSH=$DEV_SDK/zsh
source $ZSH/.zshrc
# <<< ZSH <<<
```

## 작업 폴더 생성 및 관리

개발 작업을 위한 폴더 구조를 설정하고, 바탕화면에서의 접근성을 고려하여 폴더는 바탕화면에 생성한다. 이 구조는 각 작업의 성격에 따라 분류되어 있어 효율적인 파일 관리를 가능하게 한다.

### 폴더 구조

- **obsidian**: 옵시디언 저장소로, 기술 관련 공부 내용을 저장한다.
- **obsidian/docs**: 문서 관련 폴더로, 기획서, 일정 등 프로젝트 관련 문서를 저장한다.
- **workspace**: 코드 관련 폴더로, 프로젝트, 사이드 프로젝트, 공부, 알고리즘 등의 작업을 포함한다.

### 폴더 트리

```zsh
tree -L 2 -- $DESKTOP

/Users/hahmjuntae/Desktop
├── backup
│   └── ...
├── obsidian
│   ├── _template
│   ├── assets
│   ├── developer
│   └── docs
└── workspace
    ├── academy
    ├── algorithm
    ├── asset
    ├── extension
    ├── playground
    ├── project
    └── study
```

`DEV_ROOT` 설정과 `alias`를 통해 빠른 접근과 폴더 구조를 통해 개발을 효율적으로 할 수 있다.