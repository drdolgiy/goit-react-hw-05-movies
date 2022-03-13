import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import {Wrapper, Nav, Link} from "components/HomePage/HomePageStyle.styled"



export const HomePage = () => {
    return (
        <Wrapper>                  
            <Nav>
                <Link><NavLink  to="/" >Home</NavLink></Link>
                <Link><NavLink  to="/movies" >Movies</NavLink ></Link>
            </Nav>
        </Wrapper>
        
    )
};