
import { Header, Text } from '@library/kit';

import React from 'react';

import styled from 'styled-components';


const _Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex: 0 0 auto;
  align-items: baseline;
  padding: 12px 24px;
  background: ${props => props.theme.color.white};
  border-radius: 8px;
  box-shadow: 0 0 16px 0 rgba(0,0,0, .05);
  cursor: pointer;
`;

const _Icon = styled.div`
  display: block;
  color: ${props => props.theme.color.black};
  font-size: 14px;
`;

const _Header = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  margin: 0 0 0 8px;
`;


interface IProps {
  children: React.ReactElement | string;
  onClick(): void;
}


function HeaderControl(props: IProps) {
  return (
    <_Wrapper onClick={props.onClick}>
      <_Icon>
        <i className="fa-solid fa-chevron-left" />
      </_Icon>
      <_Header>
        <Text>{ props.children }</Text>
      </_Header>
    </_Wrapper>
  );
}

export default HeaderControl;
