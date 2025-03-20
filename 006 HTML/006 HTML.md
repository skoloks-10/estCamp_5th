# 006 HTML

날짜: 2025/03/05
Subject: HTML
피드백 요청: No

## 📝 오늘 배운 내용 요약

# HTML 멀티미디어 요소 종합 가이드

## 1. 비디오(Video)

### 1.1 개요

`<video>` 태그는 HTML5에서 도입되어 플래시를 대체하는 표준 방식으로 웹 페이지에 동영상을 삽입할 수 있게 해줍니다. 이 태그의 등장으로 유튜브, 넷플릭스 같은 미디어 플랫폼이 발전할 수 있는 기반이 마련되었습니다.

### 1.2 주요 속성

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `src` | 동영상 파일의 URL | `<video src="movie.mp4">` |
| `controls` | 재생, 정지 등 제어 버튼 표시 | `<video controls>` |
| `autoplay` | 페이지 로드 시 자동 재생 | `<video autoplay>` |
| `loop` | 동영상 반복 재생 | `<video loop>` |
| `poster` | 동영상 재생 전 표시할 이미지 | `<video poster="preview.jpg">` |
| `preload` | 페이지 로드 시 미리 로드할 콘텐츠 지정 | `<video preload="auto">` |
| `width` | 동영상 플레이어 너비 | `<video width="640">` |
| `height` | 동영상 플레이어 높이 | `<video height="360">` |

### 1.3 preload 속성 값

| 값 | 설명 | 사용 상황 |
| --- | --- | --- |
| `none` | 비디오 파일 미리 로딩 안 함 | 트래픽 최소화, 페이지 로딩 속도 개선 필요 시 |
| `metadata` | 메타데이터만 미리 로드(영상 길이 등) | 사용자 경험과 트래픽 절약 사이 균형 필요 시 |
| `auto` | 비디오 파일 미리 로딩 | 사용자가 곧 영상을 볼 가능성이 높을 때 |

### 1.4 Source 태그

`<source>` 태그를 사용하면 다양한 형식의 미디어 파일을 제공하여 브라우저 호환성을 향상시킬 수 있습니다.

```html
<video controls poster="preview.jpg" width="450" height="300">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <source src="movie.ogv" type="video/ogg">
  <track kind="subtitles" src="subtitles.vtt" srclang="ko" label="한국어">
  이 브라우저는 video 태그를 지원하지 않습니다.
</video>

```

### 1.5 Track 태그

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `kind` | 텍스트 트랙의 종류 | `<track kind="subtitles">` |
| `src` | 텍스트 트랙 파일의 URL | `<track src="subtitles.vtt">` |
| `srclang` | 텍스트 트랙의 언어 | `<track srclang="ko">` |
| `label` | 텍스트 트랙의 제목 | `<track label="한국어">` |

## 2. 오디오(Audio)

### 2.1 개요

`<audio>` 태그는 웹 페이지에 소리 파일을 삽입할 수 있게 해주는 HTML5 요소입니다. MP3, WAV, Ogg 등의 포맷을 지원합니다.

### 2.2 주요 속성

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `src` | 오디오 파일의 URL | `<audio src="song.mp3">` |
| `controls` | 재생, 정지 등 제어 버튼 표시 | `<audio controls>` |
| `autoplay` | 페이지 로드 시 자동 재생 | `<audio autoplay>` |
| `loop` | 오디오 반복 재생 | `<audio loop>` |
| `preload` | 페이지 로드 시 미리 로드할 콘텐츠 지정 | `<audio preload="auto">` |

### 2.3 사용 예시

```html
<audio controls>
  <source src="song.ogg" type="audio/ogg">
  <source src="song.mp3" type="audio/mpeg">
  이 브라우저는 audio 태그를 지원하지 않습니다.
</audio>

```

### 2.4 자동 재생 관련 주의사항

자동 재생(`autoplay`)은 사용자 경험을 저해할 수 있으므로 가급적 지양하는 것이 좋습니다. 많은 최신 브라우저에서는 사용자 상호작용 없이 소리가 나오는 미디어의 자동 재생을 차단하고 있습니다. 음악이나 영상 관련 웹사이트 등 자동 재생이 필수적인 경우에는 `muted` 속성과 함께 사용하는 것을 고려해볼 수 있습니다.

