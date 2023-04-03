
import { Form, createField, createValidation } from 'dumba';


export default new Form({
  login: createField({
    value: '',
    validations: createValidation(
      (value: string) => value !== '',
      'Обязательно к заполнению'
    ),
  }),
  password: createField({
    value: '',
    validations: createValidation(
      (value: string) => value !== '',
      'Обязательно к заполнению'
    ),
  }),
});
