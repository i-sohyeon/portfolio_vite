import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIBox } from "./component";

import type {
  UIBoxVariant,
  UIBoxTextAlign,
  UIBoxDisplay,
  UIBoxjustifyContent,
  UIBoxAItems,
  UIBoxScroll,
} from "./types";
import { UIBanner } from "../UIBanner";
import { UIText } from "../UIText";

// 타입에 정의된 literal union 값을 스토리북 컨트롤 옵션으로 매핑
const variantOptions: UIBoxVariant[] = ["content", "flex", "card", "outlineCard", "archiveTop", "archiveIcon", "archiveFooter"];
const alignOptions: UIBoxTextAlign[] = ["left", "center", "right"];
const displayOptions: UIBoxDisplay[] = ["flex", "block", "inline-block", "grid"];
const jContentOptions: UIBoxjustifyContent[] = ["space-between"];
const aItemsOptions: UIBoxAItems[] = ["top", "middle", "bottom"];
const scrollOptions: UIBoxScroll[] = ["scroll"];

const meta: Meta<typeof UIBox.Div> = {
  title: "Components/UIBox",
  component: UIBox.Div,
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "select", options: [2, 3], description: "아카이브 카드 열 수" },
    variant: {
      control: "select",
      options: variantOptions,
      description: "UIBox 스타일에 적용할 변형 옵션",
    },

    align: {
      control: "select",
      options: alignOptions,
      description: "텍스트 정렬 방향",
    },
    display: {
      control: "select",
      options: displayOptions,
      description: "디스플레이 형태",
    },
    jContent: {
      control: "select",
      options: jContentOptions,
      description: "Flex justify-content 속성",
    },
    aItems: {
      control: "select",
      options: aItemsOptions,
      description: "Flex align-items 속성",
    },
    scroll: {
      control: "select",
      options: scrollOptions,
      description: "스크롤 적용 여부",
    },
    as: {
      control: "text",
      description: "렌더링할 HTML 태그 (예: div, article, section)",
    },
    className: {
      control: "text",
      description: "추가 커스텀 CSS 클래스명",
    },
  },
};

export default meta;
type Story = StoryObj<typeof UIBox.Div>;

// 1. UIBox.Article 스토리
export const ArticleBox: Story = {
  args: {
    as: "article",
    variant: "content",
    align: "left",
  },
  render: (args) => (
    <UIBox.Article {...args} style={{ padding: "20px" }}>
      <div>
        <h3 style={{ margin: "0 0 10px 0" }}>Article 제목</h3>
        <p style={{ margin: 0 }}>UIBox.Article 레이아웃 내부 콘텐츠입니다.</p>
      </div>
    </UIBox.Article>
  ),
};

// 2. UIBox.Div 스토리
export const DivBox: Story = {
  args: {
    as: "div",
    variant: "card",
    display: "flex",
    align: "left",
    aItems: "top",
    jContent: "space-between",  
    children: "UIBox.Div 카드 형태 예시입니다.",
  },
  render: (args) => (
    <UIBox.Div {...args} variant="flex" jContent="space-between" aItems="top" className="pt-0">
    <UIBanner.Wrapper className="mr-5 mb-4" animateOnScroll>
      <UIBanner.List
        icon="study"
        number="2020"
        variant="list"
        bgColor="type1"
        title="ui/ux 스마트웹&앱디자인 (웹 퍼블리싱&프론트엔드) 실무과정"
        des="(2020.04~2020.10)" 
        align="left" />
      <UIBanner.List
        icon="company"
        number="2021"
        variant="list"
        bgColor="type2"
        title="인조이웍스(enjoy works)"
        des="(2021.01 ~ 2022.04)" />
      <UIBanner.List
        icon="study"
        number="2022"
        variant="list"
        bgColor="type3"
        title="[프론트엔드] 리액트 (React.js 자바스크립트)_주말"
        des="(2022.01 ~2022.04)" />
      <UIBanner.List
        icon="company"
        number="2023"
        variant="list"
        bgColor="type4"
        title="인픽스(INPIX)"
        des="(2022.06 ~ 재직 중)" />
      <UIBanner.List
        icon="study"
        number="2024"
        variant="list"
        bgColor="type5"
        title="한국방송통신대학교 컴퓨터과학과 편입 (졸업)"
        des="(2023.09 ~ 2026.08)" />
      <UIBanner.List
        icon="company"
        number="2026"
        variant="list"
        bgColor="type6"
        title="??????"
        des="(????.?? ~ )" />
    </UIBanner.Wrapper>
    
    <UIBox.Div variant="card">
      <UIText.Header as="p" font="tenada" size="md" className="mb-1">
        프로젝트 경험
      </UIText.Header>
      <UIText.Header as="p" font="tenada" size="md" color="blue">
        Project Experience
      </UIText.Header>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
    </UIBox.Div>
  </UIBox.Div>    
  ),
};



// 3. UIBox.Scroll 스토리
export const ScrollBox: Story = {
  args: {
    as: "div",
    scroll: "scroll",
    imgSrc: "https://via.placeholder.com/100",
    href: "https://example.com",
  },
  render: (args) => (
    <UIBox.Scroll {...args} style={{ padding: "20px" }}>
      <p style={{ margin: "0 0 10px 0" }}>
        스크롤 영역 및 링크 이미지가 포함된 영역입니다.
      </p>
    </UIBox.Scroll>
  ),
};
// 4. 공통 테두리 카드
export const OutlineCard: Story = {
  args: { variant: "outlineCard", children: "SKILLS & TOOLS에서 사용하는 공통 카드입니다." },
};

// 5. 아카이브 카드 배치
export const OutlineCardGrid: Story = {
  args: { display: "grid", columns: 3 },
  render: (args) => <UIBox.Div {...args}>
    {["티스토리 블로그", "GitHub", "CodePen"].map((title, index) => <UIBox.Div key={title} variant="outlineCard">
      <UIBox.Div variant="archiveTop"><UIText.Basic variant="archiveLabel" weight="bold">0{index + 1} / ARCHIVE</UIText.Basic></UIBox.Div>
      <UIText.Basic as="h3" font="tenada">{title}</UIText.Basic>
      <UIText.Basic as="p">작업과 기록을 모아두는 공간입니다.</UIText.Basic>
      <UIBox.Div as="span" variant="archiveFooter">둘러보기</UIBox.Div>
    </UIBox.Div>)}
  </UIBox.Div>,
};
