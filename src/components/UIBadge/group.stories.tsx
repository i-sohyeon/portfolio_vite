import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIBadge } from "./index";

const meta: Meta<typeof UIBadge.Group> = {
  title: "Components/UIBadge/Group",
  component: UIBadge.Group,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { variant: { control: "select", options: ["project", "wrap"], description: "프로젝트 하단 정렬 또는 줄바꿈 묶음" }, children: { control: false } },
};

export default meta;
type Story = StoryObj<typeof UIBadge.Group>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { variant: "wrap", children: undefined },
  render: (args) => <UIBadge.Group {...args}>{["HTML", "SCSS", "React", "TypeScript", "Storybook"].map((tool) => <UIBadge key={tool} size="md" bgColor="transparent">{tool}</UIBadge>)}</UIBadge.Group>,
};

export const Project: Story = { ...Default, args: { ...Default.args, variant: "project" } };
