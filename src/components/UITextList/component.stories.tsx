import type { Meta, StoryObj } from "@storybook/react-vite";
import { UITextList } from "./component";

const meta = {
  title: "Components/UITextList",
  component: UITextList.Check,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UITextList.Check>;

export default meta;





/* ==============================
 * Check
 * ============================== */

type CheckStory = StoryObj<typeof UITextList.Check>;

export const Check: CheckStory = {
  args: {
    variant: "check",
    size: "sm",
    checkItems: [
      "React를 활용한 UI 컴포넌트 마크업 및 스타일 작업",
      "금융 서비스 내 인증·보안 관련 화면 퍼블리싱",
      "웹 접근성 가이드를 준수한 마크업 작업",
    ],
  },
};



/* ==============================
 * Nested
 * ============================== */

type NestedStory = StoryObj<typeof UITextList.Nested>;

export const Nested: NestedStory = {
  args: {
    color: "black",
    align: "left",

    nestedItems: [
      {
        id: 1,
        name: "주요 업무 및 담당 역할",
        children: [
          {
            id: "1-1",
            name: "- React를 활용한 UI 컴포넌트 마크업 및 스타일 작업",
          },
          {
            id: "1-2",
            name: "- 금융 서비스 내 인증·보안, 이벤트, 공지사항 관련 화면 퍼블리싱 및 구축",
          },
          {
            id: "1-3",
            name: "- 기획·디자인·개발팀과 협업하여 컴포넌트 설계 및 UI/UX 개선 의견 제안",
          },
          {
            id: "1-4",
            name: "- 웹접근성 가이드를 준수한 마크업 작업으로 웹접근성 인증 마크 획득에 기여",
          },
        ],
      },
      {
        id: 2,
        name: "사용 기술",
        children: [
          {
            id: "2-1",
            name: "- React",
          },
          {
            id: "2-2",
            name: "- TypeScript",
          },
          {
            id: "2-3",
            name: "- SCSS / CSS Modules",
          },
        ],
      },
    ],
  },

  render: (args) => (
    <div style={{ width: "650px" }}>
      <UITextList.Nested {...args} />
    </div>
  ),
};


/* ==============================
 * Nested - White
 * ============================== */

export const NestedWhite: NestedStory = {
  args: {
    color: "white",
    align: "left",

    nestedItems: [
      {
        id: 1,
        name: "주요 업무 및 담당 역할",
        children: [
          {
            id: "1-1",
            name: "- React를 활용한 UI 컴포넌트 마크업 및 스타일 작업",
          },
          {
            id: "1-2",
            name: "- 금융 서비스 화면 퍼블리싱 및 구축",
          },
          {
            id: "1-3",
            name: "- 웹 접근성을 고려한 마크업 작업",
          },
        ],
      },
    ],
  },

  render: (args) => (
    <div
      style={{
        width: "650px",
        padding: "40px",
        backgroundColor: "#222",
      }}
    >
      <UITextList.Nested {...args} />
    </div>
  ),
};



/* ==============================
 * Circle
 * ============================== */

// type CircleStory = StoryObj<typeof UITextList.Circle>;

// export const Circle: CircleStory = {
//   args: {
//     variant: "circle",

//     data: [
//       {
//         id: 1,
//         number: 1,
//         title: "UI 컴포넌트 구축",
//         subText:
//           "React와 TypeScript를 활용하여 재사용 가능한 UI 컴포넌트를 구축합니다.",
//       },
//       {
//         id: 2,
//         number: 2,
//         title: "반응형 웹",
//         subText:
//           "다양한 디바이스 환경을 고려하여 반응형 UI를 구현합니다.",
//       },
//       {
//         id: 3,
//         number: 3,
//         title: "웹 접근성",
//         subText:
//           "웹 접근성 가이드를 준수하여 사용자 접근성을 개선합니다.",
//       },
//     ],
//   },
// };