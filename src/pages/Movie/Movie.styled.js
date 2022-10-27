import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkWrapper = styled.div`
border-top: solid 1px #000000;
border-bottom: solid 1px #000000;
padding: 10px;
    `

export const StyledLink = styled(NavLink)`
background-color: transparent;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

:hover:not(.active),
:focus-visible:not(.active) {
  color: #fff;
  background-color: #1A1A1A;
  transform: translateY(-2px);
}

:first-child{
    margin-bottom: 10px;
}
&.active {
color: #fff;
  background-color: #042930;
  transform: translateY(0);}`