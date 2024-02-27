import { StyledHeader, StyledLogoLink, StyledLogoImg, StyledMenuList, StyledItem, StyledItemLink, StyledSearchInput } from "./header.style";
import logo from "../../assets/logo.svg";
import { Container, Row } from "../../styles/Container.styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Header = () => {

  const [inputValue,setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(inputValue.trim().length) {
      navigate(`/search/${inputValue}`)
    } else {
      navigate("/")
    }
  }, [inputValue])

  return(
    <>
      <StyledHeader>
        <Container>
          <Row justifycontent="space-between" alignitems="center">
            <StyledLogoLink to={"/"}>
              <StyledLogoImg src={logo}/>
            </StyledLogoLink>
            <StyledSearchInput value={inputValue} onChange={(evt) => setInputValue(evt.target.value)} type="search" placeholder="Search movie" />
            <StyledMenuList>
              <StyledItem>
                <StyledItemLink to={"/"} >
                  Popular movie
                </StyledItemLink>
              </StyledItem>
              <StyledItem>
                <StyledItemLink to={"/toprated"}>
                  Top Rated movie
                </StyledItemLink>
              </StyledItem>
              <StyledItem>
                <StyledItemLink to={"/upcoming"} >
                  Upcoming movie
                </StyledItemLink>
              </StyledItem>
            </StyledMenuList>
          </Row>
        </Container>
      </StyledHeader>
    </>
  )
}