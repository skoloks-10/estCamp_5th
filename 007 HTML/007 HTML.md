# 007 HTML

날짜: 2025/03/06
Subject: HTML
피드백 요청: No

## 📝 오늘 배운 내용 요약

# HTML 폼 요소 종합 가이드

## 1. 폼(Form)

### 1.1 기본 개념

폼은 사용자로부터 입력을 받기 위한 HTML 요소들의 집합입니다. 주로 데이터를 서버로 제출하는 용도로 사용됩니다.

### 1.2 `<form>` 태그

폼 태그는 사용자 입력 양식을 그룹화하는 컨테이너 역할을 합니다.

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `method` | 폼 데이터 전송 방식 (GET/POST) | `<form method="post">` |
| `action` | 폼 데이터를 처리할 서버의 URL | `<form action="/submit-form">` |
| `enctype` | 폼 데이터 인코딩 방식 | `<form enctype="multipart/form-data">` |
| `autocomplete` | 자동 완성 기능 제어 (on/off) | `<form autocomplete="off">` |

### 1.3 method 속성 비교

| 특성 | POST | GET |
| --- | --- | --- |
| 데이터 전송 방식 | 요청 본문으로 전송 | URL의 쿼리스트링으로 전송 |
| 데이터 가시성 | URL에 노출 안됨 | URL에 노출됨 (`example.com?name=홍길동&age=20`) |
| 캐시 | 브라우저에 캐시되지 않음 | 브라우저에 의해 캐시됨 |
| 길이 제한 | 없음 | URL 길이 제한에 따라 제한됨 |
| 보안 | 상대적으로 높음 | 취약함 |

### 1.4 enctype 속성

| 값 | 설명 | 사용 상황 |
| --- | --- | --- |
| `application/x-www-form-urlencoded` | 기본값, 일반 텍스트만 전송 | 일반적인 폼 전송 |
| `multipart/form-data` | 파일 업로드 가능 | 파일 업로드 시 필수 |
| `text/plain` | 인코딩 없는 텍스트 전송 | 디버깅용, 개발용 |

## 2. 입력 요소(Input)

### 2.1 공통 속성

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `type` | 입력 양식 컨트롤 유형 | `<input type="text">` |
| `name` | 입력 양식의 이름 (서버로 전송될 변수명) | `<input name="username">` |
| `value` | 입력 양식의 초기값 | `<input value="기본값">` |
| `placeholder` | 입력 도움말 | `<input placeholder="이름을 입력하세요">` |
| `required` | 필수 입력 여부 | `<input required>` |
| `disabled` | 비활성화 여부 | `<input disabled>` |
| `readonly` | 읽기 전용 여부 | `<input readonly>` |

### 2.2 주요 input type

| type | 설명 | 특수 속성 | 예시 |
| --- | --- | --- | --- |
| `text` | 일반 텍스트 입력 | `maxlength`, `minlength` | `<input type="text" maxlength="50">` |
| `password` | 비밀번호 입력 (값이 가려짐) | `maxlength`, `minlength` | `<input type="password">` |
| `email` | 이메일 주소 입력 | 유효성 검사 포함 | `<input type="email">` |
| `number` | 숫자 입력 | `min`, `max`, `step` | `<input type="number" min="0" max="100" step="5">` |
| `checkbox` | 다중 선택 가능한 체크박스 | `checked` | `<input type="checkbox" checked>` |
| `radio` | 단일 선택만 가능한 라디오 버튼 | `checked` | `<input type="radio" name="gender">` |
| `file` | 파일 업로드 | `accept`, `multiple` | `<input type="file" accept="image/*" multiple>` |
| `date` | 날짜 선택 (년/월/일) | `min`, `max` | `<input type="date" min="2023-01-01">` |
| `time` | 시간 선택 | `step` | `<input type="time" step="900">` |
| `color` | 색상 선택 | - | `<input type="color">` |
| `range` | 슬라이더 형태의 범위 선택 | `min`, `max`, `step` | `<input type="range" min="0" max="100">` |
| `search` | 검색어 입력 | 삭제 아이콘 포함 | `<input type="search">` |
| `submit` | 폼 제출 버튼 | - | `<input type="submit" value="제출하기">` |
| `reset` | 폼 초기화 버튼 | - | `<input type="reset" value="초기화">` |
| `button` | 일반 버튼 | - | `<input type="button" value="클릭하세요">` |
| `hidden` | 화면에 표시되지 않는 입력 필드 | - | `<input type="hidden" name="id" value="123">` |

