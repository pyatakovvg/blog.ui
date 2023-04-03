
import context from "@context";

import { Skeleton, ErrorContent } from '@library/design';

import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import Articles from './Articles';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  padding: 24px 0 128px;
`;


function View() {
  const { controller } = React.useContext(context);

  if (controller.error.hasError) {
    return (
      <ErrorContent message={controller.error.content?.message} />
    );
  }

  if (controller.inProcess) {
    return (
      <Skeleton />
    );
  }

  return (
    <_Wrapper>
      <Articles />
    </_Wrapper>
  );
}

export default observer(View);
