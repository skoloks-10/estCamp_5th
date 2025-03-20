# 002 HTML

날짜: 2025/02/26
Subject: HTML
피드백 요청: No

# 📝 오늘 배운 내용 요약

# HTML 문서 구조와 기본 문법 종합 가이드

## 1. HTML 문서의 기본 구조

### 1.1 기본 템플릿

HTML 문서는 다음과 같은 기본 구조를 가집니다:

```html
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>페이지 제목</title>
  </head>
  <body>
    <!-- 실제 콘텐츠가 여기에 들어갑니다 -->
  </body>
</html>

```

VS Code에서 새 HTML 파일에 `!` + `Tab`을 입력하면 이 기본 구조가 자동으로 생성됩니다.

### 1.2 index.html의 특별한 의미

| 특징 | 설명 |
| --- | --- |
| 웹 서버 기본 설정 | 대부분의 웹 서버는 URL에 특정 파일명이 없을 때 자동으로 index.html을 제공 |
| 관례와 편의성 | 웹 개발 커뮤니티에서 널리 받아들여진 메인 페이지를 위한 표준 이름 |
| 접근성 | 개발자와 사용자 모두가 웹사이트의 시작점을 쉽게 찾을 수 있음 |

## 2. HTML 문서 요소 상세 분석

### 2.1 DOCTYPE

```html
<!DOCTYPE html>

```

| 특징 | 설명 |
| --- | --- |
| 역할 | 문서가 HTML Living Standard를 사용함을 브라우저에 선언 |
| 위치 | 항상 HTML 문서의 맨 처음에 위치 |
| 중요성 | 생략 시 브라우저가 쿼크 모드(quirks mode)로 렌더링됨 |

**과거 선언 방식:** HTML 4.01이나 XHTML 시절에는 더 복잡한 DTD(Document Type Definition) 선언이 필요했습니다.

```html
<!-- HTML 4.01 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "<http://www.w3.org/TR/html4/strict.dtd>">

```

### 2.2 html 요소

```html
<html lang="ko-KR">
  <!-- 문서 내용 -->
</html>

```

| 특징 | 설명 |
| --- | --- |
| 역할 | HTML 문서의 루트(최상위) 요소로, 모든 HTML 요소를 포함 |
| lang 속성 | 페이지의 주 언어를 지정 (검색엔진, 스크린 리더에 중요) |
| 형식 | 언어코드(소문자)-국가코드(대문자) (예: ko-KR, en-US) |

**주요 언어 코드:**

| 언어코드 | 언어 | 국가코드(예시) |
| --- | --- | --- |
| ko | 한국어 | KR(대한민국), KP(북한) |
| en | 영어 | US(미국), GB(영국) |
| zh | 중국어 | CN(중국), HK(홍콩), Hans(간체), Hant(번체) |
| ja | 일본어 | JP |
| de | 독일어 | DE |

### 2.3 head 요소

```html
<head>
  <!-- 메타데이터, 제목, 스타일시트 링크 등 -->
</head>

```

head 요소는 브라우저와 검색 엔진을 위한 문서 정보(메타데이터)를 포함합니다. 사용자에게는 직접 보이지 않지만, 페이지의 제목이나 파비콘 같은 일부 정보는 사용자 인터페이스의 일부로 표시됩니다.

### 2.3.1 meta 태그

meta 태그는 다양한 메타데이터를 정의하며, HTML 문서에 대한 추가 정보를 제공합니다.

| 속성 및 값 | 설명 | 예시 |
| --- | --- | --- |
| charset="utf-8" | 문서 문자 인코딩 지정 | `<meta charset="utf-8" />` |
| http-equiv="X-UA-Compatible" content="IE=edge" | IE 브라우저에서 최신 렌더링 모드 사용 | `<meta http-equiv="X-UA-Compatible" content="IE=edge" />` |
| name="description" content="..." | 검색 결과에 표시될 페이지 설명 | `<meta name="description" content="이 페이지는..." />` |
| name="viewport" content="..." | 모바일 기기에서 페이지 표시 방법 제어 | `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` |

**viewport 속성 값:**

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| width | 뷰포트 너비 설정 | `width=device-width` (기기 너비에 맞춤) |
| initial-scale | 초기 줌 레벨 | `initial-scale=1.0` (100% 줌) |
| minimum-scale | 최소 축소 정도 | `minimum-scale=0.5` (50%까지 축소 가능) |
| maximum-scale | 최대 확대 정도 | `maximum-scale=3.0` (300%까지 확대 가능) |
| user-scalable | 사용자 확대/축소 허용 여부 | `user-scalable=yes` (권장) |

### 2.3.2 title 태그

```html
<title>페이지 제목 - 사이트명</title>

```

| 특징 | 설명 |
| --- | --- |
| 역할 | 브라우저 탭에 표시되고 검색 결과에 노출되는 페이지 제목 |
| 최적 길이 | 약 50-60자 이내 (초과 시 검색 결과에서 잘릴 수 있음) |
| 구성 | 페이지 내용을 정확히 반영하고, 주요 키워드 포함 권장 |

