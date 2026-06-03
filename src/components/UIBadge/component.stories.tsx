import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIBadge } from "./index";

const meta: Meta<typeof UIBadge> = {
  title: "Components/UIBadge",
  component: UIBadge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "line"],
    },
    bgColor: {
      control: "select",
      options: ["navy", "pink"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof UIBadge>;

export const Default: Story = {
  args: {
    variant: "solid",
    bgColor: "navy",
    size: "md",
    children: "Badge",
  },
};




