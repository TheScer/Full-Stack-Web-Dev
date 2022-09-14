import MoviesList from "./components/MoviesList";
import "./App.css";
import { React, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const fetchMoviesHandler = async () => {
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      setIsLoading("is loading ...");
      const data = await response.json();
      setMovies(data.results);

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(null);
  };

  let content;

  if (error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p>loading ...</p>;
  } else {
    content = <MoviesList movies={movies} />;
  }

  //MoviesList movies={movies}
  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
