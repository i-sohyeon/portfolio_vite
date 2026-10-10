import type { Meta, StoryObj } from "@storybook/react-vite";
import { UITab } from "./component";
import { useArgs } from "storybook/preview-api";

const meta: Meta<typeof UITab.Filter> = {
  title: "Components/UITab",
  component: UITab.Filter,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { value: { control: "select", options: ["all", "publishing", "design", "personal"] }, onChange: { action: "onChange" }, items: { control: "object" } },
};

export default meta;
type Story = StoryObj<typeof UITab.Filter>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { items: [{ value: "all", label: "전체" }, { value: "publishing", label: "퍼블리싱" }, { value: "design", label: "디자인" }, { value: "personal", label: "개인 프로젝트" }], value: "all", "aria-label": "프로젝트 카테고리" },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <UITab.Filter {...args} onChange={(value) => { updateArgs({ value }); args.onChange?.(value); }} />;
  },
};

