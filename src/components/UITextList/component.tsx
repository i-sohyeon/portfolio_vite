import React from "react";
import type {
  UITextListCheckProps,
  ItemData,
  UITextListCircleProps,
  UITextListNormalProps,
  UITextListNestedProps,
} from "./types";
import styles from "./styles.module.scss";

export const Normal: React.FC<UITextListNormalProps> = ({
  variant,
  checkItems,
  className,
  children,
  size,
  ...rest
}) => {
  const classes = [
    styles[`ui-textList`],
    styles[`ui-textList-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={`${styles.checkList} ${classes}`}>
      {checkItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export const Check: React.FC<UITextListCheckProps> = ({
  variant,
  checkItems,
  className,
  children,
  size,
  ...rest
}) => {
  const classes = [
    styles[`ui-textList`],
    styles[`ui-textList-${variant}`],
    styles[`ui-textList-${size}`],
    
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={`${styles.checkList} ${classes}`}>
      {checkItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export const Nested: React.FC<UITextListNestedProps> = ({
  variant,
  nestedItems,
  className,
  children,
  style,
  size,
  ...rest
}) => {
  const classes = [
    styles[`ui-nested`],
    styles[`ui-nested-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderList = (items: any[], isFirstLevel: boolean = true) => {
    return (
      <ul
        className={
          isFirstLevel
            ? styles.firstLevelList
            : `${styles.nestedList} ${classes}`
        }>
        {items.map((item) => (
          <li
            key={item.id}
            className={
              isFirstLevel ? styles.firstLevelItem : styles.nestedItem
            }>
            <span>{item.name}</span>
            {item.children && renderList(item.children, false)}
          </li>
        ))}
      </ul>
    );
  };

  return <div className={styles.testDiv} style={style} {...rest}>
    {renderList(nestedItems)}
    </div>;
};

function ItemComponent(props: { item: ItemData }) {
  return (
    <li>
      <span>{props.item.number}</span>
      <div style={{}}>
        <h3>{props.item.title}</h3>
        <p>{props.item.subText}</p>
      </div>
    </li>
  );
}

export const Circle: React.FC<UITextListCircleProps> = ({
  variant,
  className,
  bgColor,
  ...props
}) => {
  const classes = [
    styles[`ui-textList`],
    styles[`ui-textList-${variant}`],
    styles[`ui-textList-${bgColor}`],
    // styles[`ui-textList-${size}`],
    // styles[`ui-textListå-${weight}`],
    // styles[`ui-textList-${font}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul {...props} className={`${styles.circleList} ${classes}`}>
      {props.data.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </ul>
  );
};

// export default function Circle(props: UITextListCircleProps) {
//   return (
//     <div {...props}>
//       {props.data.map((item) => (
//         <ItemComponent key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }

const UITextList = {
  Normal,
  Nested,
  Check,
  Circle,
};

UITextList.Normal.displayName = "UITextList.Normal";
UITextList.Nested.displayName = "UITextList.Nested";
UITextList.Check.displayName = "UITextList.Check";
UITextList.Check.displayName = "UITextList.Circle";

export { UITextList };
