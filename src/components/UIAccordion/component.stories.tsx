import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIAccordion } from "./component";

const meta: Meta<typeof UIAccordion.Line> = {
  title: "Components/UIAccordion",
  component: UIAccordion.Line,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { variant: { control: "select", options: ["line", "box"], description: "아코디언 스타일" }, defaultOpen: { control: "boolean", description: "처음 열림 여부" } },
};

export default meta;
type Story = StoryObj<typeof UIAccordion.Line>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { id: "storybook-accordion", title: "접근성 (Accessibility)", variant: "line", defaultOpen: false, children: "시맨틱 마크업과 키보드 접근성을 고려해 작업합니다." },

};

// 2. 펼쳐진 상태
export const Open: Story = { args: { ...Default.args, defaultOpen: true } };