## 3. 인라인 프레임(iframe)

### 3.1 개요

`<iframe>` 태그는 현재 웹페이지 내에 다른 HTML 페이지를 삽입할 수 있게 해주는 요소입니다. 동영상, 지도, 소셜 미디어 포스트 등 외부 콘텐츠를 손쉽게 삽입하는 데 주로 사용됩니다.

### 3.2 주요 속성

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `src` | 삽입될 문서의 URL | `<iframe src="<https://example.com>">` |
| `width` | iframe의 너비 | `<iframe width="560">` |
| `height` | iframe의 높이 | `<iframe height="315">` |
| `allow` | iframe에서 허용할 기능 지정 | `<iframe allow="camera; microphone">` |
| `scrolling` | 스크롤바 표시 여부 | `<iframe scrolling="auto">` |
| `loading` | 로딩 방식 지정 | `<iframe loading="lazy">` |

### 3.3 사용 예시 - 유튜브 영상 삽입

```html
<iframe
  width="560"
  height="315"
  src="<https://www.youtube.com/embed/VIDEO_ID>"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

```

### 3.4 성능 최적화 팁

페이지 로딩 속도를 향상시키기 위해, 메인 콘텐츠가 로드된 후 JavaScript를 사용하여 iframe의 src 속성을 설정하는 방법이 권장됩니다. 이렇게 하면 초기 페이지 로딩 시간이 단축되어 SEO 및 사용자 경험이 향상됩니다.

```jsx
// 페이지 로드 완료 후 iframe src 설정
window.addEventListener('load', () => {
  document.getElementById('youtubeFrame').src = '<https://www.youtube.com/embed/VIDEO_ID>';
});

```

### 3.5 주의사항

일부 웹사이트는 보안 및 브랜드 이미지 보호를 위해 iframe을 통한 삽입을 거부할 수 있습니다. 이 경우 "연결을 거부했습니다"라는 메시지가 표시될 수 있습니다.

## 4. SVG(Scalable Vector Graphics)

### 4.1 개요

SVG는 XML 기반의 2차원 벡터 그래픽 형식으로, 크기를 조절해도 이미지 품질이 저하되지 않습니다. 로고, 아이콘, 도형 등을 구현하는 데 적합합니다. HTML 태그의 집합으로 구성되어 있어 CSS와 JavaScript로 조작 가능합니다.

### 4.2 SVG의 장단점

| 장점 | 단점 |
| --- | --- |
| 확대해도 품질 저하 없음 | 복잡한 이미지의 경우 파일 크기가 커질 수 있음 |
| 크기 변경에도 용량 증가 없음 | 매우 세밀한 이미지에는 적합하지 않을 수 있음 |
| CSS와 JavaScript로 조작 가능 | 브라우저 지원이 비트맵 이미지보다 제한적일 수 있음 |
| 접근성 향상 가능 | 복잡한 SVG는 렌더링에 부담이 될 수 있음 |

### 4.3 사용 방법 비교

### 4.3.1 이미지 태그로 사용

```html
<img src="icon.svg" alt="아이콘 설명">

```

| 장점 | 단점 |
| --- | --- |
| 간단한 구현 | 추가적인 HTTP 요청 발생 |
| 외부 파일로 관리하여 재사용 및 캐싱 가능 | JavaScript로 내부 조작 어려움 |
| alt 속성으로 접근성 향상 | CSS로 SVG 내부 스타일링 제한적 |

### 4.3.2 CSS 배경으로 사용

```css
.icon {
  background: url(icon.svg) no-repeat center / contain;
}

```

| 장점 | 단점 |
| --- | --- |
| 간단한 구현 | SVG 내부 요소 조작 불가 |
| CSS의 background-* 속성으로 제어 가능 | SVG 기능 제한(애니메이션 등) |
| 요소에 직접 스타일 적용 가능 | 접근성 관련 속성 추가 어려움 |

