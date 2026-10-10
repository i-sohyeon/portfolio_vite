import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badges } from "./component";
import { UIBadge } from "../UIBadge";

const meta: Meta<typeof Badges> = {
  title: "Components/Badges",
  component: Badges,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { variant: { control: "select", options: ["project", "wrap"], description: "프로젝트 하단 정렬 또는 줄바꿈 묶음" }, children: { control: false } },
};

export default meta;
type Story = StoryObj<typeof Badges>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { variant: "wrap", children: undefined },
  render: (args) => <Badges {...args}>{["HTML", "SCSS", "React", "TypeScript", "Storybook"].map((tool) => <UIBadge key={tool} size="md" bgColor="transparent">{tool}</UIBadge>)}</Badges>,
};

export const Project: Story = { ...Default, args: { ...Default.args, variant: "project" } };
