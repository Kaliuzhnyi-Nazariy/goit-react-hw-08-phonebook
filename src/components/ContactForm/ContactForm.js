import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  FormikFieldStyled,
  FormStyled,
  ErrorMessageStyled,
  LabelStyled,
  SubmitButtonStyled,
} from '../ContactForm/ContactFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/Contacts/operations';
import { selectContacts } from 'redux/Contacts/sellectors';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(1, "Couldn't be empty").required('Required'),
  number: Yup.number()
    .required('Required')
    .min(7, 'Must have 7 numbers')
    .integer("A phone number can't include a decimal point")
    .min(7, 'Must have 7 numbers'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <Formik
        initialValues={{
          id: '',
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          const newContact = {
            name: values.name,
            number: values.number,
          };

          if (
            contacts.length > 0 &&
            contacts.find(
              contact =>
                contact.name.toLowerCase() === newContact.name.toLowerCase()
            )
          ) {
            return alert(`${newContact.name} is already in contacts`);
          }
          dispatch(addNewContact(newContact));
          actions.resetForm();
        }}
      >
        <FormStyled>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <FormikFieldStyled id="name" name="name" />
          <ErrorMessageStyled name="name" component="span"></ErrorMessageStyled>
          <LabelStyled htmlFor="number">Number</LabelStyled>
          <FormikFieldStyled id="number" name="number" type="tel" />
          <ErrorMessageStyled
            name="number"
            component="span"
          ></ErrorMessageStyled>
          <SubmitButtonStyled type="submit">Add contact</SubmitButtonStyled>
        </FormStyled>
      </Formik>
    </div>
  );
};