### 2.3.3 link 태그

외부 리소스(스타일시트, 파비콘, 폰트 등)와 연결하는 빈 태그입니다.

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| rel | 현재 문서와 연결된 리소스의 관계 | `rel="stylesheet"`, `rel="icon"` |
| href | 연결할 리소스의 경로 | `href="styles.css"`, `href="favicon.ico"` |
| type | 연결된 리소스의 MIME 타입 | `type="text/css"`, `type="image/x-icon"` |

**주요 사용 예시:**

```html
<!-- CSS 스타일시트 연결 -->
<link rel="stylesheet" href="style.css">

<!-- 파비콘 설정 -->
<link rel="shortcut icon" href="favicon.ico">

<!-- 웹 폰트 로드 -->
<link rel="preconnect" href="<https://fonts.googleapis.com>">
<link href="<https://fonts.googleapis.com/css2?family=Roboto&display=swap>" rel="stylesheet">

```

### 2.4 body 요소

```html
<body>
  <!-- 웹 페이지에 실제로 표시될 모든 콘텐츠 -->
</body>

```

body 요소는 사용자에게 실제로 보이는 웹 페이지의 모든 콘텐츠(텍스트, 이미지, 링크, 비디오 등)를 포함합니다.

## 3. HTML 기본 문법

### 3.1 요소(Elements) 구조

HTML 요소는 일반적으로 시작 태그, 콘텐츠, 종료 태그로 구성됩니다:

```html
<태그명>콘텐츠</태그명>

```

### 3.1.1 태그(Tag) 구조

| 부분 | 설명 | 예시 |
| --- | --- | --- |
| 시작 태그 | 요소의 시작 표시 | `<p>` |
| 콘텐츠 | 요소의 내용 | 텍스트, 다른 요소 등 |
| 종료 태그 | 요소의 끝 표시 | `</p>` |

### 3.1.2 요소의 중첩

HTML 요소는 다른 요소를 포함할 수 있으며, 이 경우 반드시 중첩 순서를 지켜야 합니다:

```html
<p>
  이것은 <strong>올바른</strong> 중첩 구조입니다.
</p>

<!-- 잘못된 중첩 구조 -->
<p>
  이것은 <strong>잘못된 중첩 구조입니다.
</p>
</strong>

```

### 3.2 빈 요소 / 셀프 클로징 태그

일부 HTML 요소는 내용을 포함하지 않으며, 종료 태그가 없습니다.

| 표기법 | 설명 | 예시 |
| --- | --- | --- |
| 기본 | 닫는 태그 없음 | `<img src="image.jpg" alt="이미지">` |
| XML 스타일 | 슬래시로 닫기 | `<img src="image.jpg" alt="이미지" />` |

**주요 빈 요소 예시:**

- `<img>` - 이미지 삽입
- `<br>` - 줄바꿈
- `<input>` - 입력 필드
- `<meta>` - 메타데이터
- `<link>` - 외부 리소스 연결
- `<hr>` - 수평선

### 3.3 주석

HTML 주석은 코드를 설명하거나 일시적으로 비활성화하는 데 사용됩니다:

```html
<!-- 이것은 HTML 주석입니다 -->

```

| 사용 목적 | 예시 |
| --- | --- |
| 코드 설명 | `<!-- 헤더 섹션 시작 -->` |
| 코드 비활성화 | `<!-- <a href="#">임시 제거된 링크</a> -->` |
| 섹션 구분 | `<!-- header -->` ... `<!-- //header -->` |

**주석 사용 지침:**

- 코드의 구조와 목적을 명확히 설명
- 복잡한 구조의 시작과 끝 표시
- 임시로 코드를 제거할 때 사용
- 민감한 정보는 주석에 포함하지 말 것
- 과도한 주석은 피하고, 코드 자체가 목적을 명확히 하도록 작성

### 3.4 요소 간의 관계

HTML 문서는 요소 간의 계층 구조를 형성하며, 이러한 관계를 이해하는 것이 중요합니다.

| 관계 | 설명 | 예시 |
| --- | --- | --- |
| 부모-자식 | 직접 포함하는 요소와 포함된 요소 | `<div>`는 그 안의 `<p>`의 부모 |
| 형제 | 같은 부모를 가진 요소들 | 같은 `<div>` 안의 여러 `<p>` 태그들 |
| 조상-자손 | 직접/간접적으로 포함하는 모든 관계 | `<body>`는 그 안의 모든 요소의 조상 |

**예시 코드:**

```html
<section>             <!-- 부모 요소 -->
  <h1>제목</h1>       <!-- 자식 요소, 형제 요소 -->
  <p>                 <!-- 자식 요소, 형제 요소 -->
    <strong>강조</strong>  <!-- 자손 요소 -->
  </p>
</section>

```

**요소 관계의 중요성:**

- CSS 선택자를 통한 스타일링에 활용
- JavaScript를 통한 DOM 조작에 필수
- 명확한 문서 구조 형성에 도움

