import React from "react";
import { TitleContainer } from "../../ui/shared/title";

function Title(props) {
  return (
    <TitleContainer color={props.color}>{props.title}</TitleContainer>
  );
}

export default Title;
