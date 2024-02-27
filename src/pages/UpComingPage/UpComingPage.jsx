import { useState } from "react";
import { API } from "../../API/Api";
import { useEffect } from "react";
import { Container } from "../../styles/Container.styled";
import { StyledMovieList } from "../HomePage/StyledHomePage";
import { MovieCard } from "../../components/MovieCard/MovieCard";


export const UpComingPage = () => {

  const [upComingMovie,setUpComingMovie] = useState([]);

  const getUpComingMovie = async () => {
    const data = await API.getMovies("movie/upcoming");
    setUpComingMovie(data.data)
  }

  console.log(upComingMovie);

  useEffect(() => {
    getUpComingMovie();
  }, [])

  return(
    <>
      <section>
        <Container>
          <StyledMovieList>
            {
              upComingMovie?.results?.map((item) => {
                return(
                  <MovieCard key={item.id} {...item} />
                )
              })
            }
          </StyledMovieList>
        </Container>
      </section>
    </>
  )
}