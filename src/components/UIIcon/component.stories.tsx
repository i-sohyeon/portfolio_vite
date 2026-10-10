import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIIcon } from "./component";

const meta: Meta<typeof UIIcon> = {
  title: "Components/UIIcon",
  component: UIIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { variant: { control: "select", options: ["github", "tistory", "codepen", "mail", "arrow-down"] }, size: { control: "select", options: ["sm", "md", "lg"] } },
};

export default meta;
type Story = StoryObj<typeof UIIcon>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { variant: "github", size: "lg" },

};

