import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form } from './LoginStyle';
import Notiflix from 'notiflix';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        Notiflix.Notify.success(`Well come back!`);
      })
      .catch(() => {
        Notiflix.Notify.failure(
          `Please check credentials again! Maybe you made a mistake!`
        );
      });
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <h2 style={{ color: 'black' }}>Login</h2>
      <TextField required id="outlined-required" label="Email" name="email" />
      <TextField
        required
        id="outlined-required"
        label="Password"
        name="password"
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Form>
  );
};
