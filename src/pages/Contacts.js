import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';
import { selectIsLoading } from 'redux/Contacts/sellectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        // marginLeft: '50%',
        // justifyContent: 'center',
        // width: '1200',
      }}
    >
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Contacts</h2>
      <ContactFilter />
      {isLoading && <b>Loading! Wait a sec...</b>}
      <ContactList />
    </div>
  );
}
