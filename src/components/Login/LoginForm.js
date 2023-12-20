import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form } from './LoginStyle';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
