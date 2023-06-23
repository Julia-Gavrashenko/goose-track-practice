import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';

import {
  Form,
  FormField,
  Field,
  ErrorMessage,
  UpdateContactBtn,
} from './UpdateForm.styled';
import { toast } from 'react-hot-toast';

const UpdateContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const UpdateForm = ({
  contactId,
  contactName,
  contactNumber,
  onClose,
}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: contactName,
        number: contactNumber,
        id: contactId,
      }}
      validationSchema={UpdateContactSchema}
      onSubmit={(values, id) => {
        if (values.name !== contactName || values.number !== contactNumber) {
          dispatch(
            updateContact({
              id: contactId,
              name: values.name,
              number: values.number,
            })
          );
          onClose();
          toast('Contact was successfully updated', {
            style: {
              backgroundColor: '#f8d256',
              color: '#2f2f2f',
              marginTop: '200px',
              height: '40px',
            },
          });

          return;
        }
      }}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="name" autoComplete="off" />
          <ErrorMessage name="name" component="p" />
        </FormField>

        <FormField>
          Number
          <Field type="tel" name="number" autoComplete="off" />
          <ErrorMessage name="number" component="p" />
        </FormField>

        <UpdateContactBtn type="submit">Update contact</UpdateContactBtn>
      </Form>
    </Formik>
  );
};
