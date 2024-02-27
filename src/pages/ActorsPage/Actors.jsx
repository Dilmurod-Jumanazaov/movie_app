import { useEffect, useState } from "react"
import { Container, Row } from "../../styles/Container.styled"
import { StyledPageTitle, StyledScrollWrapper } from "./StyledActors"
import { API } from "../../API/Api";
import { SingleMovieCard } from "../../components/SingleMovieCard/SingleMovieCard";
import { SingleActor } from "../../components/SingleActor/SingleActor";
import { useNavigate, useParams } from "react-router-dom";
import { StyledMovieList } from "../HomePage/StyledHomePage";
import { StyledSingleMovieInfoBox } from "../../components/SingleMovieCard/StyledSingleMovieCard";



export const Actors = () => {

  const [actorsData,setActorsData] = useState([]);
  const [movieData,setMovieData] = useState([]);
  const navigate = useNavigate();
  const {movieId} = useParams();

  const getSingleMovie = async () => {
    const data = await API.getMovies(`movie/${movieId}`);
    setMovieData([data.data])
  }

  const getMovieActors = async () => {
    const data = await API.getMovies(`movie/${movieId}/credits`);
    setActorsData(data.data.cast);
  }

  useEffect(() => {
    getMovieActors();
    getSingleMovie();
  },[movieId])
  
  return(
    <>
      <section>
        <Container>
          <StyledSingleMovieInfoBox style={{width: "100%"}}>
            <StyledPageTitle>
              Movie and Actors
            </StyledPageTitle>
            <StyledSingleMovieInfoBox style={{display:"flex", alignItems:"flex-start", gap:"50px",paddingTop:"40px", paddingBottom:"50px"}}>
              {
                movieData?.length && movieData?.map((item) => <SingleMovieCard key={item.id} {...item} />)
              }
              <StyledScrollWrapper style={{display: "flex", flexWrap: "wrap", gap:"30px", flexGrow:"1", width:"40%"}}>
                {
                  actorsData?.length && actorsData?.map((item) =>  <SingleActor key={item.id} {...item} />)
                }
              </StyledScrollWrapper>
            </StyledSingleMovieInfoBox>
          </StyledSingleMovieInfoBox>
        </Container>
      </section>
    </>
  )
}
