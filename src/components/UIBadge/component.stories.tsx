import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIBadge } from "./index";

const meta: Meta<typeof UIBadge> = {
  title: "Components/UIBadge",
  component: UIBadge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "line"],
      description: "뱃지의 스타일 형태를 지정합니다.",
    },
    bgColor: {
      control: "select",
      options: ["navy", "pink", "transparent"],
      description: "배경 색상을 지정합니다.",
    },
    color: {
      control: "select",
      options: ["white", "black"],
      description: "텍스트 색상을 지정합니다.",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "뱃지의 크기를 지정합니다.",
    },
    children: {
      control: "text",
      description: "뱃지 내부에 들어갈 라벨 텍스트입니다.",
    },
    className: {
      table: {
        disable: true, // 스토리북 Control에서 커스텀 클래스는 제외
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof UIBadge>;

// 1. 기본 스타일
export const Default: Story = {
  args: {
    variant: "solid",
    bgColor: "navy",
    color: "white",
    size: "md",
    children: "Badge",
  },
};

// 2. Variants (Solid / Line)
export const Solid: Story = {
  args: {
    variant: "solid",
    bgColor: "navy",
    color: "white",
    size: "md",
    children: "Solid Badge",
  },
};

export const Line: Story = {
  args: {
    variant: "line",
    bgColor: "transparent",
    color: "black",
    size: "md",
    children: "Line Badge",
  },
};

// 3. Sizes (sm / md 한눈에 보기)
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <UIBadge {...args} size="sm">
        Small
      </UIBadge>
      <UIBadge {...args} size="md">
        Medium
      </UIBadge>
    </div>
  ),
  args: {
    variant: "solid",
    bgColor: "navy",
    color: "white",
  },
};