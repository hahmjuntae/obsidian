* Promise.all은 여러 개의 프로미스가 모두 완료될 때까지 기다린 다음, 그 결과를 배열로 반환하는 메서드입니다.
* 여러 개의 파일을 동시에 API 호출을 위해 사용할 경우, Promise.all을 사용하는 것이 효과적인 이유는 다음과 같습니다
 
# 병렬 처리
* Promise.all을 사용하면 여러 비동기 작업을 병렬로 처리할 수 있습니다.
* 이것은 각 API 호출이 독립적으로 진행되며, 모든 호출이 완료되길 기다릴 필요 없이 최대한 빨리 시작되게 합니다.

# 단일 에러 핸들링
* Promise.all은 전달된 프로미스 중 하나라도 거부(reject)되면 즉시 catch 블록으로 진입합니다.
* 이렇게 하면 여러 API 호출 중 하나라도 실패할 경우에 바로 에러 처리를 할 수 있습니다.

# 결과의 일관성
* Promise.all은 결과를 순서대로 배열로 반환합니다.
* 이렇게 하면 입력 파일의 순서와 API 호출의 결과를 쉽게 매핑할 수 있습니다.

## 파일 목록을 받아 각 파일을 API로 보내는 함수
```ts
function sendFilesToAPI(files: File[]): Promise<any[]> {
  const apiCalls = files.map(file => uploadToAPI(file));
  return Promise.all(apiCalls);
}
```

## 각 파일을 API로 업로드하는 함수 (예제)
```ts
function uploadToAPI(file: File): Promise<any> {
  // API 호출을 통한 파일 업로드 로직이 여기에 위치해야 합니다.
  return new Promise((resolve, reject) => {
      // 예제로 setTimeout을 사용하여 비동기 처리를 모방합니다.
      setTimeout(() => {
          resolve(`File ${file.name} uploaded.`);
      }, 1000);
  });
}
```

## 사용 예제
```ts
const files = [ /* 여러 파일 객체들 */ ];
sendFilesToAPI(files)
  .then(results => {
      console.log(results);  // 각 파일에 대한 API 응답 배열
  })
  .catch(error => {
      console.error('An error occurred:', error);
  });
```