## 4. HTML 문서 작성 모범 사례

### 4.1 DOCTYPE 선언

모든 HTML5 문서는 `<!DOCTYPE html>` 선언으로 시작해야 합니다. 이는 브라우저에게 표준 모드로 렌더링하도록 지시합니다.

### 4.2 언어 설정

```html
<html lang="ko-KR">

```

언어 속성을 올바르게 설정하면 다음과 같은 이점이 있습니다:

- 스크린 리더가 올바른 발음으로 콘텐츠를 읽음
- 브라우저의 번역 기능이 정확하게 동작
- 검색 엔진이 언어별 검색 결과에 페이지를 올바르게 포함

### 4.3 메타 태그 최적화

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="페이지에 대한 간결하고 정확한 설명">

```

이러한 메타 태그는 다음과 같은 이유로 중요합니다:

- 문자 인코딩 설정은 텍스트가 올바르게 표시되도록 보장
- 뷰포트 설정은 반응형 디자인에 필수적
- 설명 메타 태그는 검색 결과에서의 표시와 SEO에 영향

### 4.4 문서 제목 최적화

```html
<title>핵심 키워드 - 사이트명</title>

```

효과적인 제목 작성 지침:

- 주요 키워드를 앞쪽에 배치
- 약 50-60자 이내로 유지
- 페이지마다 고유한 제목 사용
- 불필요한 반복 키워드 피하기

### 4.5 HTML 유효성 검증

W3C의 Markup Validation Service([https://validator.w3.org/](https://validator.w3.org/))를 사용하여 HTML 문서의 문법적 오류를 검사하는 것이 좋습니다. 이는 예기치 않은 렌더링 문제나 접근성 문제를 방지하는 데 도움이 됩니다.

---

# 최종 요약: HTML 문서 구조와 기본 문법

## HTML 문서 구조

- **DOCTYPE 선언**: `<!DOCTYPE html>` - 표준 모드 렌더링을 위해 문서 최상단에 필수
- **HTML 요소**: `<html lang="ko-KR">` - 모든 콘텐츠를 포함하는 루트 요소, 언어 설정 중요
- **Head 요소**: 메타데이터 포함 영역
    - `<meta charset="utf-8">` - 문자 인코딩 설정
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">` - 반응형 설정
    - `<title>페이지 제목</title>` - 브라우저 탭과 검색 결과에 표시
    - `<link>` - CSS, 파비콘, 폰트 등 외부 리소스 연결
- **Body 요소**: 사용자에게 실제로 보이는 콘텐츠 포함 영역

## HTML 기본 문법

- **요소 구조**: `<태그>콘텐츠</태그>` - 시작 태그, 콘텐츠, 종료 태그로 구성
- **빈 요소**: `<img src="image.jpg" alt="설명">` 또는 `<img src="image.jpg" alt="설명" />` - 콘텐츠 없이 속성만 가짐
- **주석**: `<!-- 주석 내용 -->` - 코드 설명이나 임시 비활성화에 사용
- **요소 관계**:
    - 부모-자식: 직접 포함 관계 (예: `<div>`와 그 안의 `<p>`)
    - 형제: 같은 부모를 가진 요소들 (예: 같은 `<div>` 안의 여러 `<p>` 태그들)
    - 조상-자손: 모든 포함 관계 (예: `<body>`와 그 안의 모든 요소들)

## 주요 속성과 값

- **lang**: 문서 또는 요소의 언어 지정 (예: "ko-KR", "en-US")
- **charset**: 문자 인코딩 지정 (주로 "utf-8" 사용)
- **viewport**: 모바일 장치에서의 표시 방식 제어
    - `width=device-width`: 기기 너비에 맞춤
    - `initial-scale=1.0`: 초기 확대/축소 수준 설정
- **rel**: 링크된 리소스와의 관계 (예: "stylesheet", "icon")
- **href**: 리소스의 URL 경로

## 모범 사례

- **index.html** 파일명을 사이트 진입점으로 사용
- 문서마다 명확하고 고유한 `<title>` 설정
- 모든 이미지에 적절한 대체 텍스트(`alt`) 제공
- 올바른 요소 중첩 구조 유지
- W3C 유효성 검사기로 문법 오류 확인
- 시맨틱 HTML 요소 활용으로 문서 구조 명확화

HTML은 단순히 웹 페이지를 표시하기 위한 마크업 언어를 넘어, 웹 문서의 구조와 의미를 정의하는 중요한 역할을 합니다. 올바른 HTML 구조와 문법 사용은 접근성, 검색 엔진 최적화, 유지보수성, 그리고 다양한 기기에서의 호환성을 보장하는 기초가 됩니다.

# 💭 오늘의 회고

**배운 점**

- VSC의 기본 설정과 확장 프로그램 관리 방법
- HTML 문서의 기본 구조와 요소들의 역할 이해
- 스니펫을 활용해 코딩 효율성 향상
- 다양한 글자 태그를 통한 내용 구성 방법 익힘

---