### 4.3.3 인라인으로 사용

```html
<button>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="<http://www.w3.org/2000/svg>">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
  </svg>
  즐겨찾기
</button>

```

| 장점 | 단점 |
| --- | --- |
| DOM에 직접 포함되어 JavaScript로 조작 가능 | HTML 파일 크기 증가 |
| CSS로 스타일링 가능 (fill, stroke 등) | 캐싱 불가능 |
| 추가적인 HTTP 요청 없음 | 코드 반복 시 페이지 크기가 커짐 |
| 동적으로 SVG 내용 변경 가능 | 코드의 가독성 저하 가능성 |

### 4.4 사용 지침

- 간단한 사용: 조작이 필요 없는 경우 → `<img>` 태그나 CSS `background`
- 복잡한 조작: 요소 수정이나 애니메이션 필요 → 인라인 SVG

## 5. Canvas

### 5.1 개요

`<canvas>` 요소는 JavaScript를 사용하여 그래픽을 그릴 수 있는 HTML5 요소입니다. 픽셀 기반의 비트맵 방식으로, 복잡한 애니메이션이나 게임 개발에 적합합니다.

### 5.2 기본 구조

```html
<canvas id="myCanvas" width="200" height="200"></canvas>

<script>
  // Canvas 객체 가져오기
  const canvas = document.getElementById('myCanvas');
  // 2D 렌더링 컨텍스트 가져오기
  const ctx = canvas.getContext('2d');

  // 사각형 그리기
  ctx.fillStyle = '#e9e9e9';
  ctx.fillRect(10, 10, 150, 150);
</script>

```

### 5.3 Canvas vs SVG 비교

| 특성 | Canvas | SVG |
| --- | --- | --- |
| 렌더링 방식 | 픽셀 기반 (비트맵) | 벡터 기반 |
| 확장성 | 확대 시 품질 저하 | 확대해도 품질 유지 |
| 퍼포먼스 | 많은 객체에 유리 | 적은 객체에 유리 |
| 조작 방법 | JavaScript만으로 조작 | HTML, CSS, JavaScript로 조작 가능 |
| DOM 접근성 | 픽셀 단위로만 조작(개별 요소 없음) | 개별 요소에 접근 가능 |
| 적합한 용도 | 게임, 복잡한 애니메이션 | 로고, 아이콘, 차트 |

### 5.4 주요 Canvas 메서드

| 메서드 | 설명 | 예시 |
| --- | --- | --- |
| `getContext()` | 렌더링 컨텍스트 가져오기 | `ctx = canvas.getContext('2d')` |
| `fillRect()` | 색칠된 사각형 그리기 | `ctx.fillRect(x, y, width, height)` |
| `strokeRect()` | 테두리만 있는 사각형 그리기 | `ctx.strokeRect(x, y, width, height)` |
| `clearRect()` | 지정된 영역 지우기 | `ctx.clearRect(x, y, width, height)` |
| `beginPath()` | 새로운 경로 시작 | `ctx.beginPath()` |
| `moveTo()` | 경로의 시작점 이동 | `ctx.moveTo(x, y)` |
| `lineTo()` | 현재 위치에서 지정 위치까지 선 그리기 | `ctx.lineTo(x, y)` |
| `arc()` | 원 또는 호 그리기 | `ctx.arc(x, y, radius, startAngle, endAngle)` |
| `fill()` | 경로 내부 채우기 | `ctx.fill()` |
| `stroke()` | 경로 테두리 그리기 | `ctx.stroke()` |

### 5.5 Canvas 예시 - 간단한 애니메이션

```html
<canvas id="animationCanvas" width="300" height="300"></canvas>

<script>
  const canvas = document.getElementById('animationCanvas');
  const ctx = canvas.getContext('2d');
  let x = 0;

  function animate() {
    // 캔버스 지우기
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 원 그리기
    ctx.beginPath();
    ctx.arc(x, 150, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // x 위치 업데이트
    x = (x + 2) % (canvas.width + 40) - 20;

    // 애니메이션 반복
    requestAnimationFrame(animate);
  }

  animate();
</script>

```

