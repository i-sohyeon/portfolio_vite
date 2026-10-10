import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIButton } from "./component";

const meta: Meta<typeof UIButton.Text> = {
  title: "Components/UIButton",
  component: UIButton.Text,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { children: { control: "text" }, to: { control: "text", description: "이동할 경로" } },
};

export default meta;
type Story = StoryObj<typeof UIButton.Text>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { children: "경력기술서 확인하기", to: "/sub" },

};

