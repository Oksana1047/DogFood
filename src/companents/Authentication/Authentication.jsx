/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { useMutation } from '@tanstack/react-query'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DogFoodApiConst } from '../../api/DogFoodApi'
import { setNewUser } from '../../redux/slices/userSlice'

import { AuthenticationFormValidationSchema } from './helpers/validator'

export function Authentication() {
  const initialValues = {
    email: '',
    password: '',
  }

  const dispatch = useDispatch()

  const navigate = useNavigate()

  /* const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data) => fetch('https://api.react-learning.ru/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()).then((user) => setNewToken(user.token)),
  }) */
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (values) => DogFoodApiConst.signIn(values)
      .then((user) => {
        dispatch(setNewUser(user.data._id, user.token, user.data.email))
      }),
  })
  const submitHandler = async (values) => {
    await mutateAsync(values)
    setTimeout(() => navigate('/products'))
  }
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="mb-6">Войти</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={AuthenticationFormValidationSchema}
        onSubmit={(values) => submitHandler(values)}
      >
        <Form className="d-flex flex-column">
          <Field className="mb-3 form-control" name="password" placeholder="password here" type="password" />
          <ErrorMessage companent="p" className="error" name="password" />

          <Field className="mb-3 form-control" name="email" placeholder="email here" type="email" />
          <ErrorMessage companent="p" className="error" name="email" />

          <button disabled={isLoading} type="submit" className="btn btn-warning">Войти</button>
        </Form>
      </Formik>

    </div>
  )
}
export default Authentication