## 멀티미디어 요소 사용 시 고려사항

### 접근성

- 비디오와 오디오에는 항상 대체 콘텐츠나 자막을 제공하세요.
- SVG 요소에 적절한 `aria-*` 속성과 `<title>`, `<desc>` 요소를 포함하세요.
- Canvas 요소를 사용할 때 접근성을 위한 대체 콘텐츠를 제공하세요.

### 성능 최적화

- 비디오와 오디오 파일은 적절하게 압축하여 사용하세요.
- 필요한 경우에만 `autoplay`를 사용하고, 가능하면 `muted`와 함께 사용하세요.
- iframe은 필요할 때 지연 로딩(lazy loading)하는 것이 좋습니다.
- 복잡한 SVG는 최적화 도구를 사용하여 파일 크기를 줄이세요.
- Canvas는 필요한 영역만 다시 그려 성능을 최적화하세요.

### 크로스 브라우징

- 다양한 형식의 미디어 파일을 `<source>` 태그로 제공하세요.
- 오래된 브라우저를 위한 대체 콘텐츠를 항상 포함하세요.
- SVG와 Canvas 지원이 제한된 환경을 위한 대안을 준비하세요.

---

# 최종 요약: HTML 멀티미디어 요소 핵심 정리

## 비디오(Video)

- **기본 구문**: `<video src="movie.mp4" controls></video>`
- **핵심 속성**: `controls`, `autoplay`, `loop`, `poster`, `preload`
- **크로스 브라우징**: `<source>` 태그로 여러 형식 제공 (MP4, WebM, Ogg)
- **자막 지원**: `<track>` 태그로 자막 파일 연결 가능
- **주의사항**: `autoplay`는 사용자 경험을 해칠 수 있으므로 신중히 사용

## 오디오(Audio)

- **기본 구문**: `<audio src="song.mp3" controls></audio>`
- **핵심 속성**: `controls`, `autoplay`, `loop`, `preload`
- **지원 포맷**: MP3, WAV, Ogg
- **크로스 브라우징**: `<source>` 태그로 여러 형식 제공
- **주의사항**: `autoplay`는 많은 브라우저에서 제한됨

## iframe

- **기본 구문**: `<iframe src="page.html" width="500" height="300"></iframe>`
- **주요 용도**: 외부 콘텐츠(YouTube, 지도 등) 삽입
- **핵심 속성**: `src`, `width`, `height`, `allow`
- **성능 개선**: 필요 시 지연 로딩으로 초기 페이지 로딩 시간 단축
- **제한사항**: 일부 사이트는 iframe 삽입을 거부할 수 있음

## SVG

- **특징**: 벡터 기반, 확대해도 품질 저하 없음
- **구현 방법**:
    - 이미지 태그: `<img src="icon.svg" alt="아이콘">` - 간단히 사용, 조작 불가
    - CSS 배경: `background: url(icon.svg)` - 스타일링 쉬움, 조작 불가
    - 인라인: `<svg>...</svg>` - DOM 일부로 CSS/JS 조작 가능
- **적합한 용도**: 로고, 아이콘, 단순한 그래픽, 반응형 이미지

## Canvas

- **특징**: 픽셀 기반, JavaScript로 그래픽 생성 및 조작
- **기본 구문**: `<canvas id="myCanvas"></canvas>` + JS 코드
- **주요 메서드**: `getContext()`, `fillRect()`, `beginPath()`, `arc()`, `fill()`
- **적합한 용도**: 게임, 복잡한 애니메이션, 실시간 데이터 시각화
- **SVG와 차이점**: Canvas는 픽셀 기반으로 확대 시 품질 저하, 많은 객체 처리에 유리

## 공통 고려사항

- **접근성**: 모든 멀티미디어 요소에 적절한 대체 콘텐츠 제공
- **성능**: 파일 최적화, 필요 시 지연 로딩 활용
- **크로스 브라우징**: 다양한 형식 지원, 대체 콘텐츠 준비
- **모바일 최적화**: 가벼운 파일 사용, 반응형 설계 구현

# HTML 멀티미디어 요소 복습 퀴즈

