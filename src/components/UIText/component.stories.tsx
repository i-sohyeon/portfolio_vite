import type { Meta, StoryObj } from "@storybook/react-vite";
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
  // Link에 필요한 Router는 전역 preview 데코레이터에서 제공합니다.
  args: {
    size: "md",
    children: "섹션 제목입니다",
    button: "더보기",
    linkTo: "/about",
    color:'black'
  },
};