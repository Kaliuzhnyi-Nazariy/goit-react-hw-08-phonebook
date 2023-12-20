import { useAuth } from 'hook';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { LinkPage } from './NavigationBut';

export const Navigation = () => {
  const isLoggedIn = useAuth(selectIsLoggedIn);
  return (
    <nav style={{ display: 'flex', gap: '16px' }}>
      <LinkPage to="/">Home</LinkPage>
      {isLoggedIn && <LinkPage to="/contacts">Contacts</LinkPage>}
    </nav>
  );
};
