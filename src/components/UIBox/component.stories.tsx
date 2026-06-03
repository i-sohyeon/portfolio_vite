import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIBox } from "./component";

const meta: Meta<typeof UIBox.Article> = {
  title: "Components/UIBox",
  component: UIBox.Article, // 기본 컴포넌트로 지정
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["content", "flex", "card"] },
    bgColor: { control: "radio", options: ["gray", "blue", "pink"] },
    bgPattern: { control: "radio", options: ["check", "", ""] },
    display: { control: "select", options: ["block", "flex", "grid"] },
    jContent: { control: "select", options: ["flex-start", "center", "flex-end", "space-between"] },
    aItems: { control: "select", options: ["flex-start", "center", "flex-end", "stretch"] },
  },
};

export default meta;

// ==========================================
// 1. Article 컴포넌트 스토리
// ==========================================
type ArticleStory = StoryObj<typeof UIBox.Article>;

export const ArticleBox: ArticleStory = {
  name: "UIBox.Article",
  render: (args) => <UIBox.Article { ...args } />,
  args: {
    children: (
      <div style={{ padding: "20px", border: "1px dashed #ccc" }}>
        아티클 컴포넌트 영역입니다. (내부 콘텐츠)
      </div>
    ),
  },
};

// ==========================================
// 2. Div 컴포넌트 스토리
// ==========================================
type DivStory = StoryObj<typeof UIBox.Div>;

export const DivBox: DivStory = {
  name: "UIBox.Div",
  render: (args) => <UIBox.Div { ...args } />,
  args: {
    bgColor: "gray",
    display: "flex",
    children: (
      <div style={{ padding: "10px", background: "#ffebd2" }}>
        Flex 정렬된 내부 자식 요소입니다.
      </div>
    ),
  },
};

// ==========================================
// 3. Scroll 컴포넌트 스토리 (이미지 및 링크 포함)
// ==========================================
type ScrollStory = StoryObj<typeof UIBox.Scroll>;

export const ScrollBox: ScrollStory = {
  name: "UIBox.Scroll",
  render: (args) => <UIBox.Scroll { ...args } />,
  args: {
    href: "https://github.com", // 이동할 링크
    imgSrc: "https://picsum.photos/300/200", // 테스트용 랜덤 이미지 주소
    children: (
      <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
        아래 이미지를 클릭하면 해당 링크로 이동합니다.
      </p>
    ),
  },
};