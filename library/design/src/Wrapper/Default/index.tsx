
import React from 'react';
import styled from 'styled-components';

import Header from './Header';


interface IProps {
  children: React.ReactElement;
}


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  background: ${props => props.theme.color.light};
  overflow: auto;
`;

const _Header = styled.header`
  display: block;
  background: ${props => props.theme.color.black};
  box-shadow: 0 4px 24px 4px rgba(0, 0, 0, .4);
  padding: 0 4px;
  z-index: 20;
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  overflow: auto;
  z-index: 10;
`;


function DefaultWrapper(props: IProps) {
  React.useEffect(() => {
    console.log('Wrapper render')
  }, []);

  return (
    <_Wrapper>
      <_Header>
        <Header />
      </_Header>
      <_Content>
        { React.Children.only(props.children) }
      </_Content>
    </_Wrapper>
  );
}

export default React.memo(DefaultWrapper);
