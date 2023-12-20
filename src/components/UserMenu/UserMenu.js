import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { LogOutButton, UserMenuStyled } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserMenuStyled>
      <p>Welcome, {user.name}</p>
      <LogOutButton
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </LogOutButton>
    </UserMenuStyled>
  );
};