## 3. 레이블(Label)

### 3.1 기본 개념

`<label>` 태그는 폼 요소에 대한 설명을 제공하며, 접근성 향상과 사용자 편의성을 위해 중요합니다.

### 3.2 레이블 연결 방법

| 방식 | 설명 | 예시 |
| --- | --- | --- |
| `for` 속성 사용 | `for` 속성과 입력 요소의 `id` 연결 | `<label for="user-id">아이디</label><input id="user-id" type="text">` |
| 중첩 사용 | `<label>` 내부에 `<input>` 배치 | `<label>아이디 <input type="text"></label>` |

### 3.3 주의사항

- 레이블 내부에 다른 인터랙티브 요소(`<a>`, `<button>` 등)를 배치하지 말것
- 제목 태그(`<h1>` ~ `<h6>`)를 레이블 내부에 배치하지 말것
- 폼에 제목이 필요한 경우 `<fieldset>`과 `<legend>` 사용

## 4. 선택 요소(Select)

### 4.1 기본 구조

```html
<select name="options" required>
  <option value="">옵션 선택하기</option>
  <option value="1">옵션 1</option>
  <option value="2">옵션 2</option>
</select>

```

### 4.2 주요 속성

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `multiple` | 다중 선택 가능 | `<select multiple>` |
| `size` | 한번에 표시될 옵션 수 | `<select size="3">` |
| `required` | 필수 선택 여부 | `<select required>` |
| `disabled` | 비활성화 여부 | `<select disabled>` |

### 4.3 옵션 그룹화

```html
<select id="language" name="language">
  <optgroup label="프로그래밍 언어">
    <option value="python">Python</option>
    <option value="javascript">JavaScript</option>
  </optgroup>
  <optgroup label="데이터베이스">
    <option value="mysql">MySQL</option>
    <option value="mongodb">MongoDB</option>
  </optgroup>
</select>

```

## 5. 필드셋(Fieldset)과 범례(Legend)

### 5.1 기본 개념

`<fieldset>` 태그는 관련된 입력 요소들을 그룹화하고, `<legend>`는 그룹의 제목을 제공합니다.

```html
<fieldset>
  <legend>여행 선호도</legend>
  <input type="radio" name="travel" value="mountains" id="mountains">
  <label for="mountains">산</label>
  <input type="radio" name="travel" value="beach" id="beach">
  <label for="beach">바다</label>
</fieldset>

```

### 5.2 주요 속성

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `disabled` | 필드셋 내 모든 요소 비활성화 | `<fieldset disabled>` |

## 6. 데이터 목록(Datalist)

### 6.1 기본 개념

`<datalist>` 태그는 입력 필드에 자동완성 옵션을 제공합니다.

```html
<label for="city">도시 검색:</label>
<input list="cities" id="city" name="city" placeholder="도시 이름 입력">
<datalist id="cities">
  <option value="서울"></option>
  <option value="부산"></option>
  <option value="인천"></option>
</datalist>

```

### 6.2 주의사항

- `<input>` 요소의 `id`와 `<datalist>` 요소의 `id`를 다르게 지정해야 합니다.

## 7. 텍스트 영역(Textarea)

### 7.1 기본 개념

`<textarea>` 태그는 여러 줄의 텍스트를 입력받을 수 있습니다.

