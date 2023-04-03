
import context from "@context";

import { Scrollable } from '@library/kit';
import { NoContent, Skeleton, ErrorContent } from '@library/design';

import React from 'react';
import { observer } from 'mobx-react';
import styled from "styled-components";

import Content from './Content';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  padding: 32px 0 72px;
`;


function View() {
  const { controller } = React.useContext(context);

  if (controller.error.hasError) {
    return <ErrorContent />;
  }

  if (controller.inProcess) {
    return <Skeleton />;
  }

  if (controller.isNotFound) {
    return <NoContent />;
  }

  return (
    <_Wrapper>
      <Scrollable>
        <Content />
      </Scrollable>
    </_Wrapper>
  );
}

export default observer(View);
