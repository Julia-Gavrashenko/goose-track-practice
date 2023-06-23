
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { ContactContainer, List } from './ContactList.styled';





export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactContainer>
      <List>
        {filteredContacts?.map(contact => (
          <ContactItem key={contact.id} info={contact}></ContactItem>
        ))}
      </List>
    </ContactContainer>
  );
};



