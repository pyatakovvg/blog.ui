
import React from 'react';
import { observer } from 'mobx-react';
import styled from "styled-components";

import Form from './Form';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  justify-content: center;
  align-items: center;
`;


function View() {
  return (
    <_Wrapper>
      <Form />
    </_Wrapper>
  );
}

export default observer(View);
