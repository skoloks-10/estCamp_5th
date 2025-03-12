# 003 HTML

날짜: 2025/02/27
Subject: HTML
피드백 요청: No

# 📝 오늘 배운 내용 요약

## 1. 입력태그 마무리

- **태그 목록**:`strong`, `b`, `em`, `address`, `kbd`, `mark`

---

## 2. 목록 태그

- **기본 목록 태그**:
    - `ol` (정렬된 목록)
    - `ul` (점으로 표시하는 목록)
    - `li`: 목록 항목 (※ `ol` 또는 `ul`의 자식 태그)
- **설명 목록**:
    - `dl`: 설명 목록
    - `dt`: 용어
    - `dd`: 용어에 대한 설명

---

## 3. 블록과 인라인

- **블록 요소**:
    - `<div>`: 전체 영역을 차지하며 광범위하게 사용됨
- **인라인 요소**:
    - `<span>`: 자신의 내용만큼의 공간만 차지함
- **규칙**:
    - **블록 > 인라인**: 블록 요소 내에 인라인 요소는 사용 가능
    - **인라인 > 블록**: 인라인 요소 내에 블록 요소는 사용 불가
    - 단, `<a>` 태그는 예외로 취급됨
- **인라인-블록**:
    - 인라인 특성과 블록의 속성을 모두 가짐
    - 너비와 높이 지정, 상하 간격 조절 가능

---

## 4. 플로우 콘텐츠

- **내용**:
    - 각 HTML 태그가 어느 콘텐츠 그룹(플로우 콘텐츠)에 속하는지 이해하기

---

## 5. 이미지 (`img`)

- **기본 사용법**
    
    ```html
    <img src="rosy.jpg" alt="위니브 검은 토끼 캐릭터 로지">
    
    ```
    
    - **중요 포인트**: 파일명, 경로, 대체 텍스트 설정
- **Figure 요소와 함께 사용**
    
    ```html
    <figure>
      <img src="images/baby.jpg" alt="엄마 코끼리와 아기 코끼리" />
      <figcaption>관심 받고싶어하는 아기</figcaption>
    </figure>
    
    ```
    
    - **용도**: 참조사진의 느낌과 설명을 제공

---

## 6. 테이블 (`table`)

```html
<table>
  <thead>
    <tr>
      <th scope="colgroup" colspan="4">오르미 강사 개인정보</th>
    </tr>
    <tr>
      <th scope="col">강의 시수 구분</th>
      <th scope="col">이름</th>
      <th scope="col">나이</th>
      <th scope="col">거주지</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="rowgroup" rowspan="2">보조강사</th>
      <th scope="row">Rosy</th>
      <td>52</td>
      <td>브리즈번</td>
    </tr>
    <tr>
      <th scope="row">ZeeZee</th>
      <td>18</td>
      <td>제주</td>
    </tr>
    <tr>
      <th scope="rowgroup" rowspan="2">주강사</th>
      <th scope="row">Licat</th>
      <td>35</td>
      <td>도쿄</td>
    </tr>
    <tr>
      <th scope="row">Wade</th>
      <td>28</td>
      <td>파리</td>
    </tr>
  </tbody>
</table>

```

- **용어 및 속성 설명**:
    - `tr`: **행(row)**
    - `td`: **셀 내용(data cell)**
    - `th`: **헤더 셀** (행 또는 열의 제목)
    - **scope**: 각 헤더와 관련된 영역 지정
    (예: `col`, `row`, `colgroup`, `rowgroup`)
    - **병합 속성**:
        - `colspan`: 열 병합
        - `rowspan`: 행 병합
    - **구역 분리 태그**:
        - `<thead>`, `<tbody>`, `<tfoot>`을 사용하여 테이블 영역 구분
    - **caption**: 테이블 제목 추가에 사용

---

# 💭 오늘의 회고

- **목록 태그**: 순서 목록, 무순서 목록, 설명 목록의 구성과 관계를 이해함
- **블록과 인라인**: 각각의 특징 및 사용법, 그리고 인라인-블록의 유용성을 학습
- **이미지**: 기본 `<img>` 태그와 `<figure>` 요소를 통해 이미지와 설명을 효과적으로 연결하는 방법을 습득
- **테이블**: 데이터를 체계적으로 표시하기 위한 다양한 테이블 태그와 속성(scope, colspan, rowspan 등)에 대해 공부함

---