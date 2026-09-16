# 🚀 [portfolio_vite]
> React + Vite 기반으로 컴포넌트를 구성하고 SCSS Modules와 CSSComb을 활용하여 유지보수성과 일관성을 고려한 반응형 포트폴리오 웹사이트를 구현.

---

## 🔗 Live Demo & Links
* **배포 주소**: [https://i-sohyeon.github.io/portfolio_vite/](https://i-sohyeon.github.io/portfolio_vite/)
* **GitHub 저장소**: [[https://github.com/your-username/repository-name](https://github.com/i-sohyeon/portfolio_vite)](https://github.com/your-username/repository-name)
* **실행 방법** : [https://github.com/i-sohyeon/portfolio_vite/blob/main/GETTING_STARTED.md](https://github.com/i-sohyeon/portfolio_vite/blob/main/GETTING_STARTED.md)
* **컴포넌트 스토리북** : [https://main--6a1c0e1b70232ec461f8711c.chromatic.com/](https://main--6a1c0e1b70232ec461f8711c.chromatic.com/)
  * 스토리북은 현재 업데이트중입니다.
  
---

## 🛠 Tech Stack

| 분류 | 기술 스택 |
| --- | --- |
| **Build Tool** | Vite |
| **Framework** | React |
| **Styling** | Sass (SCSS Modules) |
| **CSS Formatting** | CSSComb |
| **UI Component / Docs** | Storybook |
| **UI Interaction** | Swiper |
| **Deployment** | GitHub Pages |

---

## 💡 Key Architectural Highlights (기술적 특징)

### 1. CSS Modules (`*.module.scss`) 기반의 모듈화 스타일링
- 컴포넌트 단위로 `module.scss`를 작성하여 전역 클래스명 충돌을 방지.
- 각 컴포넌트와 스타일 파일을 함께 관리하여 코드의 가독성과 유지보수성 향상.
- Sass의 변수와 Nesting을 활용하여 반복되는 스타일을 효율적으로 관리.

### 2. CSSComb을 활용한 CSS 코드 일관성 유지
- `csscomb`를 활용하여 CSS 속성 선언 순서를 일관되게 관리.
- `Layout → Box Model → Typography → Visual → Interaction` 순서로 속성을 정렬하여 스타일 코드를 쉽게 파악할 수 있도록 구성.
- 협업 및 유지보수 과정에서 코드 스타일의 일관성을 유지할 수 있도록 CSS 작성 규칙을 적용.

```scss
.example {
  /* Layout */
  display: flex;
  position: relative;

  /* Box Model */
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  /* Typography */
  font-size: 16px;
  line-height: 1.5;

  /* Visual */
  color: #333;
  background-color: #fff;

  /* Interaction */
  cursor: pointer;
}
```

### 3. Vite + Swiper를 활용한 UI/UX 구현

* Vite의 HMR을 활용하여 개발 과정에서 변경 사항을 빠르게 확인할 수 있도록 구성.
* Swiper를 활용하여 콘텐츠 슬라이드 UI를 구현.
* 화면 크기에 따라 슬라이드의 동작과 레이아웃이 자연스럽게 변경되도록 구성.


### 4. GitHub Pages를 통한 정적 사이트 배포

* Vite의 빌드 결과물을 GitHub Pages 환경에 맞게 구성하여 실제 배포 환경에서 페이지와 정적 리소스가 정상적으로 로드되도록 구현.


---

## ✨ 주요 기능 (Features)
* [기능 1] Swiper 기반의 메인 비주얼 슬라이드 구현
* [기능 2] 반응형 웹 디자인을 통한 모바일 / 태블릿 / 데스크톱 환경 대응
* [기능 3] 컴포넌트 단위의 UI 구성 및 스타일 모듈화
* [기능 4] 다양한 화면 크기를 고려한 레이아웃 및 인터랙션 구현

---
## 📱 Responsive Web

Desktop부터 Mobile까지 다양한 화면 크기에 대응할 수 있도록 반응형 레이아웃을 구현.

| 구분 | Breakpoint | 주요 대응 내용 |
| --- | --- | --- |
| **Desktop** | `1280px ~` | 전체 레이아웃 및 데스크톱 |
| **Tablet** | `768px ~ 1279px` | 태블릿 및 소형 데스크톱 대응 |
| **Tablet & Mobile** | `480px ~ 767px` | 모바일 가로 및 태블릿 세로 환경 대응 |
| **Mobile** | `0px ~ 479px` | 작은 모바일 화면 |

* CSS Media Query를 활용하여 화면 크기에 따라 레이아웃을 설정.
* 고정된 크기 사용을 최소화하고 유동적인 단위를 활용하여 다양한 화면에서 자연스럽게 대응하도록 구성.

---

## ♿ Semantic Markup & Accessibility

### Semantic HTML

콘텐츠의 의미와 구조를 명확하게 전달할 수 있도록 HTML5 시맨틱 태그를 사용하여 마크업.

* `header` : 사이트의 헤더 영역
* `nav` : 주요 네비게이션 영역
* `main` : 페이지의 주요 콘텐츠
* `section` : 주제별 콘텐츠 영역
* `article` : 독립적인 콘텐츠 영역
* `footer` : 사이트 하단 정보 영역

단순히 화면을 구현하는 것을 넘어 콘텐츠의 구조와 의미를 고려하여 마크업하고, 유지보수성과 웹 접근성을 함께 고려.

### Accessibility

* 이미지의 콘텐츠와 목적에 맞는 대체 텍스트(`alt`)를 제공.
* 콘텐츠의 중요도에 따라 적절한 heading 구조를 사용.
* 의미에 맞는 HTML 요소를 사용하여 콘텐츠의 구조를 명확하게 표현.
* 버튼과 링크 등 인터랙션 요소의 역할을 명확하게 구분.

---

## 🧩 Styling Architecture

컴포넌트와 스타일을 함께 관리하는 구조로 프로젝트를 구성.

* 컴포넌트별 `*.module.scss` 사용
* 공통 Sass 변수 및 Mixins 분리
* 반복되는 스타일을 Sass 변수로 관리
* CSSComb을 활용한 속성 선언 순서 통일
* 전역 스타일과 컴포넌트 스타일을 분리하여 스타일 영향 범위를 최소화

## 📂 프로젝트 구조 (Directory Structure)
```
├── src
│   ├── Routes
│   ├── assets
│   │   ├── fonts
│   │   │   ├── BagelFatOne
│   │   │   ├── NotoSans
│   │   │   ├── Pretendard
│   │   │   ├── Roboto
│   │   │   └── Tenada
│   │   └── images
│   │       ├── background-pattern
│   │       ├── etc
│   │       ├── icons
│   │       └── swiper
│   ├── components
│   │   ├── UIAccordion
│   │   ├── UIBadge
│   │   ├── UIBanner
│   │   ├── UIBox
│   │   ├── UIButton
│   │   ├── UIContent
│   │   ├── UIDivider
│   │   ├── UIFooter
│   │   ├── UIHeader
│   │   ├── UIIcon
│   │   ├── UIParagraph
│   │   ├── UIPopup
│   │   ├── UIScroll
│   │   ├── UISwiper
│   │   ├── UITable
│   │   ├── UIText
│   │   └── UITextList
│   └── styles
│       ├── base
│       ├── layout
│       └── utils
└── storybook-static
```

## 📚 What I Learned

* Vite 기반 React 프로젝트의 구조와 빌드 환경을 이해.
* CSS Modules를 적용하여 컴포넌트 단위로 스타일을 관리하는 방법을 경험.
* Sass의 변수, Nesting 등을 활용하여 스타일 코드를 구조화.
* CSSComb을 활용하여 CSS 속성 선언 순서를 일관되게 관리하는 방법을 학습.
* 시맨틱 HTML을 기반으로 콘텐츠 구조를 설계하며 웹 접근성을 고려한 마크업.
* CSS Media Query를 활용하여 다양한 디바이스 환경에 대응하는 반응형 UI를 구현.
* GitHub Pages를 활용하여 프로젝트를 실제 배포 환경에 적용.
