import styled from "@emotion/styled";

 export const Link = styled.NavLink`
    &.active {
    color: tomato;
  }`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;  
  text-decoration: none;
  font-weigth: 500;
  font-size: 18px;

`;

export const Wrapper = styled.div`
  padding: 12px;
`;