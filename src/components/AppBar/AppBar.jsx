import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Wrapper, Nav } from "pages/HomePage/HomePageStyle.styled"

const Link = styled(NavLink)`
    &.active {
    color: tomato;
  }`;

export const AppBar = () => {
    return (
        <header>
            <Wrapper>
                <Nav>
                    <Link to="/" >Home</Link >
                    <Link to="/movies" >Movies</Link >
                </Nav>
            </Wrapper>
            <Outlet />
        </header>
    )
};