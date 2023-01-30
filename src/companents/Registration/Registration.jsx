/* eslint-disable max-len */
import { useMutation } from '@tanstack/react-query'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import { DogFoodApiConst } from '../../api/DogFoodApi'
import { createRegistrationValidationSchema } from './validator'

export function Registration() {
  const initialValues = {
    password: '',
    group: 'sm9',
    email: '',

  }
  const navigate = useNavigate()

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data) => DogFoodApiConst.signUp(data),
  })

  const submitHandler = async (values) => {
    await mutateAsync(values)
    navigate('/signin')
  }
  return (

    <>
      <h1>Регистрация</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={createRegistrationValidationSchema}
        onSubmit={(values) => submitHandler(values)}
      >
        <Form className="d-flex flex-column">
          <Field className="mb-3 form-control" name="password" placeholder="password here" type="password" />
          <ErrorMessage companent="p" className="error" name="password" />

          <Field className="mb-3 form-control" name="group" placeholder="sm9" type="text" />
          <ErrorMessage companent="p" className="error" name="group" />

          <Field className="mb-3 form-control" name="email" placeholder="email here" type="email" />
          <ErrorMessage companent="p" className="error" name="email" />

          <button type="submit" disabled={isLoading} className="btn btn-info">Зарегистрироваться</button>
        </Form>
      </Formik>
    </>
  )
}
