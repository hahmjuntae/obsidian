---
tistoryBlogName: kyledev
tistoryTitle: "[Git] 이미 업로드 된 파일 및 폴더 gitignore에 추가하기"
tistoryTags: git,github,gitignore
tistoryVisibility: "3"
tistoryCategory: "1106795"
tistorySkipModal: true
tistoryPostId: "254"
tistoryPostUrl: https://kyledev.tistory.com/254
---
## 이미 커밋된 파일 및 폴더를 Git Ignore에 추가하기

프로젝트에서 특정 파일이나 폴더를 Git 추적에서 제외하고자 할 때 `.gitignore` 파일을 사용한다.

==이미 커밋된 폴더를 `.gitignore`에 추가한다고 해서 이미 푸시되어있는 파일/폴더가 삭제되지 않는다.==

아래 과정을 통해 추적을 중단할 수 있다.
### .gitignore 파일 업데이트
먼저, `.gitignore` 파일에 추적을 중단하고자 하는 폴더나 파일의 경로를 추가한다. 텍스트 편집기를 사용하여 `.gitignore` 파일을 열고, 무시하고 싶은 폴더나 파일의 이름을 추가한다.

### 캐시에서 폴더 제거하기
`.gitignore`에 추가한 후에도 Git은 이미 추적하고 있는 파일이나 폴더에 대해선 변화를 자동으로 인식하지 못한다.
따라서 다음의 명령어를 통해 해당 폴더를 캐시에서 제거해야 한다.
```zsh
git rm -r --cached 폴더명
```
이 명령은 폴더를 실제로 삭제하지 않고, Git 인덱스에서만 제거한다(`--cached`). 폴더 내의 모든 파일들도 처리하려면 `-r` 옵션을 사용한다.

### 변경사항 커밋하기
캐시에서 폴더를 제거한 후, 변경된 `.gitignore` 파일과 함께 캐시에서 제거된 폴더에 대한 변경 사항을 커밋한다.
```zsh
git add .gitignore
git commit -m ".gitignore에 추가했다는 커밋메시지"
```

### 변경사항을 원격 저장소에 푸시하기
로컬에서 변경사항을 커밋한 후, 원격 저장소에도 이 변경사항을 반영한다.
```zsh
git push origin main
```
