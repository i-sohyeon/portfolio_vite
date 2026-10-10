import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIDivider } from "./component";

const meta: Meta<typeof UIDivider> = {
  title: "Components/UIDivider",
  component: UIDivider,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { variant: { control: "select", options: ["type1", "type2"] }, margin: { control: "text", description: "구분선 바깥 여백" } },
};

export default meta;
type Story = StoryObj<typeof UIDivider>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { variant: "type1", margin: "24px 0" },

};

export const Type2: Story = { args: { ...Default.args, variant: "type2" } };
