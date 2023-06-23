import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperarions';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormField,
  Field,
  ErrorMessage,
  RegisterBtn,
  LoginField,
} from './RegisterForm.styled';


const RegisterFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  
  email: Yup.string().email('Invalid email').required('Required'),
   
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <LoginField>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterFormSchema}
        onSubmit={values => {
          dispatch(
            register({
              name: values.name,
              email: values.email,
              password: values.password,
            }),
      
          );
        }}
      >
        <Form>
          <FormField>
            Name
            <Field type="text" name="name" autoComplete="off"/>
            <ErrorMessage name="name" component="p" />
          </FormField>
          <FormField>
            Email
            <Field type="email" name="email" autoComplete="off"/>
            <ErrorMessage name="email" component="p" />
          </FormField>

          <FormField>
            Password
            <Field type="password" name="password" autoComplete="off"/>
            <ErrorMessage name="password" component="p" />
          </FormField>

          <RegisterBtn type="submit">Register</RegisterBtn>
        </Form>
      </Formik>
    </LoginField>
  );
};
