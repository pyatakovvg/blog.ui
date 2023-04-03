
import { useApp } from '@library/app';
import { Text, Button } from '@library/kit';

import React from 'react';
import styled from "styled-components";


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;

const _Col = styled.div`
  display: block;
  
  & + & {
    margin: 4px 0 0;
  }
`;

const _Control = styled.div`
  display: block;
`;


function Auth() {
  const app = useApp();

  async function handleLogout() {
    await app.resetAuth();
  }

  return (
    <_Wrapper>
      <_Content>
        <_Col>
          <Text>{ app.user.name }</Text>
        </_Col>
        <_Col>
          <Text>{ app.user.email }</Text>
        </_Col>
      </_Content>
      <_Control>
        <Button mode={'danger'} onClick={handleLogout}>Выйти</Button>
      </_Control>
    </_Wrapper>
  );
}

export default Auth;
