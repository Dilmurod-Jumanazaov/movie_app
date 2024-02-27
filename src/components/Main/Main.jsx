import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../pages/HomePage/HomePage"
import { UpComingPage } from "../../pages/UpComingPage/UpComingPage"
import { TopRatedPage } from "../../pages/TopRatedPage/TopRatedPage"
import { StyledMain } from "./StyledMain"
import { Actors } from "../../pages/ActorsPage/Actors"
import { SearchPage } from "../../pages/SearchPage/SearchPage"


export const Main = () => {
  return(
    <>
      <StyledMain>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/toprated/" element={<TopRatedPage/>} />
          <Route path="/upcoming/" element={<UpComingPage/>} />
          <Route path="/movie/:movieId" element={<Actors/>} />
          <Route path="/search/:query" element={<SearchPage/>} />
        </Routes>
      </StyledMain>
    </>
  )
}