```html
<textarea rows="10" cols="50" minlength="10" maxlength="100" placeholder="10자 이상 100자 이하로 내용을 입력해주세요"></textarea>

```

### 7.2 주요 속성

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `rows` | 기본 표시 줄 수 | `<textarea rows="10">` |
| `cols` | 입력창의 너비 (문자 기준) | `<textarea cols="50">` |
| `maxlength` | 최대 입력 가능 문자 수 | `<textarea maxlength="100">` |
| `minlength` | 최소 입력 필요 문자 수 | `<textarea minlength="10">` |
| `placeholder` | 입력 도움말 | `<textarea placeholder="내용 입력">` |

## 8. 버튼(Button)

### 8.1 기본 개념

`<button>` 태그는 클릭 가능한 버튼을 생성합니다.

### 8.2 버튼의 타입

| 타입 | 설명 | 예시 |
| --- | --- | --- |
| `button` | 기본 행동 없음 (JavaScript와 함께 사용) | `<button type="button">클릭</button>` |
| `submit` | 폼 데이터 제출 | `<button type="submit">전송</button>` |
| `reset` | 폼 초기화 | `<button type="reset">초기화</button>` |

### 8.3 `<button>` vs `<input type="button">`

| 특징 | `<button>` | `<input type="button">` |
| --- | --- | --- |
| 내용 | 텍스트, 이미지, HTML 요소 포함 가능 | 텍스트만 가능 (`value` 속성으로) |
| 스타일링 | 더 유연함 | 제한적 |
| 기본 타입 | `<form>` 내부: `submit`, 그 외: `button` | `button` |

### 8.4 `<button>` vs `<a>`

| 특성 | `<button>` | `<a>` |
| --- | --- | --- |
| 역할 | 사용자 동작 실행 트리거 | 하이퍼링크 (페이지 이동) |
| 기능 | 브라우저 기본 동작 없음 | 다른 페이지나 영역으로 이동 |
| 키보드 | 스페이스, 엔터 | 엔터 |
| 접근성 주의 | 최소 44×44px 크기 권장 | `href` 속성 필수 |

## 9. 기타 유용한 HTML 요소

### 9.1 `<meter>`

특정 범위 내의 값을 시각적으로 표시합니다.

```html
<meter value="70" min="0" max="100" low="30" high="70" optimum="50">70%</meter>

```

| 속성 | 설명 |
| --- | --- |
| `value` | 현재값 (필수) |
| `min` | 최소값 (기본값: 0) |
| `max` | 최대값 (기본값: 1) |
| `low` | 낮은 범위 경계값 |
| `high` | 높은 범위 경계값 |
| `optimum` | 최적값 |

### 9.2 `<progress>`

작업의 진행 상황을 표시합니다.

```html
<progress value="32" max="100">32%</progress>

```

| 속성 | 설명 |
| --- | --- |
| `value` | 현재 진행 상황 |
| `max` | 작업의 총량 (기본값: 1) |

### 9.3 `<dialog>`

대화 상자나 모달 창을 생성합니다.

```html
<dialog id="myDialog">
  <p>대화 상자 내용</p>
  <button id="closeBtn">닫기</button>
</dialog>

```

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `open` | 대화 상자가 열려있는 상태 | `<dialog open>` |

**JavaScript 메서드:**

- `show()`: 비모달 상태로 표시
- `showModal()`: 모달 상태로 표시
- `close()`: 대화 상자를 닫음

### 9.4 `<template>`

화면에 즉시 렌더링되지 않는 HTML 코드 블록을 정의합니다.

```html
<template id="row-template">
  <tr>
    <td class="name"></td>
    <td class="age"></td>
  </tr>
</template>

```

JavaScript를 통해 복제하여 사용:

```jsx
const template = document.getElementById('row-template');
const clone = template.content.cloneNode(true);
clone.querySelector('.name').textContent = '홍길동';
document.querySelector('tbody').appendChild(clone);

```