## 퀴즈 1

**다음 중 파일 업로드 진행 상황을 표시하기에 가장 적합한 HTML 요소는 무엇인가요?**

A) `<meter value="50" max="100">`

B) `<progress value="50" max="100">`

C) `<input type="range" value="50" max="100">`

D) `<canvas id="progressBar">`

**정답: B) `<progress value="50" max="100">`**

**해설:** `<progress>` 요소는 작업의 진행 상황을 나타내는 데 특화된 요소로, 파일 업로드와 같은 진행 중인 작업의 완료 정도를 시각적으로 표현하기에 가장 적합합니다. `<meter>` 요소는 고정된 값의 상태(예: 디스크 사용량)를 나타내는 데 적합하고, `<input type="range">`는 사용자 입력용이며, `<canvas>`는 그래픽을 그리는 데 사용됩니다.

## 퀴즈 2

**HTML5 비디오 태그에서 'preload' 속성의 'auto' 값은 무엇을 의미하나요?**

A) 모든 브라우저에서 자동 재생을 보장한다

B) 비디오 파일을 미리 로딩하지 않는다

C) 비디오 파일의 메타데이터만 미리 로딩한다

D) 비디오 파일을 미리 로딩하여 재생 준비를 한다

**정답: D) 비디오 파일을 미리 로딩하여 재생 준비를 한다**

**해설:** `preload="auto"` 속성은 브라우저에게 사용자가 곧 영상을 볼 것이라고 예상되므로 비디오 파일을 미리 로딩하여 즉시 재생할 수 있도록 준비하라고 지시합니다. `none`은 미리 로딩하지 않으며, `metadata`는 메타데이터만 로딩하는 설정입니다. 이 속성은 자동 재생과는 관계없으며, 자동 재생은 `autoplay` 속성으로 제어합니다.

## 퀴즈 3

**SVG를 웹페이지에 삽입하는 방법 중, JavaScript로 내부 요소를 동적으로 조작해야 할 때 가장 적합한 방식은?**

A) `<img src="icon.svg" alt="아이콘">`

B) CSS의 `background-image: url(icon.svg)`

C) `<iframe src="icon.svg"></iframe>`

D) `<svg>...</svg>` (인라인 SVG)

**정답: D) `<svg>...</svg>` (인라인 SVG)**

**해설:** 인라인 SVG는 HTML 문서의 DOM에 직접 포함되어 JavaScript를 통해 개별 요소에 접근하고 조작할 수 있습니다. `<img>` 태그나 CSS `background-image`로 SVG를 삽입하면 이미지로만 취급되어 내부 요소에 접근할 수 없습니다. `<iframe>`을 사용하면 일부 조작이 가능하지만, 동일 출처 정책 제한과 DOM 접근의 복잡성 때문에 인라인 SVG보다 덜 효율적입니다.

## 퀴즈 4

**Canvas와 SVG의 차이점에 관한 설명 중 옳은 것은?**

A) Canvas는 벡터 기반, SVG는 비트맵 기반이다

B) SVG는 확대 시 품질이 저하되지만, Canvas는 품질이 유지된다

C) Canvas는 개별 요소에 접근할 수 있지만, SVG는 불가능하다

D) Canvas는 픽셀 기반이므로 확대 시 품질이 저하될 수 있다

**정답: D) Canvas는 픽셀 기반이므로 확대 시 품질이 저하될 수 있다**

**해설:** Canvas는 픽셀(비트맵) 기반 렌더링 방식을 사용하기 때문에 이미지를 확대하면 품질이 저하될 수 있습니다. 반면 SVG는 벡터 기반으로 수학적 공식에 의해 그려지므로 확대해도 품질이 유지됩니다. 또한 SVG는 DOM의 일부로 개별 요소에 접근 가능하지만, Canvas는 픽셀 단위로만 조작 가능하고 개별 요소를 구분하지 않습니다.

## 퀴즈 5

**HTML5 오디오 요소를 사용할 때 크로스 브라우징을 위한 가장 좋은 방법은?**

A) 모든 브라우저가 지원하는 단일 오디오 형식만 사용한다

