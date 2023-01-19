import * as Yup from 'yup'

export const createRegistrationValidationSchema = Yup.object({
  password: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  group: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),

})
