import React from 'react';
import type { UIContentProps } from "./types";
import styles from "./styles.module.scss";

export const UIContent: React.FC<UIContentProps> = ({ 
  variant="type1",
  bgColor,
  bgPattern,
  as: UIContent = "section",
  className,
  children,
  ...rest

 }) => {

  const classes = [
    styles["ui-content"],
    styles[`ui-content-${variant}`],
    styles[`ui-content-${bgColor}`],
    styles[`ui-content-${bgPattern}`],
    className
  ]
  .filter(Boolean)
  .join(" ");

  return (
    <UIContent variant='type1' className={classes} style={{bgColor}} {...rest}>
      {children}
    </UIContent>
  );
};

// 사용 예시
// const App: React.FC = () => {
//   const posts = [
//     { id: 1, title: "TypeScript 기초", content: "타입 시스템 이해하기" },
//     { id: 2, title: "React Hooks", content: "useState 활용법" }
//   ];

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {posts.map(post => (
//         <Content key={post.id} title={post.title} theme="light">
//           <p className="text-gray-600">{post.content}</p>
//         </Content>
//       ))}
//     </div>
//   );
// };