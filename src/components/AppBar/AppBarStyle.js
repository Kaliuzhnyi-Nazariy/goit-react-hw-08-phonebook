const { default: styled } = require('styled-components');

export const AppBar = styled.nav`
  display: flex;
  background-color: rgb(255, 255, 255, 0.02);
  padding: 24px;
  border-bottom: 1px solid white;
  /* border-radius: 0 0 16px 16px; */
  box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 15px -3px,
    rgba(255, 255, 255, 0.05) 0px 4px 6px -2px;
`;
