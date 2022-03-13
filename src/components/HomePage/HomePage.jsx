import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import {Wrapper, Nav} from "components/HomePage/HomePageStyle.styled"

 const Link = styled(NavLink)`
    &.active {
    color: tomato;
  }`;
  
export const HomePage = () => {
    return (
        <Wrapper>
            <Nav>
                <Link  to="/" >Home</Link >
                <Link  to="/movies" >Movies</Link >
            </Nav>
        </Wrapper>
        
    )
};