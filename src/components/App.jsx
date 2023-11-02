import { Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";
import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { lazy } from "react";


const SelectedMovie = lazy(() => import('pages/SelectedMovie/SelectedMovie'))
const MovieCast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (

    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />


          <Route path="movies/:movie_id" element={<SelectedMovie />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>


    </>
  );
};
