import { deleteContact } from 'redux/Contacts/operations';
import {
  ContactItem,
  ContactListStyled,
  ConstactItem,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'redux/Contacts/sellectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const listOfFilteredContacts = useSelector(filteredContacts);

  return (
    <ContactListStyled>
      {listOfFilteredContacts.map(item => (
        <ContactItem key={item.id}>
          <ConstactItem>
            {item.name}: {item.number}
          </ConstactItem>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactListStyled>
  );
};
