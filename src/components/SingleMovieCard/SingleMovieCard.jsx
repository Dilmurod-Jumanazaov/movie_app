
import { StyledMovieTagline, StyledSingleMovImg, StyledSingleMovieInfoBox } from "./StyledSingleMovieCard";
import { StyledMovieTitle } from "../MovieCard/MovieCardStyle";
import { Row } from "../../styles/Container.styled";

export const SingleMovieCard = ({id,title,overview,poster_path,release_date,tagline,vote_average,production_countries,genres}) => {
  return(
    <>
      <Row gap="40px">
        <StyledSingleMovImg src={`https://media.themoviedb.org/t/p/w300${poster_path}`}/>
        <StyledSingleMovieInfoBox style={{display:"inline-flex", flexDirection:"column", maxWidth:"450px", width:"100%"}}>
          <StyledMovieTitle style={{textAlign:"center", backgroundColor:"transparent", color:"#ff483f",fontSize:"25px", letterSpacing:"1.4px"}}>
              {title}
          </StyledMovieTitle>
          <StyledMovieTagline style={{textAlign:"center", color:"green",letterSpacing:"1.2px"}}>
            {tagline}
          </StyledMovieTagline>
          <StyledMovieTagline>
            {overview}
          </StyledMovieTagline>
          <StyledMovieTagline>
            Movie rating: {vote_average.toFixed(1)}
          </StyledMovieTagline>
          <StyledMovieTagline>
            Movie release date: {release_date}
          </StyledMovieTagline>
          <StyledMovieTagline>
            Production country: 
            {
              production_countries.map((item) => item.name.split())
            }
          </StyledMovieTagline>
          <StyledMovieTagline>
            Movie genres: 
            {
              genres.map((item) => item.name.split(" ").join(" "))
            }
           </StyledMovieTagline>
        </StyledSingleMovieInfoBox>
      </Row>
    </>
  )
}