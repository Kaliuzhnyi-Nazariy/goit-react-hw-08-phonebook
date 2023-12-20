import styled from 'styled-components';
import { Button } from '@mui/material';

export const UserMenuStyled = styled.div`
  display: flex;
  margin-left: auto;
  gap: 16px;
`;

export const LogOutButton = styled(Button)`
  &&:hover {
    background-color: rgb(29, 112, 206);
    color: rgb(21, 30, 45);
  }
`;
