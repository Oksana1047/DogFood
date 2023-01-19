import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { createAuthenticationValidationSchema } from './validator'

const initialValues = {
  password: '',
  group: '',
  email: '',

}

export function Authentication() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createAuthenticationValidationSchema}
      onSubmit={(values) => {
        console.log({ values })
      }}
    >
      <Form className="d-flex flex-column">
        <Field name="password" placeholder="password here" type="text" />
        <ErrorMessage companent="p" className="error" name="password" />

        <Field name="email" placeholder="email here" type="text" />
        <ErrorMessage companent="p" className="error" name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
