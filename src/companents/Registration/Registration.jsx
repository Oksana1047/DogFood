import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { createRegistrationValidationSchema } from './validator'

const initialValues = {
  password: '',
  group: '',
  email: '',

}

export function Registration() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createRegistrationValidationSchema}
      onSubmit={(values) => {
        console.log({ values })
      }}
    >
      <Form className="d-flex flex-column">
        <Field name="password" placeholder="password here" type="text" />
        <ErrorMessage companent="p" className="error" name="password" />

        <Field name="group" placeholder="sm9" type="text" />
        <ErrorMessage companent="p" className="error" name="group" />

        <Field name="email" placeholder="email here" type="text" />
        <ErrorMessage companent="p" className="error" name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
