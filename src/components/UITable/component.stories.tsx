import type { Meta, StoryObj } from "@storybook/react-vite";
import { UITable } from "./component";

const meta: Meta<typeof UITable.Default> = {
  title: "Components/UITable",
  component: UITable.Default,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { variant: { control: "select", options: ["type1", "type2"] }, size: { control: "select", options: ["sm", "md"] }, align: { control: "select", options: ["left", "center", "right"] } },
};

export default meta;
type Story = StoryObj<typeof UITable.Default>;

// 1. 기본 사용 예시
export const Default: Story = {
  args: { variant: "type1", size: "md", align: "left" },
  render: (args) => (
    <UITable.Default {...args}>
      <UITable.Table>
        <UITable.Caption>프로젝트 작업 정보</UITable.Caption>
        <UITable.Tbody>
          <UITable.Tr><UITable.Th scope="row">프로젝트 기간</UITable.Th><UITable.Td>2025.12 ~</UITable.Td></UITable.Tr>
          <UITable.Tr><UITable.Th scope="row">사용 툴</UITable.Th><UITable.Td>React, TypeScript, SCSS, Storybook</UITable.Td></UITable.Tr>
        </UITable.Tbody>
      </UITable.Table>
    </UITable.Default>
  ),
};

// 2. 열 제목과 합계가 있는 표
export const WithHeadAndFoot: Story = {
  args: Default.args,
  render: (args) => <UITable.Default {...args}><UITable.Table>
    <UITable.Caption>작업 목록</UITable.Caption>
    <UITable.Thead><UITable.Tr><UITable.Th scope="col">분류</UITable.Th><UITable.Th scope="col">건수</UITable.Th></UITable.Tr></UITable.Thead>
    <UITable.Tbody><UITable.Tr><UITable.Th scope="row">퍼블리싱</UITable.Th><UITable.Td>9</UITable.Td></UITable.Tr></UITable.Tbody>
    <UITable.Tfoot><UITable.Tr><UITable.Th scope="row">합계</UITable.Th><UITable.Td>9</UITable.Td></UITable.Tr></UITable.Tfoot>
  </UITable.Table></UITable.Default>,
};

