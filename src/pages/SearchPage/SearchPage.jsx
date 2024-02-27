import { Container } from "../../styles/Container.styled";
import { useEffect, useState } from "react";
import { API } from "../../API/Api";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useNavigate, useParams } from "react-router-dom";
import { StyledMovieList } from "../HomePage/StyledHomePage";
import { useDebounce } from "../../hooks/useDebounce";
import { StyledNotFoundTitle } from "./StyledSearch";


export const SearchPage = () => {

  const [searchedMovie,setSearchedMovie] = useState([]);
  const {query} = useParams();
  const debounceValue = useDebounce(query,500);
  
  console.log(debounceValue);

  const getMovieData = async (debounceValue) => {
    const data = await API.getMovies(`search/movie?query=${debounceValue}`);
    setSearchedMovie(data.data);
  }

  useEffect(() => {
    getMovieData(debounceValue);
  },[debounceValue])

  return(
    <>
      <section>
        <Container>
          <StyledMovieList>
            {
              searchedMovie?.results?.length ? searchedMovie?.results?.map((item) => {
                return(
                  <MovieCard key={item.id} {...item} />
                )
              }) : <StyledNotFoundTitle>Movie not found</StyledNotFoundTitle>
            }
          </StyledMovieList>
        </Container>
      </section>
    </>
  )
};