### 9.5 `<details>` 및 `<summary>`

접을 수 있는 내용을 제공합니다.

```html
<details>
  <summary>더 많은 정보 보기</summary>
  <p>여기에 상세 내용이 표시됩니다.</p>
</details>

```

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `open` | 기본적으로 내용이 펼쳐진 상태 | `<details open>` |

### 9.6 `<picture>`

반응형 이미지를 위한 태그입니다.

```html
<picture>
  <source srcset="image-mobile.jpg" media="(max-width: 600px)">
  <source srcset="image-tablet.jpg" media="(max-width: 1024px)">
  <img src="image-desktop.jpg" alt="이미지 설명">
</picture>

```

### 9.7 `<output>`

계산 결과를 표시합니다.

```html
<form oninput="result.value=parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" value="0">
  +
  <input type="number" id="b" value="0">
  =
  <output name="result" for="a b">0</output>
</form>

```

### 9.8 `<time>`

날짜와 시간을 시맨틱하게 표시합니다.

```html
<time datetime="2025-12-25T20:00:00">2025년 크리스마스 저녁 8시</time>

```

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `datetime` | 기계가 읽을 수 있는 날짜/시간 형식 | `<time datetime="2025-12-25">` |

## 10. 검색 엔진 최적화(SEO)

### 10.1 URL 최적화

- 단어 구분은 하이픈(-) 사용, 언더바(_) 지양
- 짧고 설명적인 URL 사용
- 키워드를 URL에 포함

### 10.2 페이지 제목 최적화

- 각 페이지에 고유한 제목 사용
- 약 60자 이내로 간결하게 작성
- 페이지 주제가 먼저, 사이트 이름은 나중에

### 10.3 메타 태그 사용

```html
<meta name="description" content="페이지 설명 (약 250자 이하)">
<meta property="og:title" content="페이지 제목">
<meta property="og:description" content="페이지 설명">
<meta property="og:image" content="이미지 URL">
<meta property="og:url" content="페이지 URL">
<meta name="twitter:card" content="summary">

```

### 10.4 시맨틱 마크업

- 제목 태그(`<h1>` ~ `<h6>`) 적절히 사용
- 이미지에 `alt` 속성 제공
- `<strong>`, `<em>` 등으로 중요 키워드 강조
- 의미있는 링크 텍스트 사용

### 10.5 검색 엔진 제어

```html
<!-- robots.txt -->
User-agent: *
Allow: /
Disallow: /private/

<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="<http://www.sitemaps.org/schemas/sitemap/0.9>">
  <url>
    <loc><https://example.com/></loc>
    <lastmod>2023-01-01</lastmod>
    <priority>1.00</priority>
  </url>
</urlset>

<!-- 특정 페이지 색인 제외 -->
<meta name="robots" content="noindex,nofollow">

```

---

# 최종 요약: HTML 폼 요소 핵심 정리

## 폼과 입력 요소

- **`<form>`**: 사용자 입력을 그룹화하고 서버로 전송
    - **method**: GET(URL 쿼리스트링) vs POST(요청 본문)
    - **enctype**: 파일 업로드 시 `multipart/form-data` 필수
- **`<input>`**: 다양한 유형의 사용자 입력 수집
    - **기본 속성**: `name`, `value`, `placeholder`, `required`, `disabled`, `readonly`
    - **주요 type**: `text`, `password`, `email`, `number`, `checkbox`, `radio`, `file`, `date`, `submit`

## 폼 관련 요소

- **`<label>`**: 폼 요소에 설명 제공 (접근성 향상)
    - `for` 속성으로 입력 요소와 연결 또는 입력 요소를 내부에 중첩
- **`<select>` 및 `<option>`**: 드롭다운 목록 생성
    - `<optgroup>` 태그로 옵션 그룹화 가능
