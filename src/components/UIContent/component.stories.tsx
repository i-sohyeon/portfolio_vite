import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIContent } from "./component";
import { UIText } from "../../components/v1";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof UIContent> = {
  title: "Components/UIContent",
  component: UIContent,
  tags: ["autodocs"],
  argTypes: {
    bgColor: { control: "select", options: ["gray", "black", "blue", "pink", "green", "navy"], },
    bgPattern: { control: "select", options: ["check", "halfcheck", "wave", "waveyellow"]},
    // as: { 
    //   control: "select", 
    //   options: ["section", "div", "article", "main"],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof UIContent>;

// ==========================================
// 1. 기본형 스토리 (Default)
// ==========================================
export const Default: Story = {
  render: (args) => <UIContent {...args} />,
  args: {
    bgColor: "gray", 
    bgPattern:"check",
    children: (
      <div style={{ padding: "40px 20px", textAlign: "left", height: 300}}>
         <BrowserRouter>
          <UIText.Header button="더보기" color="black" linkTo="/" size="md">
            섹션 제목입니다
          </UIText.Header>
         </BrowserRouter>

        {/* <h2 style={{ marginBottom: "10px" }}>콘텐츠 섹션 타이틀</h2> */}
        <p>여기에 본문 내용이나 다른 컴포넌트들이 children으로 들어갑니다.</p>
        <p>여기에 본문 내용이나 다른 컴포넌트들이 children으로 들어갑니다.</p>
        <p>여기에 본문 내용이나 다른 컴포넌트들이 children으로 들어갑니다.</p>
        <p>여기에 본문 내용이나 다른 컴포넌트들이 children으로 들어갑니다.</p>
      </div>
    ),
  },
};
