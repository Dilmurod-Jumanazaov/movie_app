import { Link } from "react-router-dom";
import styled from "styled-components";
import search from "../../assets/search.png";


export const StyledHeader = styled.header`
  padding: 20px 0;
  background-color: #161d2f;
`
export const StyledLogoLink = styled(Link)`
  
`

export const StyledLogoImg = styled.img`
  max-width: 70px;
  width: 100%;
  height: 50px;
`
export const StyledMenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 45px;
  margin: 0;
  padding-left: 0;
  list-style: none;
`
export const StyledItem = styled.li`
  
`
export const StyledItemLink = styled(Link)`
  padding: 8px 4px;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: color 0.2s linear;

  &:hover {
    color: #fc4747;
  }
`
export const StyledSearchInput = styled.input`
  max-width: 360px;
  width: 100%;
  padding: 10px 24px 10px 50px;
  font-size: 18px;
  color: #fff;
  border: none;
  border-bottom: 2px solid #fff;
  border-radius: 7px;
  color: #fff;
  background-color: transparent;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 27px;

  &::placeholder {
    color: gray;

  }
  &:focus {
    outline: none;
  }
`
