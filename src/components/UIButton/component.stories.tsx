import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIButton } from "./component";

const meta: Meta<typeof UIButton.Text> = {
  title: "Components/UIButton",
  component: UIButton.Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UIButton.Text>;

export const Default: Story = {
  args: {
    children: "버튼",
  },
};