- **`<fieldset>` 및 `<legend>`**: 관련 입력 요소 그룹화 및 제목 표시
- **`<datalist>`**: 입력 요소에 자동완성 옵션 제공
- **`<textarea>`**: 여러 줄 텍스트 입력 허용
- **`<button>`**: 다양한 타입의 버튼 생성
    - `submit`: 폼 제출, `reset`: 폼 초기화, `button`: 일반 버튼(JavaScript와 함께 사용)

## 기타 유용한 요소

- **`<meter>`**: 특정 범위 내 값의 시각적 게이지 표시
- **`<progress>`**: 작업 진행 상태 표시
- **`<dialog>`**: 모달 대화 상자 생성
- **`<template>`**: 즉시 렌더링되지 않는 HTML 템플릿 정의
- **`<details>` 및 `<summary>`**: 접을 수 있는 내용 제공
- **`<picture>`**: 반응형 이미지 제공
- **`<output>`**: 계산 결과 표시
- **`<time>`**: 날짜 및 시간 시맨틱 표시

## 검색 엔진 최적화(SEO)

- URL은 하이픈(-)으로 단어 구분, 짧고 설명적으로
- 각 페이지에 고유하고 간결한(60자 이내) 제목 설정
- 메타 태그(`description`, `og:title` 등) 활용
- 시맨틱 마크업 및 제목 태그 적절히 사용
- `robots.txt` 및 `sitemap.xml`로 검색 엔진 크롤링 제어

# HTML 폼 요소 복습 퀴즈

## 퀴즈 1

**파일 업로드를 위한 폼을 작성할 때 필수적으로 설정해야 하는 form 속성은 무엇인가요?**

A) method="post"

B) enctype="application/x-www-form-urlencoded"

C) enctype="multipart/form-data"

D) action="upload.php"

**정답: C) enctype="multipart/form-data"**

**해설:** 파일 업로드를 처리하는 폼에서는 반드시 `enctype="multipart/form-data"`를 지정해야 합니다. 이 속성은 파일 데이터를 서버로 전송할 때 필요한 인코딩 방식으로, 이 설정이 없으면 파일의 바이너리 데이터가 제대로 전송되지 않습니다. `application/x-www-form-urlencoded`는 일반 텍스트만 전송할 때 사용하는 기본값이므로 파일 업로드에 적합하지 않습니다.

## 퀴즈 2

**다음 중 `<label>` 요소에 관한 설명으로 올바르지 않은 것은?**

A) 폼 요소의 이름을 지정하고 접근성을 향상시킨다

B) `for` 속성으로 입력 요소와 연결할 수 있다

C) 레이블 내부에 `<button>` 요소를 포함하는 것이 권장된다

D) 레이블을 클릭하면 연결된 입력 요소에 포커스가 이동한다

**정답: C) 레이블 내부에 `<button>` 요소를 포함하는 것이 권장된다**

**해설:** 레이블 내부에 버튼과 같은 인터랙티브 요소를 배치하는 것은 권장되지 않습니다. 스크린 리더 사용자에게 혼란을 줄 수 있고, 레이블 클릭 시 연관된 폼 요소로 포커스가 이동해야 하는데 내부에 다른 인터랙티브 요소가 있으면 예상치 못한 동작이 발생할 수 있습니다. 접근성을 위해 레이블은 단순하고 명확하게 유지해야 합니다.

## 퀴즈 3

**GET 방식과 POST 방식의 차이점에 관한 설명으로 옳지 않은 것은?**

A) GET은 URL의 쿼리 스트링으로 데이터를 전송하고, POST는 요청 본문에 데이터를 전송한다

B) GET은 브라우저에 캐시되고, POST는 캐시되지 않는다

C) POST 방식이 GET 방식보다 더 많은 데이터를 전송할 수 있다

D) GET 방식이 POST 방식보다 보안이 더 우수하다

**정답: D) GET 방식이 POST 방식보다 보안이 더 우수하다**

