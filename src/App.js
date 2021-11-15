import { Fragment } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Movie from "./Pages/MoviePage/Movie";
import MovieUpdate from "./Pages/MovieUpdate/MovieUpdate";
import MovieAdd from "./Pages/MovieAdd/MovieAdd";
import Actor from "./Pages/ActorPage/Actor";
import ActorAdd from "./Pages/ActorAdd/ActorAdd";
import ActorUpdate from "./Pages/ActorUpdate/ActorUpdate";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>Actor
          <Route exect path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />}></Route>
          <Route path="/movies/:id/update" element={<MovieUpdate />}></Route>
          <Route path="/movies/add" element={<MovieAdd />}></Route>
          <Route path="/actors/:id" element={<Actor />}></Route>
          <Route path="/actors/add" element={<ActorAdd />}></Route>
          <Route path="/actors/:id/update" element={<ActorUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;