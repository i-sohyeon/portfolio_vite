import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIScroll } from "./component";

const meta: Meta<typeof UIScroll.TopButton> = {
  title: "Components/UIScroll",
  component: UIScroll.TopButton,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: { threshold: { control: "number", description: "버튼 노출 스크롤 위치" } },
};

export default meta;
type Story = StoryObj<typeof UIScroll.TopButton>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { threshold: 300 },
  render: (args) => <div style={{ minHeight: "180vh", padding: 24 }}><p>아래로 스크롤하면 맨 위로 이동하는 버튼이 표시됩니다.</p><UIScroll.TopButton {...args} /></div>,
};

// ToTop은 라우트 전환 시 스크롤을 초기화하므로 문서 예시로 별도 표시합니다.
export const RouteScrollReset: Story = {
  render: () => <><UIScroll.ToTop /><p>UIScroll.ToTop을 Router 안에 배치하면 경로 변경 시 맨 위로 이동합니다.</p></>,
};