B) `<audio>` 태그 내에 여러 `<source>` 태그를 사용하여 다양한 형식 제공

C) Flash 기반 오디오 플레이어를 대체 콘텐츠로 제공한다

D) JavaScript를 사용하여 브라우저별로 다른 오디오 플레이어를 로드한다

**정답: B) `<audio>` 태그 내에 여러 `<source>` 태그를 사용하여 다양한 형식 제공**

**해설:** 크로스 브라우징을 위한 가장 효과적인 방법은 `<audio>` 태그 내에 여러 `<source>` 태그를 사용하여 MP3, WAV, Ogg 등 다양한 오디오 형식을 제공하는 것입니다. 브라우저는 자신이 지원하는 첫 번째 형식을 선택하여 재생합니다. 모든 브라우저가 공통적으로 지원하는 단일 오디오 형식은 없으며, Flash는 더 이상 권장되지 않습니다. JavaScript로 브라우저별 처리를 하는 방식은 복잡하고 유지 관리가 어렵습니다.

## 퀴즈 6

**iframe을 사용할 때 웹페이지 성능을 최적화하는 가장 좋은 방법은?**

A) 모든 iframe에 `scrolling="no"` 속성 추가

B) 가능한 많은 iframe을 사용하여 병렬 로딩 활용

C) 메인 콘텐츠 로드 후 JavaScript로 iframe의 src 속성 설정

D) CSS로 iframe을 숨겼다가 사용자 요청 시 표시

**정답: C) 메인 콘텐츠 로드 후 JavaScript로 iframe의 src 속성 설정**

**해설:** 웹페이지의 초기 로딩 속도를 향상시키기 위한 가장 효과적인 방법은 중요한 메인 콘텐츠를 먼저 로드하고, JavaScript를 사용하여 나중에 iframe의 src 속성을 설정하는 것입니다. 이 방식은 iframe의 콘텐츠가 메인 페이지의 로딩을 차단하지 않게 하여 사용자가 더 빠르게 페이지를 이용할 수 있게 합니다. 또한 SEO 측정 시 중요한 지표인 페이지 로딩 시간을 개선할 수 있습니다.

## 퀴즈 7

**다음 중 `<video>` 태그에서 동영상 재생 전에 표시할 이미지를 지정하는 속성은?**

A) `thumbnail`

B) `preview`

C) `poster`

D) `cover`

**정답: C) `poster`**

**해설:** `poster` 속성은 비디오 플레이어에서 동영상이 재생되기 전에 표시될 이미지를 지정합니다. 이는 사용자에게 동영상의 내용을 미리 보여주거나, 동영상이 로드되는 동안 빈 화면 대신 의미 있는 콘텐츠를 제공하는 데 유용합니다. 예: `<video src="movie.mp4" poster="preview.jpg" controls></video>`. 나머지 속성들(`thumbnail`, `preview`, `cover`)은 HTML5 비디오 태그의 표준 속성이 아닙니다.

## 퀴즈 8

**HTML Canvas에서 원을 그리는 데 사용되는 메서드는?**

A) `ctx.circle()`

B) `ctx.drawCircle()`

C) `ctx.arc()`

D) `ctx.ellipse()`

**정답: C) `ctx.arc()`**

**해설:** Canvas 2D 렌더링 컨텍스트에서 원이나 호를 그리는 데 사용되는 메서드는 `arc()`입니다. 이 메서드는 중심점 좌표, 반지름, 시작 각도, 끝 각도를 매개변수로 받습니다. 예: `ctx.arc(100, 100, 50, 0, Math.PI * 2)` - 이 코드는 (100,100) 위치에 반지름 50픽셀의 완전한 원을 그립니다. 원을 실제로 화면에 표시하려면 이후에 `ctx.stroke()` 또는 `ctx.fill()` 메서드를 호출해야 합니다.

## 퀴즈 9

**다음 중 `autoplay` 속성을 사용할 때 고려해야 할 가장 중요한 사항은?**

A) 모든 브라우저에서 자동 재생이 작동하도록 Flash 폴백(fallback) 제공

