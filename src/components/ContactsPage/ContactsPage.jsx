import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ThreeDots } from 'react-loader-spinner';
import {
  ContactListTitle,
  ContactsLayout,
  FormTitle,
} from './ContactsPage.styled';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsLayout>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      <ContactListTitle>Contacts</ContactListTitle>
      <ContactFilter />

      {isLoading && !error && (
        <ThreeDots
          height="70"
          width="70"
          radius="8"
          color="#ffc400"
          ariaLabel="three-dots-loading"
          wrapperStyle={{marginLeft: 40,}}
          wrapperClassName=""
          visible={true}
        />
      )}
      {contacts.length > 0 && <ContactList />}
    </ContactsLayout>
  );
};
