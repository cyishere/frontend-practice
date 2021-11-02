import React, { CSSProperties } from "react";
import styled from "styled-components";
import { SmallArrowDown } from "../Assets";
import { getDisplayedValue } from "./Select.helpers";

interface SelectProps {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  width: number;
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  children,
  width,
}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit
        style={{ "--width": width - 46 + "px" } as CSSProperties}
      >
        {displayedValue}
        <IconWrapper>
          <SmallArrowDown />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  background-color: var(--clr-darker-light-gray);
  color: var(--clr-black);
  font-size: ${14 / 16}rem;
  font-weight: var(--fw-normal);
  width: var(--width);
  padding: 10px 34px 6px 12px;

  ${NativeSelect}:focus + & {
    /* For all browsers */
    outline: 1px dotted #212121;
    /* For Mac Chrome specific */
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -7px;
  right: 12px;
  bottom: 0;
  width: 10px;
  height: 8px;
  margin: auto;
  pointer-events: none;
`;

export default Select;
