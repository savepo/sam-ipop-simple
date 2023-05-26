import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

// export const NavbarContainer = styled.div`
//     left: 0;
//     right: 0;
//     top: 0;
//     height: 100px;
//     background-color: red;
//     position: fixed;
// `

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;
  color: #fff;
  padding: 1rem;
  width: 100%;
  z-index: 2;
`;

export const NavSpacer = styled.div`
  height: 53px;
`


export const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin-left: 2%;
  margin-right: 2%;

  &:hover {
    color: #fbc02d;
  }
`;
