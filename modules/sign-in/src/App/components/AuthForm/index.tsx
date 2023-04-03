
import { UserDto } from '@library/kernel';
import { Input, Button } from '@library/kit';

import React from 'react';
import { Form } from 'dumba';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import form from './schema';


const _Form = styled.form`
  display: block;
`;

const _Field = styled.div`
  display: block;
  
  & + & {
    margin: 8px 0 0;
  }
`;


interface IProps {
  onSubmit(form: Form): Promise<UserDto>;
  onSuccess?(response: UserDto): void;
  onError?(response: Error): void;
}


function AuthForm(props: IProps) {
  console.log(
    form.isSubmitting,
    form.isValidating,
    !form.isValid,
    !form.isValidated
  )
  const handleOnSubmit = form.handleSubmit(
    (form: Form) => props.onSubmit(form),
    (_value, response: UserDto) => props.onSuccess && props.onSuccess(response),
    (_value, response: Error) => props.onError && props.onError(response),
  );

  return (
    <_Form onSubmit={handleOnSubmit} autoComplete="off" noValidate>
      <_Field>
        <Input
          name={'login'}
          value={form.fields.login.value}
          onChange={form.fields.login.onChange}
          onBlur={form.fields.login.onChange}
        />
      </_Field>
      <_Field>
        <Input
          name={'password'}
          value={form.fields.password.value}
          onChange={form.fields.password.onChange}
          onBlur={form.fields.password.onChange}
        />
      </_Field>
      <_Field>
        <Button
          type={'submit'}
          disabled={
            form.isSubmitting ||
            form.isValidating ||
            ! form.isValid ||
            ! form.isValidated
          }
        >Авторизоваться</Button>
        <Button
          form={'context'}
          type={'button'}
        >Регистрация</Button>
      </_Field>
    </_Form>
  );
}

export default observer(AuthForm);
