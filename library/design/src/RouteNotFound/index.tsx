
import { Header, Button } from '@library/kit';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  background: ${props => props.theme.color.white};
  padding: 24px 32px;
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
`;

const _Controls = styled.div`
  display: block;
`;


function RouteNotFound() {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(process.env.PUBLIC_URL + '/');
  }

  return (
    <_Wrapper>
      <_Content>
        <Header level={2}>Страница не найдена</Header>
      </_Content>
      <_Controls>
        <Button onClick={handleRedirect}>Перейти на главную</Button>
      </_Controls>
    </_Wrapper>
  );
}

export default RouteNotFound;
