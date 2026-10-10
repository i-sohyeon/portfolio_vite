import type { Meta, StoryObj } from "@storybook/react-vite";
import UIPopup from "./component";
import { useState } from "react";
import { UIAccordion } from "../UIAccordion";

const meta: Meta<typeof UIPopup> = {
  title: "Components/UIPopup",
  component: UIPopup,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { onClose: { action: "onClose" }, content: { control: "text" } },
};

export default meta;
type Story = StoryObj<typeof UIPopup>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { content: "프로젝트 상세 내용입니다." },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <><button type="button" onClick={() => setOpen(true)}>팝업 열기</button>{open && <UIPopup {...args} onClose={() => { setOpen(false); args.onClose?.(); }} />}</>;
  },
};

export const WithAccordion: Story = {
  ...Default,
  args: { content: <UIAccordion.Line id="popup-accordion" title="접근성" variant="line">시맨틱 마크업과 키보드 접근성을 고려합니다.</UIAccordion.Line> },
};

