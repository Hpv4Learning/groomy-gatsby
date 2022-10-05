import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { ThemeType, useCustomTheme } from "../styles/theme";

type BaseButtonProps = {
  color?: "orange" | "purple";
  size?: "xl" | "md" | "sm";
  variant?: "contained" | "outlined";
  isRounded?: true;
};

const getButtonSizeProps = (size: BaseButtonProps["size"]) => {
  let props;
  switch (size) {
    case "sm":
      props = {
        width: "fit-content",
        minWidth: "36px",
        height: "36px",
        padding: "0px 8px",
        fontSize: "12px",
      };
      break;
    case "md":
      props = {
        width: "fit-content",
        minWidth: "48px",
        height: "48px",
        padding: "0px 12px",
        fontSize: "16px",
      };
    default:
      props = {
        width: "fit-content",
        minWidth: "56px",
        height: "56px",
        padding: "0px 18px",
        fontSize: "18px",
      };
      break;
  }
  return props;
};

const useHoverProps = ({
  color,
  variant,
}: {
  variant: BaseButtonProps["variant"];
  color: NonNullable<BaseButtonProps["color"]>;
}) => {
  const theme = useCustomTheme();
  let hoverProps;
  switch (variant) {
    case "outlined":
      hoverProps = {
        background: `${theme.colors[color][400]}19`,
        borderColor: `${theme.colors[color][400]}`,
      };
      break;
    default:
      hoverProps = {
        background: theme.colors[color].hover,
        borderColor: theme.colors[color].hover,
      };
      break;
  }
  return hoverProps;
};

export const ButtonBase = styled.button<BaseButtonProps>(
  ({ theme }: { theme: ThemeType }) =>
    ({ color = "orange", size, variant, isRounded }) => {
      const btnColor = theme.colors[color][400];
      const props = getButtonSizeProps(size);
      const hoverProps = useHoverProps({ color, variant });
      return {
        border: "1px solid",
        borderColor: btnColor,
        borderRadius: isRounded ? "100px" : "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: variant === "contained" ? btnColor : "#fff",
        color: variant === "contained" ? "#fff" : btnColor,
        cursor: "pointer",
        userSelect: "none",
        transition: "all 125ms ease",
        ...props,
        ":hover": {
          ...hoverProps,
        },
      };
    },
);

ButtonBase.defaultProps = {
  color: "orange",
  size: "md",
  variant: "contained",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
};

export const Button = (props: BaseButtonProps & Props) => {
  const {
    size,
    color,
    variant,
    isRounded,
    children,
    rightIcon,
    leftIcon,
    ...rest
  } = props;
  return (
    <ButtonBase
      size={size}
      color={color}
      variant={variant}
      isRounded={isRounded}
      {...rest}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {leftIcon ? (
          <span
            style={{
              marginRight: "4px",
            }}
          >
            {React.cloneElement(leftIcon, { style: { color: "inherit" } })}
          </span>
        ) : null}
        {children}
        {rightIcon ? (
          <span
            style={{
              marginLeft: "4px",
            }}
          >
            {React.cloneElement(rightIcon, { style: { color: "inherit" } })}
          </span>
        ) : null}
      </div>
    </ButtonBase>
  );
};
