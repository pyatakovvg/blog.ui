
import context from '@context';

import moment from '@helper/moment';
import { Text, Header } from '@library/kit';

import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';


const _Wrapper = styled.div`
  display: block;
  padding: 24px 16px;
  background: ${props => props.theme.color.white};
`;

const _Block = styled.div`
  display: block;
  
  & + & {
    margin: 32px 0 0;
  }
`;


function Content() {
  const { controller } = React.useContext(context);

  return (
    <_Wrapper>
      <_Block>
        <Header>{ controller.article.title }</Header>
      </_Block>
      <_Block>
        <Text type={'description'}>{ moment(controller.article.createdAt).format('LLL') }</Text>
      </_Block>
      <_Block>
        <Text>{ controller.article.content }</Text>
      </_Block>
    </_Wrapper>
  );
}

export default observer(Content);