**해설:** GET 방식은 URL에 데이터가 노출되므로 POST보다 보안이 취약합니다. 중요한 데이터나 비밀번호 같은 정보는 GET 방식으로 전송해서는 안 됩니다. POST 방식은 데이터를 요청 본문에 담아 전송하기 때문에 URL에 노출되지 않아 상대적으로 더 안전합니다. 그러나 완벽한 보안을 위해서는 HTTPS와 같은 추가적인 보안 조치가 필요합니다.

## 퀴즈 4

**다음 중 `<button>` 태그와 `<input type="button">` 태그의 차이점으로 올바른 것은?**

A) `<button>`은 폼을 제출할 수 없지만, `<input type="button">`은 가능하다

B) `<input type="button">`은 내부에 HTML 요소를 포함할 수 있다

C) `<button>` 태그는 기본적으로 type 속성이 "submit"이다(폼 내부에 위치할 때)

D) `<button>` 태그는 스타일링이 더 제한적이다

**정답: C) `<button>` 태그는 기본적으로 type 속성이 "submit"이다(폼 내부에 위치할 때)**

**해설:** 폼 내부에 위치한 `<button>` 요소의 기본 type은 "submit"입니다. 따라서 type을 명시적으로 지정하지 않으면 클릭 시 폼이 제출됩니다. 반면 `<input type="button">`은 언제나 type이 "button"입니다. 또한 `<button>`은 내부에 텍스트뿐만 아니라 이미지나 다른 HTML 요소를 포함할 수 있어 스타일링이 더 유연하지만, `<input type="button">`은 텍스트만 표시할 수 있습니다(value 속성을 통해).

## 퀴즈 5

**다음 중 `<datalist>` 요소에 관한 설명으로 올바른 것은?**

A) `<select>` 요소를 대체하며 다중 선택이 가능하다

B) 사용자가 입력하는 동안 자동완성 제안 목록을 제공한다

C) 사용자가 옵션 외의 값을 입력할 수 없다

D) 반드시 `<form>` 요소 내부에 위치해야 한다

**정답: B) 사용자가 입력하는 동안 자동완성 제안 목록을 제공한다**

**해설:** `<datalist>` 요소는 `<input>` 요소에 연결하여 사용자가 입력하는 동안 자동완성 제안을 드롭다운 목록으로 제공합니다. 사용자는 제안된 옵션 중에서 선택하거나 원하는 값을 직접 입력할 수 있어 `<select>`보다 더 유연합니다. `<datalist>`의 ID와 `<input>`의 list 속성을 일치시켜 연결하며, 반드시 `<form>` 내부에 위치할 필요는 없습니다.

## 퀴즈 6

**다음 코드에서 잘못된 부분은?**

```html
<datalist id="cities">
  <option value="서울"></option>
  <option value="부산"></option>
</datalist>
<label for="cities">도시 검색:</label>
<input list="cities" id="cities" name="city" placeholder="도시 이름 입력">

```

A) `<datalist>`가 `<input>` 이후에 위치해야 한다

B) `<input>` 태그의 list 속성과 id 속성이 같아서는 안 된다

C) `<label>` 태그의 for 속성이 `<datalist>`의 id를 참조해야 한다

D) `<datalist>` 요소 내에 `<option>` 요소가 비어있어서는 안 된다

**정답: B) `<input>` 태그의 list 속성과 id 속성이 같아서는 안 된다**

**해설:** 위 코드에서 `<input>` 요소의 id와 list 속성이 모두 "cities"로 동일하게 설정되어 있으며, 이는 요소 간 혼동을 일으켜 자동완성이 제대로 작동하지 않을 수 있습니다. `<input>` 요소의 id와 `<datalist>` 요소의 id는 다른 값으로 설정해야 합니다. 예를 들어, `<input list="cities" id="city-input">`과 같이 구분해야 합니다. 또한 `<label>`의 for 속성은 `<datalist>`가 아닌 `<input>` 요소의 id를 참조해야 합니다.

## 퀴즈 7

