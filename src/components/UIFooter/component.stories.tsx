import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIFooter } from "./component";

const meta: Meta<typeof UIFooter> = {
  title: "Components/UIFooter",
  component: UIFooter,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: {  },
};

export default meta;
type Story = StoryObj<typeof UIFooter>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: {},
  render: (args) => <UIFooter {...args} />,
};

