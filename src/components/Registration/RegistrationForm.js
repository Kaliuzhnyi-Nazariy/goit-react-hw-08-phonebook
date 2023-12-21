import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { Form } from './RegisterStyled';
import TextField from '@mui/material/TextField';
import Notiflix from 'notiflix';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        Notiflix.Notify.success('Welcome in phone book!');
      })
      .catch(error => {
        Notiflix.Notify.failure('Please try input another info!');
      });
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <h2 style={{ color: 'black' }}>Registration</h2>
      <TextField required id="outlined-required" label="Username" name="name" />
      <TextField required id="outlined-required" label="Email" name="email" />
      <TextField
        required
        id="outlined-required"
        label="Password"
        name="password"
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Form>
  );
};
