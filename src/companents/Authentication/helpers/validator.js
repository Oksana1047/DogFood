import * as Yup from 'yup'

export const AuthenticationFormValidationSchema = Yup.object({
  password: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Неверный пароль'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Неверный адрес почты'),

})
