import { Container } from "../../styles/Container.styled";
import { StyledMovieList } from "./StyledHomePage";
import { useEffect, useState } from "react";
import { API } from "../../API/Api";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";


export const HomePage = () => {

  const [movieData,setMoviedata] = useState([]);
  const [page,setPage] = useState(1);

  const getMovieData = async () => {
    const data = await API.getMovies("movie/popular");
    setMoviedata(data.data);
  }

  useEffect(() => {
    getMovieData();
  },[])

  const handlePageClick = () => {
    setPage(page + 1);
  }

  return(
    <>
      <section>
        <Container>
          <StyledMovieList>
            {
              movieData?.results?.length && movieData?.results?.map((item) => {
                return(
                  <MovieCard key={item.id} {...item} />
                )
              })
            }
          </StyledMovieList>
          <ReactPaginate containerClassName={"pagination"} activeClassName="active" breakLabel="..." nextLabel="Next >" initialPage={page} onPageChange={handlePageClick} pageRangeDisplayed={3} pageCount={20} previousLabel="< Previous" renderOnZeroPageCount={""} />
        </Container>
      </section>
    </>
  )
};