**검색 엔진 최적화(SEO)에 관한 설명으로 올바르지 않은 것은?**

A) URL에 단어를 구분할 때 하이픈(-)을 사용하는 것이 언더바(_)보다 권장된다

B) 각 페이지는 고유하고 간결한(60자 이내) 제목을 가져야 한다

C) 메타 설명(meta description)은 약 250자 이내로 작성하는 것이 좋다

D) robots.txt 파일은 검색 엔진에 페이지의 중요도 순위를 알려준다

**정답: D) robots.txt 파일은 검색 엔진에 페이지의 중요도 순위를 알려준다**

**해설:** robots.txt 파일은 검색 엔진 크롤러에게 어떤 페이지를 크롤링하거나 크롤링하지 말아야 하는지 지시하는 파일입니다. 페이지의 중요도 순위를 알려주는 것이 아니라, 접근 권한을 제어합니다. 페이지 중요도는 대신 sitemap.xml 파일의 `<priority>` 태그나 페이지 콘텐츠의 구조, 외부 링크 등으로 결정됩니다. robots.txt는 주로 특정 디렉토리나 파일을 크롤링에서 제외하거나, 특정 검색 엔진에 대한 크롤링 규칙을 정의하는 데 사용됩니다.

## 퀴즈 8

**다음 중 `<meter>` 요소와 `<progress>` 요소의 차이점으로 올바른 것은?**

A) `<meter>`는 최소값과 최대값을 설정할 수 없지만, `<progress>`는 가능하다

B) `<meter>`는 정적인 값의 상태를 나타내고, `<progress>`는 진행 중인 작업의 완료도를 나타낸다

C) `<progress>`는 색상이 변하지 않지만, `<meter>`는 값에 따라 색상이 변할 수 있다

D) `<meter>`는 JavaScript 없이 사용할 수 없다

**정답: B) `<meter>`는 정적인 값의 상태를 나타내고, `<progress>`는 진행 중인 작업의 완료도를 나타낸다**

**해설:** `<meter>` 요소는 게임 캐릭터의 능력치나 미세먼지 수준과 같이 고정된 값의 상태를 표시하는 데 적합합니다. 반면 `<progress>` 요소는 파일 업로드, 다운로드 진행 상황과 같이 변화하는 작업의 완료 정도를 나타내는 데 적합합니다. 두 요소 모두 최소값과 최대값을 설정할 수 있으며, `<meter>`는 추가로 low, high, optimum 속성을 통해 값의 범위에 따라 색상이 변화할 수 있습니다.

## 퀴즈 9

**다음 중 `<textarea>` 요소에 대한 설명으로 올바르지 않은 것은?**

A) rows 속성은 기본적으로 보여줄 입력 줄 수를 의미한다

B) value 속성으로 기본 텍스트를 설정할 수 있다

C) cols 속성은 입력창의 너비를 문자 단위로 지정한다

D) maxlength 속성으로 최대 입력 가능한 문자 수를 제한할 수 있다

**정답: B) value 속성으로 기본 텍스트를 설정할 수 있다**

**해설:** `<textarea>` 요소는 value 속성을 사용하지 않습니다. 대신 여는 태그와 닫는 태그 사이에 기본 텍스트를 직접 넣어 초기값을 설정할 수 있습니다. 예: `<textarea>기본 텍스트</textarea>`. rows 속성은 표시할 줄 수, cols 속성은 가로 문자 수를 지정하며, maxlength 속성으로 최대 입력 길이를 제한할 수 있습니다. 이는 `<input>` 요소와 다른 `<textarea>`의 고유한 특성입니다.

## 💭 오늘의 회고

1. **배운 점**
    - form, input, label, select, fieldset 등 입력 양식에 쓰이는 태그들
    - seo, 접근성
2. **어려운 점/개선할 점**
    - html은 태그 형식이라 실습처럼 화면을 보고 마크업을 하는게 기억에 오래 남는듯하다.