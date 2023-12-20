import { AuthNav } from 'components/Auth/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hook';
import { AppBar } from './AppBarStyle';

// import { selectIsLoggedIn } from 'redux/auth/selectors';

export const BarApp = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" width="100">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
