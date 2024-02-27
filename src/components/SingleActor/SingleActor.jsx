import { Row } from "../../styles/Container.styled"
import { StyledSingleMovieInfoBox } from "../SingleMovieCard/StyledSingleMovieCard"
import { StyledActorCharacter, StyledActorImg, StyledActorJob, StyledActorName } from "./StyledSingleActor"


export const SingleActor = ({id,character,known_for_department,name,profile_path}) => {
  return(
    <>
      <StyledSingleMovieInfoBox style={{maxWidth: "570px", width: "100%", padding:"20px", border:"1.5px solid #fff", borderRadius:"10px"}}>
        <Row gap="40px" alignitems="center">
          <StyledActorImg src={`https://image.tmdb.org/t/p/w200${profile_path}`}/>
          <StyledSingleMovieInfoBox style={{flexGrow:"1"}}>
            <StyledActorName>
              Name: {name}
            </StyledActorName>
            <StyledActorJob>
              Job: {known_for_department}
            </StyledActorJob>
            <StyledActorCharacter>
              Character: {character}
            </StyledActorCharacter>
          </StyledSingleMovieInfoBox>
        </Row>
      </StyledSingleMovieInfoBox>
    </>
  )
}