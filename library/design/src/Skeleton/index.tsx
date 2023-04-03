
import { Header, Text } from '@library/kit';

import React from 'react';
import styled from 'styled-components';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  justify-content: center;
  align-items: center;
`;

const _Header = styled.div`
  display: block;
  text-align: center;
`;

const _Content = styled.div`
  display: block;
  text-align: center;
  margin: 24px 0 0;
`;


function Skeleton() {
  return (
    <_Wrapper>
      <_Header>
        <Header>Немного терпения</Header>
      </_Header>
      <_Content>
        <Text>Идет загрузка данных</Text>
      </_Content>
    </_Wrapper>
  );
}

export default Skeleton;
