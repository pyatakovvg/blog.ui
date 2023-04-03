
import { Header, Text, Button } from '@library/kit';

import React from 'react';
import { useNavigate } from 'react-router-dom';

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

const _Control = styled.div`
  display: block;
  margin: 16px 0 0;
`;


interface IProps {
  message?: string;
}


function NotContent(props: IProps) {
  const navigate = useNavigate();

  function handleToRoot() {
    navigate(process.env.PUBLIC_URL + '/');
  }

  function handleToPrev() {
    navigate(process.env.PUBLIC_URL + '/');
  }

  return (
    <_Wrapper>
      <_Header>
        <Header>Упс!</Header>
      </_Header>
      <_Content>
        <Text>Что-то пошло не так!</Text>
        <Text type={'description'}>{ props.message }</Text>
      </_Content>
      <_Control>
        <Button onClick={handleToRoot}>Перейти на главную</Button>
        <Button form={'context'} onClick={handleToPrev}>Назад</Button>
      </_Control>
    </_Wrapper>
  );
}

export default NotContent;
