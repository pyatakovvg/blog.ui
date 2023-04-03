
import React from 'react';
import styled from 'styled-components';


export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {

}


function DefaultInput(props: IProps) {
  return(
    <input {...props}>{ props.children }</input>
  );
}
// color: ${props => props.theme.button.mode[props?.mode ?? 'primary'].default.color};
// background: ${props => props.theme.button.mode[props?.mode ?? 'primary'].default.background};
// font-size: ${props => props.theme.button.size[props?.size ?? 'middle'].font_size};
// font-weight: ${props => String(props.theme.button.size[props?.size ?? 'middle'].font_weight)};
// padding: ${props => props.theme.button.size[props?.size ?? 'middle'].padding};
export default styled(DefaultInput)`
  display: block;
  width: 100%;
  border: 1px solid #000;
  border-radius: ${props => props.theme.button.default.border_radius};
  padding: 12px;
  font-size: 14px;
  transition: background-color ${props => props.theme.transition_duration};
  text-decoration: none;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: red;
  }
  
  &:disabled,
  &:disabled:hover {
    color: ${props => props.theme.button.default.disabled.color};
    background: ${props => props.theme.button.default.disabled.background};
    cursor: default;
  }
`;
