import React from "react";

type ChildType = React.ReactChild | React.ReactFragment | React.ReactPortal;

export const getDisplayedValue = (value: string, children: React.ReactNode) => {
  const childArray = React.Children.toArray(children);

  const selectedChild = childArray.find((child: ChildType) => {
    if (React.isValidElement(child) && child.props.value === value) {
      return child;
    }
    return undefined;
  });

  return React.isValidElement(selectedChild)
    ? selectedChild.props.children
    : undefined;
};
