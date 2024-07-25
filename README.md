 # 리엑트 기본 문법 생성

rafce 

## 라이블러리 설치

- react 설치 -> ` npx create-react-app 타이틀명 `
- react-router-dom -> ` npm install react-router-dom `
- axios 설치 -> ` npm install axios `
- react-icons 설치 -> ` npm install react-icons `
- react-player 설치 -> ` npm install react-player `
- sass 설치 -> ` npm install sass `
- react-helmet-async 설치 -> ` npm install react-helmet-async `
- swiper 설치 -> ` npm install swiper ` 

- 추가사항 : package.json 에서 바꾼 버전으로 다시설치 -> `npm i`

## SASS

- 변수, 중첩, 믹스인, 확장, 연산

## 깃 순서

1. git add . -> 모든 파일의 변경 사항을 스테이징 영역에 추가
2. git status -> 스테이징 영역에 추가된 파일 확인
3. git commit -m "원하는 메시지" ex - scss 세팅, 올린 날짜, 수정 사항 등등 -> 스테이징 영역에 있는 파일들 로컬 저장소에 저장
4. git push -u origin main -> 로컬 저장소의 변경 사항을 원격 저장소에 업로드.

스테이징 영역: 깃에서 제공하는 임시 저장공간.


## lazy

1. 동기적(synchronous): 작업이 순차적으로 실행되며, 이전 작업이 끝나야 다음 작업 수행.

console.log('첫번째 작업 시작');
console.log('두번째 작업 시작');
console.log('세번째 작업 시작');
console.log('네번째 작업 시작');



2. 비동기적(asynchronous): 작업이 독립적으로 실행되며, 이전 작업이 끝나지 않아도 작업 수행.