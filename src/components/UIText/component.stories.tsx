import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom"; // Link 컴포넌트 에러 방지용
import { UIText } from "./component";

const meta: Meta<typeof UIText.Basic> = {
  title: "Components/UIText",
  component: UIText.Basic,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"] }, // 프로젝트의 실제 size 값들로 채워주세요
    weight: { control: "select", options: ["normal", "bold"] },
    color: { control: "select", options: ["white", "blue", "black"] },
    display: { control: "select", options: ["block", "inline", "inline-block"] },
  },
};

export default meta;

// ==========================================
// 1. Basic 컴포넌트
// ==========================================
type BasicStory = StoryObj<typeof UIText.Basic>;

export const BasicText: BasicStory = {
  name: "UIText.Basic",
  render: (args) => <UIText.Basic {...args} />,
  args: {
    variant: "p",
    size: "md", // 예시 값
    weight: "normal",
    children: "안녕하세요, 기본 텍스트 컴포넌트입니다.",
  },
};

// ==========================================
// 2. Header 컴포넌트
// ==========================================
type HeaderStory = StoryObj<typeof UIText.Header>;

export const HeaderText: HeaderStory = {
  name: "UIText.Header",
  render: (args) => <UIText.Header {...args} />,
  // 중요! Header 내부에 <Link>가 있으므로 라우터 환경을 데코레이터로 감싸줍니다.
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    size: "md",
    children: "섹션 제목입니다",
    button: "더보기",
    linkTo: "/about",
    color:'black'
  },
};