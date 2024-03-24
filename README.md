# 💖 벨리곰 상품관리 서비스 만들기

- 벨리곰 상품관리 서비스 배포 페이지 : [BellyGom](https://bellygom-store-oxlzlo.netlify.app/)
- 로그인 ID : bellygom
- 로그인 PW : cute

<br>

## 💖 프로젝트 기간

    2024년 3월 13일 ~ 2024년 3월 24일

<br>

## 💖 주요 기능

- [x] 프로필 페이지
- [x] 스크롤이 가능한 형태의 리스팅 페이지
- [x] 전체 페이지 데스크탑-모바일 반응형 페이지
- [x] 사진 등록, 삭제
- [x] 로딩 애니메이션
- [x] 검색 기능
- [x] Infinity Scroll
- [x] Local Storage 사용
- CSS
  - [x] 애니메이션
  - [ ] 상대수치 사용
- JS
  - [x] DOM event 조작

<br>

## 💖 주요 내용

  1. 메인 페이지
     
     ![메인 페이지](https://github.com/oxlzlo/bellygom_store/assets/140046183/c62121fe-a1d4-4de4-b7b7-d080c48bcd32)


     - 스토리, 스토어 버튼 호버 효과

<br>


  2. 스토리 페이지

     ![스토리 페이지](https://github.com/oxlzlo/bellygom_store/assets/140046183/fe9b3048-009d-4da4-af14-b8b3e45e77fb)


<br>

  3. 로그인 페이지

     ![로그인 페이지](https://github.com/oxlzlo/bellygom_store/assets/140046183/ccff57b6-6b8c-476a-be22-9ef53dacd718)


<br>

  4. 스토어 페이지

     ![스토어 페이지](https://github.com/oxlzlo/bellygom_store/assets/140046183/9f240eed-2784-45cb-9822-543865ff18b7)


<br>

  5. 로그인, 로그아웃 기능

     ![로그인, 로그아웃 기능](https://github.com/oxlzlo/bellygom_store/assets/140046183/da12d386-78a6-4fc1-928e-b81873394f1b)


     - 아이디와 비밀번호를 모두 입력해야 로그인 가능
     - 비밀번호 틀릴 경우 비밀번호 확인을 위한 alert 표시
     - 로그인 후 로그아웃 버튼 클릭시 로그아웃 (로컬 스토리지에서 로그인 정보 삭제)
     - 로그인 되어있지 않은 상태에서 로그아웃 버튼 클릭시 로그인 정보 없음 표시
    
<br>

  6. 로그인 정보에 따른 상품 등록 가능 여부

     ![로그인 정보에 따른 상품 등록 가능 여부](https://github.com/oxlzlo/bellygom_store/assets/140046183/e4107f9c-8b11-4ed6-9704-cf1d572ba5f9)


     - 로그인 상태시 상품 등록 가능
     - 로그인 안 되어있을 때 상품 등록 버튼 클릭시 로그인 화면으로 이동

<br>

  7. 상품 검색 기능

     ![상품 검색 기능](https://github.com/oxlzlo/bellygom_store/assets/140046183/0c872f2a-1e5f-47f7-a310-b8d0c0ff3b42)


     - 검색 키워드가 포함된 모든 상품 표시
    
<br>

  8. 체크박스 전체 선택, 전체 해제

     ![체크박스 전체 선택, 전체 해제](https://github.com/oxlzlo/bellygom_store/assets/140046183/fdae9087-3bdc-4655-a82f-b81da58d11f6)


<br>

  9. 새로운 상품 등록

      ![새로운 상품 등록](https://github.com/oxlzlo/bellygom_store/assets/140046183/dc2940fd-3f9a-4ae2-b834-99b455abe248)


<br>

  10. 체크 상품 삭제

      ![체크 상품 삭제](https://github.com/oxlzlo/bellygom_store/assets/140046183/18379941-f732-4c38-9ce7-1a3a3e1d2a3e)


<br>

  11. 상품 수량에 따른 전체 금액 증감

      ![상품 수량에 따른 전체 금액 증감](https://github.com/oxlzlo/bellygom_store/assets/140046183/826f455b-57ed-4202-bc2f-e0f3ea0e89fa)


<br>

  12. Infinity Scroll

      ![infinity scroll](https://github.com/oxlzlo/bellygom_store/assets/140046183/7b4f6338-50c0-4369-8366-608f47a37cf5)


      - 초기 기본 아이템 표시 5개
      - 스크롤을 화면 하단으로 내리면 아이템 로드

<br>

  13. 모바일 반응형

      ![모바일 반응형](https://github.com/oxlzlo/bellygom_store/assets/140046183/7168cc1b-572e-4b4d-89db-2fdf833fc1a5)


      - 일정 화면 비율로 줄어들면 모바일 반응형으로 변환

<br>


## 💖 느낀 점

이번 과제는 틀은 있지만 100% 창작(?) 이라서 조금이라도 내가 더 좋아하는 것, 만들면서 기분이 좋은 것을 만들어보려고 했다.

평소에 벨리곰을 좋아했기 때문에, 벨리곰 상품들을 관리할 수 있는 페이지를 제작했다.

지난번 클론코딩 과제에서 자바스크립트를 조금 활용하긴 했지만,

이번엔 디자인보다 자바스크립트가 주요 기능이였기 때문에 디자인에는 많은 시간을 쓰지는 않았다.

그 대신 자바스크립트에 시간을 많이 썼다..

<br>

조금 중점적으로 생각했던 부분은, 자바스크립트 코드에서 함수 단일 책임의 원칙을 적용하려고 노력했다.

물론 처음부터 단일 책임을 갖도록 코드를 작성하지는 못 했지만, 리팩토링 하며 코드를 쪼개려고 노력했다.

<br>

아쉬운 점이라면 CSS 상대수치(rem, em)를 사용하지 못 했다.

사실 모바일 반응형에서 기존 값들에 딱히 어색함을 느끼지 못 했지만, 폰트 사이즈 같은 경우는 상대수치를 사용하는게 더 좋지 않았을까 라는 생각이 든다.

<br>

그리고 자바스크립트 코드를 모듈화 하지 못 했다.

자바스크립트 파일이 많아져서, 메인 스크립트 파일을 만들어 한 곳에서 import 하는게 어땠을까 라는 생각이 든다.

<br>

그래도 처음으로 진짜 뭔가 '동작'하는 페이지를 만들어본 것이 매우 뿌듯하다.

다음 프로젝트가 벌써 기대되기도 하고, 두렵기도 하다 😂

<br>


## 💖 유저 플로우

![유저 플로우](https://github.com/oxlzlo/bellygom_store/assets/140046183/a9b1b4ee-47f2-4729-9cee-2dad0eef2087)