B) 사용자 경험을 고려하여 예상치 못한 소리가 나지 않도록 주의

C) 자동 재생 시 항상 최고 화질로 미디어가 재생되도록 설정

D) 자동 재생 기능이 작동하지 않는 브라우저 사용자에게 항상 알림 표시

**정답: B) 사용자 경험을 고려하여 예상치 못한 소리가 나지 않도록 주의**

**해설:** 자동 재생은 사용자가 예상치 못한 시점에 소리가 나오면 부정적인 경험을 줄 수 있으므로 신중히 사용해야 합니다. 많은 최신 브라우저는 사용자 상호작용 없이 소리가 재생되는 미디어의 자동 재생을 차단합니다. 필요한 경우에는 `muted` 속성과 함께 사용하는 것이 좋습니다. Flash는 더 이상 지원되지 않으며, 자동 재생이 되지 않는 것이 오히려 표준적인 동작이 되고 있으므로 별도 알림은 불필요할 수 있습니다.

## 퀴즈 10

**다음 중 SVG와 Canvas를 사용할 때 접근성 측면에서 가장 좋은 방법은?**

A) SVG와 Canvas 모두 기본적으로 접근성이 보장되므로 추가 조치 필요 없음

B) SVG에는 `<title>`과 `<desc>` 요소, Canvas에는 대체 콘텐츠 제공

C) 두 요소 모두 `alt` 속성으로 대체 텍스트 제공

D) 접근성은 중요하지 않으므로 디자인에만 집중

**정답: B) SVG에는 `<title>`과 `<desc>` 요소, Canvas에는 대체 콘텐츠 제공**

**해설:** 접근성을 고려할 때, SVG는 `<title>` 요소로 제목을, `<desc>` 요소로 설명을 제공하여 스크린 리더가 읽을 수 있게 해야 합니다. 또한 `aria-*` 속성을 추가하여 접근성을 더 향상시킬 수 있습니다. Canvas는 픽셀 기반으로 접근성이 제한되므로, `<canvas>` 태그 사이에 대체 콘텐츠(텍스트 설명이나 대체 이미지)를 제공해야 합니다. SVG와 Canvas 모두 기본적으로 접근성이 보장되지 않으며, `alt` 속성은 `<img>` 태그에만 적용됩니다.

## 💭 오늘의 회고

1. **배운 점**
    - 시멘틱 태그 분석과 함께 video, audio, iframe, svg 등의 실제 활용법을 익혔다.
    - 시멘틱 태그의 틀을 정하고 마크업하는 방법을 배웠다.
2. **어려운 점/개선할 점**
    - 시멘틱 태그를 보는것과 직접 하는것은 다르다.
