
import context from '@context';
import AuthForm from '@components/AuthForm';

import React from 'react';
import styled from "styled-components";


const _Wrapper = styled.div`
  display: block;
  width: 300px;
`;


function Form() {
  const { controller } = React.useContext(context);

  return (
    <_Wrapper>
      <AuthForm
        onSuccess={(res) => console.log('success', res)}
        onError={(error) => console.log('error', error)}
        onSubmit={async (form) => {
          return await controller.login(form.data.login, form.data.password);
        }}
      />
    </_Wrapper>
  );
}

export default Form;
