
import { Header, ThemeContext } from '@library/kit';

import React from 'react';
import styled from 'styled-components';

import { IProps } from '../index';


const _Wrapper = styled.div((props) => `
  display: flex;
  flex-direction: column;
  flex: 1 0;
  background: ${props.theme.color.primary};
  overflow: auto;
`);

const _Header = styled.div(() => `
  display: block;
  padding: 32px 0 24px;
  text-align: center;
`);

const _Content = styled.div((props) => `
  display: flex;
  flex-direction: column;
  flex: 1 0;
  background: ${props.theme.color.white};
  box-shadow: 0 -16px 24px 0 rgba(${props.theme.color.dark});
  overflow: auto;
`);


function LayoutMain(props: Omit<IProps, 'type'>) {
  const theme = React.useContext(ThemeContext);

  return (
    <_Wrapper theme={theme}>
      <_Header>
        <Header>{ props.title }</Header>
      </_Header>
      <_Content>
        { props.children }
      </_Content>
    </_Wrapper>
  );
}

export default LayoutMain;
