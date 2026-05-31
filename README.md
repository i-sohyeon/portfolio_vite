# Portfolio Vite

React + TypeScript + Vite 기반으로 제작된 포트폴리오 프로젝트입니다.

## 프로젝트 실행 환경

* Node.js 18 이상 권장
* npm 9 이상 권장

---

## 프로젝트 설치

### 1. 저장소 클론

```bash
git clone https://github.com/i-sohyeon/portfolio_vite.git
```

### 2. 프로젝트 폴더로 이동

```bash
cd portfolio_vite
```

### 3. 패키지 설치

```bash
npm install
```

---

## 개발 서버 실행

아래 명령어를 실행하면 개발 서버가 시작됩니다.

```bash
npm run dev
```

브라우저에서 표시되는 주소(예: [http://localhost:5173)로]) 접속하여 확인할 수 있습니다.

---

## 프로젝트 빌드

배포용 파일을 생성합니다.

```bash
npm run build
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

---

## 빌드 결과 미리보기

```bash
npm run preview
```

빌드된 결과를 로컬 환경에서 확인할 수 있습니다.

---

## GitHub Pages 배포

### 1. gh-pages 패키지 설치

```bash
npm install --save-dev gh-pages
```

---

### 2. package.json 설정

```json
{
  "homepage": "https://i-sohyeon.github.io/portfolio_vite"
}
```

scripts 항목에 아래 내용을 추가합니다.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

### 3. vite.config.ts 설정

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/your-repository/",
});
```

---

### 4. 배포 실행

```bash
npm run deploy
```

---

### 5. 배포가 완료 되면 아래의 링크에서 확인 가능
```text
https://i-sohyeon.github.io/portfolio_vite
```

---

## 기술 스택

* React
* TypeScript
* Vite
* SCSS
* Storybook

---

## 폴더 구조

```text
src
├── assets
├── components
├── pages
├── styles
├── hooks
├── utils
└── App.tsx
```

---

# Storybook
### 1. Storybook 빌드
```bash
npm run build-storybook
```
storybook-static 폴더 생성되는지 확인 필요


### 2. gh-pages 설치
```bash
npm install --save-dev gh-pages
```

### 3. 배포
```bash
npm run deploy-storybook
```

### 4. Chromatic 설정(포트폴리오와 같은 저장소에서 스토리북을 배포하면 덮어쓰기 됨)
```bash
npm install --save-dev chromatic
```

### 5. https://www.chromatic.com/ 접속 후 git 아이디로 가입 필요
`Add Project`를 선택하면

```
Project Token
chpt_xxxxxxxxxxxxxxxxxx
```
과 같은 프로젝트 토큰을 받음

```bash
npx chromatic --project-token=발급받은토큰 번호
```
커맨드 창에 복붙

배포가 완료되면 아래 주소에서 확인할 수 있습니다.

```text
https://6a1c0e1b70232ec461f8711c-lxdwxxomkk.chromatic.com/?path=/docs/components-uibutton--docs
```

---


## 라이선스

This project is licensed under the MIT License.





<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->
