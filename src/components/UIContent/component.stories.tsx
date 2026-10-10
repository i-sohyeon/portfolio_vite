import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIContent } from "./component";
import { UIText } from "../../components/v1";

const meta: Meta<typeof UIContent> = {
  title: "Components/UIContent",
  component: UIContent,
  tags: ["autodocs"],
  argTypes: {
    bgColor: {
      control: "select",
      options: ["gray", "black", "blue", "pink", "green", "navy"],
      description: "컨텐츠 영역의 배경색을 지정합니다.",
    },
    bgPattern: {
      control: "select",
      options: ["check", "halfcheck", "wave", "waveyellow"],
      description: "컨텐츠 배경에 들어갈 패턴 종류를 선택합니다.",
    },
    as: {
      control: "text",
      description: "렌더링할 HTML 태그(section, div, article 등)를 지정합니다.",
    },
    children: {
      control: "text",
      description: "컨텐츠 내부 요소입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof UIContent>;

// 1. 기본 스토리
export const Default: Story = {
  render: (args) => <UIContent {...args} />,
  args: {
    bgColor: "navy",
    // bgPattern:"",
    children: (
      <div style={{ padding: "40px 20px", textAlign: "left", height: 100}}>
          <UIText.Header button="더보기" color="white" size="md">
            섹션 제목입니다
          </UIText.Header>
          <UIText.Basic size="lg" color="white">
            텍스트 영역
          </UIText.Basic>
    </div>
    ),
  },
};

// 2. 배경 패턴 적용 예시
export const WithPattern: Story = {
  render: (args) => <UIContent {...args} />,
  args: {
    bgColor: "gray",
    bgPattern:"check",
    children: (
      <div style={{ padding: "40px 20px", textAlign: "left", height: 300}}>
          <UIText.Header button="더보기" color="black" linkTo="/" size="md">
            섹션 제목입니다
          </UIText.Header>
        <p>여기에 본문 내용이나 다른 컴포넌트들이 children으로 들어갑니다.</p>
        <p>여기에 본문 내용이나 다른 컴포넌트들이 children으로 들어갑니다.</p>
        <p>여기에 본문 내용이나 다른 컴포넌트들이 children으로 들어갑니다.</p>
        <p>여기에 본문 내용이나 다른 컴포넌트들이 children으로 들어갑니다.</p>
      </div>
    ),
  },
};

// 3. 다양한 배경색 한눈에 보기
export const ColorVariants: Story = {
  render: () => (
    <div style={{ padding: "40px 20px", textAlign: "left", height: 500}}>
      <UIContent bgColor="navy" style={{ padding: "40px 20px" }}>
        Navy Background
      </UIContent>
      <UIContent bgColor="pink" bgPattern="wave" style={{ padding: "10px 20px" }}>
        Pink Background
      </UIContent>
      <UIContent bgColor="gray" bgPattern="check" style={{ padding: "10px 20px" }}>
        Gray Background
      </UIContent>
      <UIContent bgColor="blue" bgPattern="waveyellow" style={{ padding: "10px 20px" }}>
        Blue Background
      </UIContent>
      <UIContent bgColor="green" style={{ padding: "40px 20px" }}>
        Green Background
      </UIContent>
    </div>
  ),
};