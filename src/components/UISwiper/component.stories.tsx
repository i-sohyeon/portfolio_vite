import type { Meta, StoryObj } from "@storybook/react-vite";
import { UISwiper, SlideItem } from "./component";
import { SwiperSlide } from "swiper/react";

const meta: Meta<typeof UISwiper.Box> = {
  title: "Components/UISwiper",
  component: UISwiper.Box,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { pagination: { control: "boolean", description: "767px 이하에서 불릿 표시" }, onSwiper: { control: false }, children: { control: false } },
};

export default meta;
type Story = StoryObj<typeof UISwiper.Box>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { variant: "type1", pagination: true },
  render: (args) => <div style={{ overflow: "hidden", padding: "8px 4px 24px" }}><UISwiper.Box {...args}>
    {["hyundaicard.png", "wooribank.png", "nhbank.png"].map((image, index) => <SwiperSlide key={image}>
      <SlideItem title={`프로젝트 ${index + 1}`} titleColor="black" bgColor="gray" imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/${image}`}><p>프로젝트 카드 예시입니다.</p></SlideItem>
    </SwiperSlide>)}
  </UISwiper.Box></div>,
};

