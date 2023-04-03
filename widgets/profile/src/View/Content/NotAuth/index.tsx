
import { Button } from '@library/kit';

import React from 'react';
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';


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


interface IProps {
  onClose: () => void;
}


function NotAuth(props: IProps) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleSignIn() {
    props.onClose();
    navigate(process.env.PUBLIC_URL + '/sign-in', {
      state: { referer: location.pathname }
    });
  }

  return (
    <_Wrapper>
      <_Content>

      </_Content>
      <_Control>
        <_Col>
          <Button onClick={handleSignIn}>Войти</Button>
        </_Col>
        <_Col>
          <Button>Регистрация</Button>
        </_Col>
      </_Control>
    </_Wrapper>
  );
}

export default NotAuth;
