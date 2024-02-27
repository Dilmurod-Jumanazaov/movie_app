import { useEffect } from "react";
import { useState } from "react";
import { API } from "../../API/Api";
import { StyledMovieList } from "../HomePage/StyledHomePage";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Container } from "../../styles/Container.styled";


export const TopRatedPage = () => {

  const [topRatedMovie,setTopRatedMovie] = useState([]);

  const getTopRatedMovies = async () => {
    const data = await API.getMovies("movie/top_rated")
    setTopRatedMovie(data.data);
  }

  console.log(topRatedMovie);

  useEffect(() => {
    getTopRatedMovies();
  },[])

  return(
    <>
      <section>
       <Container>
        <StyledMovieList>
            {
              topRatedMovie?.results?.map((item) => {
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