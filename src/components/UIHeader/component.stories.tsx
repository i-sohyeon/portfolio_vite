import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIHeader } from "./component";

const meta: Meta<typeof UIHeader> = {
  title: "Components/UIHeader",
  component: UIHeader,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: { size: { control: "select", options: ["md", "lg"] } },
};

export default meta;
type Story = StoryObj<typeof UIHeader>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { size: "md", children: "S.H.LEE" },
  render: (args) => <div style={{ minHeight: 160 }}><UIHeader {...args} /></div>,
};

