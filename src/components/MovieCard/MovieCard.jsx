import { Link, useParams } from "react-router-dom"
import { StyledInfoWrapper, StyledMovieAdult, StyledMovieImg, StyledMovieItem, StyledMovieLinkWrapper, StyledMovieRating, StyledMovieTime, StyledMovieTitle } from "./MovieCardStyle"

export const MovieCard = ({release_date,title,vote_average,adult,poster_path,id}) => {

  return(
    <>
      <StyledMovieItem>
        <div>
           <StyledMovieLinkWrapper to={`/movie/${id}`}>
            <StyledMovieImg src={`https://media.themoviedb.org/t/p/w300${poster_path}`} />
              <StyledMovieRating>
                  {vote_average.toFixed(1)}
              </StyledMovieRating>
              <StyledMovieAdult>
                  {adult ? "18+" : ""}
              </StyledMovieAdult>
              <StyledInfoWrapper>
                <StyledMovieTime dateTime={release_date}>
                  {release_date.slice(0,4)}
                </StyledMovieTime>
                <StyledMovieTitle>
                  {title}
                </StyledMovieTitle>
              </StyledInfoWrapper>
           </StyledMovieLinkWrapper>
        </div>
      </StyledMovieItem>  
    </>
  )
}