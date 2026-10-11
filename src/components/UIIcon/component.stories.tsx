import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIIcon } from "./component";
import type { UIIconVariant } from "./types";

const variants: UIIconVariant[] = ["github", "tistory", "codepen", "mail", "arrow-down", "html", "dev", "motion", "tool"];

const meta: Meta<typeof UIIcon> = {
  title: "Components/UIIcon",
  component: UIIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { variant: { control: "select", options: variants }, size: { control: "select", options: ["sm", "md", "lg"] } },
};

export default meta;
type Story = StoryObj<typeof UIIcon>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { variant: "github", size: "lg" },

};

// 2. 크기 비교
export const Sizes: Story = {
  args: { variant: "html" },
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <UIIcon {...args} size="sm" />
      <UIIcon {...args} size="md" />
      <UIIcon {...args} size="lg" />
    </div>
  ),
};

// 3. 전체 아이콘 모음
export const AllIcons: Story = {
  name: "전체 아이콘",
  args: { size: "lg" },
  parameters: { layout: "padded" },
  argTypes: { variant: { control: false } },
  render: (args) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "24px" }}>
      {variants.map((variant) => (
        <div key={variant} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", padding: "24px", border: "1px solid #ddd", borderRadius: "12px" }}>
          <UIIcon {...args} variant={variant} />
          <span>{variant}</span>
        </div>
      ))}
    </div>
  ),
};