3. 코드 리뷰 & 피드백
    
    ```html
    <!DOCTYPE html>
    <html lang="ko-KR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
      </head>
      <body>
        <header>
            <h1><img src="#" alt="당근로고"/>당근</h1>
            <ul>
                <li>중고거래</li>
                <li>동네업체</li>
                <li>알바</li>
                <li>부동산</li>
                <li>중고차 직거래</li>
            </ul>
            <input type="text" placeholder="물품이나 동네를 검색해보세요요" />
            <button>채팅하기</button>
        </header>
        <main>
            <section>
                <header>
                    <!-- css백그라운드 이미지 -->
                </header>
                <h2>당신 근처의 지역 생활 커뮤니티</h2>
                <p>동네라서 가능한 모든 것 당근에서 가까운 이웃과 함께해요</p>
                <ul>
                    <li><a href="#">구글플레이 다운</a></li>
                    <li><a href="#">앱스토어 다운</a></li>
                </ul>
            </section>
            <section>
                <header>
                    <!-- css백그라운드 이미지 -->
                </header>
                <h2>중고거래</h2>
                <h3>믿을만한 이웃 간 중고거래</h3>
                <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요/</p>
                <ul>
                    <li><a href="#">인기매물 보기</a></li>
                    <li><a href="#">믿을 수 있는 중고거래</a></li>
                </ul>
            </section>
            <section>
                <header>
                    <!-- css백그라운드 이미지 -->
                </header>
                <h2>동네생활</h2>
                <h3>이웃만 아는 동네 정보와 이야기</h3>
                <p>우리동네의 다양한 정보와 이야기를 공감과 댓글로 나누어요.</p>
                <ul>
                    <li><img src="#" alt="동네모임"/><h4>동네모임</h4><p>근처 이웃들과 동네이야기를 해보세요.</p></li>
                    <li><img src="#" alt="동네질문"/><h4>동네질문</h4><p>궁금한 게 있을 땐 이웃에 물어보세요.</p></li>
                    <li><img src="#" alt="동네분실센터"/><h4>동네분실센터</h4><p>무언가를 잃어버렸다면 글을 올려보세요.</p></li>
                </ul>
            </section>
            <section>
                <header>
                    <!-- css백그라운드 이미지 -->
                </header>
                <h2>알바</h2>
                <h3>걸어서 10분! 동네 알바 구하기기</h3>
                <p>당근하듯 쉽고, 편하게 당근 알바로 동네 알바를 구할 수 있어요.</p>
                <a href="#">내근처 알바 보기</a>
            </section>
            <section>
                <header>
                    <!-- css백그라운드 이미지 -->
                </header>
                <h2>동네업체</h2>
                <h3>내 근처에서 찾는 동네업체체</h3>
                <p>이웃들의 추천 후기를 확인하고 동네 곳곳의 업체들을 찾을 수 있어요.</p>
                <a href="#">당근 동네업체 보기기</a>
            </section>
            <nav>
                <h2>당근마켓 링크모음음</h2>
                <ul>
                    <li><a href="#">중고거래</a></li>
                    <li><a href="#">동네업체</a></li>
                    <li><a href="#">당근알바</a></li>
                    <li><a href="#">부동산</a></li>
                    <li><a href="#">중고차 직거래</a></li>
                    <li><a href="#">당근비즈니스</a></li>
                    <li><a href="#">채팅하기</a></li>
                    <li><a href="#">자주 묻는 질문</a></li>
                    <li><a href="#">회사 소개</a></li>
                    <li><a href="#">인재 채용용</a></li>
                </ul>
                <h3>당근 앱 다운로드</h3>
                <ul>
                    <li><a href="#">앱스토어</a></li>
                    <li><a href="#">구글플레이</a></li>
                </ul>
            </nav>
            <footer>
                <h2>당근 회사 정보</h2>
                <address>
                    <p>대표명, 회사명 전화번호 등등..</p>
                </address>
                <ul>
                    <li>제휴문의 등등..</li>
                </ul>
                <ul>
                    <li>이용약관 등등..</li>
                </ul>
                <ul>
                    <li><a href="#">sns들</a></li>
                </ul>
            </footer>
        </main>
      </body>
    </html>
    ```
    
    - 강사님의 피드백
        
        승훈님. 코드리뷰 드립니다.
        
        1. h1의 경우 alt속성에 그냥 '당근' 이라고만 적어주셔도 될 것 같아요. 보통 로고 자체를 텍스트 형태로 넣지 않고 이미지 형태로 제공하기 때문입니다.
        `<h1><img src="#" alt="당근" /></h1>`
        2. header 내에 주요 탐색 메뉴는 nav 태그 감싸주시면 좋을 것 같습니다.
        3. 내일 배우겠지만 form 요소는 `<form>` 태그로 감싸주셔야 합니다.
        4. section 내부의 header는 불필요할 것 같아요!
        
                <header>
                  <!-- css백그라운드 이미지 -->
                </header>```
        5. h3 및 h4는 생략해주셔도 될 것 같아요. '믿을만한 이웃 간 중고거래' 등의 멘트는 새로운 주제를 나타내는 제목이 아니라 그냥 h2의 내용을 설명해주는 문장이기 때문에 h2까지만 넣어도 될 것 같습니다.
        6. ` <img src="#" alt="동네모임" />` 여기 있는 아이콘은 스크린리더가 굳이 읽어주지 않아도 되는 시각적 요소라고 판단됩니다. alt 비워주셔도 됩니다.