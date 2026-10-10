import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIParagraph } from "./component";

const meta: Meta<typeof UIParagraph> = {
  title: "Components/UIParagraph",
  component: UIParagraph,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { variant: { control: "select", options: ["solid", "line"] }, title: { control: "text" }, period: { control: "text" }, subTitle: { control: "text" }, desc: { control: "text" } },
};

export default meta;
type Story = StoryObj<typeof UIParagraph>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { title: "프로젝트 소개", period: "2025.12 ~", subTitle: "개인 포트폴리오", desc: "React와 TypeScript를 활용한 UI 컴포넌트 작업입니다.", variant: "solid" },

};

