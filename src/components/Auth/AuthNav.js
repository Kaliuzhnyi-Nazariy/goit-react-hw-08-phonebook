import { NavLink } from 'react-router-dom';
import { AuthMenu } from './AuthStyle';
import { LinkToOne, LinkToSec } from './AuthLinkStyle';

export const AuthNav = () => {
  return (
    <AuthMenu>
      <LinkToOne to="/register" className={NavLink}>
        Register
      </LinkToOne>

      <LinkToSec to="/login">Log In</LinkToSec>
    </AuthMenu>
  );
};
