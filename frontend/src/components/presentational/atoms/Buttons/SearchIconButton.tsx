import React from "react";
import { jsx } from "@emotion/react";

import styled from "@emotion/styled";
import { isPropertySignature } from "typescript";

import search from "./searchbutton.png";

type ImageProps = {
  src: string;
};

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = styled("button")<ImageProps>`

  background: url(${(props) => props.src});
  background-size: 25px 25px;
  background-position: center;
  background-repeat: no-repeat;
  height: 1.3rem;
  width: 1.3rem;
  border: 1px solid grey;
  border-left: 0px;
`;

export const SearchIconButton = (props: ButtonProps) => {
  const { onClick } = props;
  return (
    <>
      <Button src={search} onClick={onClick}></Button>
    </>
  );
};
