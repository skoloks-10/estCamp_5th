# 006 HTML

날짜: 2025/03/05
Subject: HTML
피드백 요청: No

## 📝 오늘 배운 내용 요약

1. 삼성전자홈페이지 섹션 나눠보기
    
    ![samsung-강사답안.png](samsung-%EA%B0%95%EC%82%AC%EB%8B%B5%EC%95%88.png)
    
2. 당근홈페이지 마크업 해보기
    
    ![carrot.png](carrot.png)
    
3. video 태그
    - 기본 구조: `<video src="" width="" height=""></video>` 형식을 사용한다.
    - `autoplay` 속성으로 동영상을 자동재생한다.
    - `controls` 속성으로 영상 조작 메뉴를 표시한다.
    - `loop` 속성으로 반복 재생을 수행한다.
    - `poster` 속성으로 재생 전 보여줄 이미지를 지정한다.
    - `preload` 속성으로 미리 로드 여부를 제어한다.
    - `<source src="" type="video/mp4">` 형태를 사용해 파일별로 브라우저가 지원하는 형식을 선택하여 재생할 수 있다.
    → 이를 통해 여러 브라우저에서 동일하게 보이는 크로스 브라우징과 사용자 친화적인 비디오 구현이 가능하다.
4. audio 태그
    - 기본 구조: `<audio src="" controls></audio>`를 사용한다.
    - `controls` 속성으로 조절 패널을 표시한다.
    - `autoplay`, `loop`, `preload` 속성을 사용해 자동재생, 반복재생, 미리 로드 여부를 설정한다.
    - `<source>` 태그를 활용하여 브라우저가 지원하는 형식에 맞게 재생할 수 있다.
5. iframe
    - 인라인 프레임을 구현한다.
    - 현재 페이지에 다른 HTML 페이지를 포함시켜 중첩하는 역할을 한다.
    - 기본 구조: `<iframe width="" height="" src=""></iframe>`를 사용한다.
    - `width`, `height`, `scrolling`, `longdesc`, `marginwidth`, `align`, `allow` 등의 속성을 통해 너비, 높이, 스크롤바, 내용 설명, 마진 공간, 정렬, 허용할 기능들을 설정한다.
6. svg
    - 벡터 그래픽이다.
    - 확대나 축소 시에 깨지지 않으며, 로고나 아이콘 등에서 주로 사용한다.
    - 크기를 키워도 용량이 증가하지 않는다.
    - 단, 복잡한 이미지의 경우 파일 사이즈가 커진다.
7. canvas
    - 그래픽이 주작업인경우에 사용한다.
8. 그 외 다양한 태그들
    - `<meter>`: 미터를 표시하는 데 사용한다.
    - `<progress>`: 진행 상태를 나타낸다.
    - `<dialog>`: 대화 상자를 구현한다.
    - `<template>`: 재사용 가능한 템플릿을 정의한다.
    - `<details>`와 `<summary>`: 추가 정보와 요약 정보를 제공한다.
    - `<picture>`: 다양한 화면 조건에 따라 이미지를 제공한다.
    - `<output>`: 계산 결과나 작업 결과를 표시한다.
    - `<time>`: 날짜와 시간을 표기한다.
    - 자바스크립트를 배운 후 활용해야 할 태그들이다.

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