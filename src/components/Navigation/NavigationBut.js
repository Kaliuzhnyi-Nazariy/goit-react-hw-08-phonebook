import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkPage = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: rgb(66, 117, 238);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  text-decoration: none;
  color: rgb(240, 207, 39);
  font-weight: 600;
`;
