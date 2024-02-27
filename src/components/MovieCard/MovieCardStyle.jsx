import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMovieItem = styled.li`
  position: relative;
  max-width: 313px;
  width: 100%;
  height: 490px;
  border: 1px solid #ffffff63;
  border-radius: 8px;
`
export const StyledMovieLinkWrapper = styled(Link)`
  text-decoration: none;
`

export const StyledMovieImg = styled.img`
  width: 100%;
  height: 490px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`
export const StyledInfoWrapper = styled.div`
  position: relative;
  top: -100px;
  left: 15px;
  max-width: 290px;
  width: 100%;
`

export const StyledMovieTitle = styled.h3`
  margin: 0;
  padding: 4px 10px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  color: #000;
  background-color: #ffffff6a;
`
export const StyledMovieTime = styled.time`
  display: block;
  margin-bottom: 10px;
  padding: 0px 0px 0px 10px;
  font-size: 17 px;
  font-weight: 600;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: #000;
  letter-spacing: 1.4px;
  background-color: #ffffff61;
`
export const StyledMovieRating = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 3px 10px;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid darkgreen;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  background-color: darkgreen;
  color: #fff;
`
export const StyledMovieAdult = styled.span`
  position: absolute;
  top: 36px;
  right: 8px;
  font-size: 16px;
  font-weight: 600;
  color: red; 
`
