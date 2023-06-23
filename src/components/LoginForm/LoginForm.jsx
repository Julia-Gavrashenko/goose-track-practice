import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperarions';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormField,
  Field,
  ErrorMessage,
  LoginBtn,
  LoginField,
} from './LoginForm.styled';

const LoginFormSchema = Yup.object().shape({
 
  
  email: Yup.string().email('Invalid email').required('Required'),
   
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <LoginField>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginFormSchema}
        onSubmit={values => {
          dispatch(
            logIn({
              email: values.email,
              password: values.password,
            })
          );
        }}
      >
        <Form>
          <FormField>
            Email
            <Field type="email" name="email"     autoComplete="off"/>
            <ErrorMessage name="email" component="p" />
          </FormField>

          <FormField>
            Password
            <Field type="password" name="password" autoComplete="off"/>
            <ErrorMessage name="password" component="p" />
          </FormField>

          <LoginBtn type="submit">Log In</LoginBtn>
        </Form>
      </Formik>
    </LoginField>
  );
};
