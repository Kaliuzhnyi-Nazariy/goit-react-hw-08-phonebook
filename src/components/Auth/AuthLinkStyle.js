import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkToOne = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: rgb(75, 170, 39);
  color: white;
  font-weight: 600;

  &&:hover {
    scale: 1.1;
  }
`;

export const LinkToSec = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 15px 15px;
  border: 1px solid yellow;
  border-radius: 8px;
  background-color: rgb(158, 158, 158, 0.5);
  color: white;
  font-weight: 600;

  &&:hover {
    scale: 1.1;
    /* transition: scale cubic-bezier(0.19, 1, 0.22, 1); */
  }
`;
