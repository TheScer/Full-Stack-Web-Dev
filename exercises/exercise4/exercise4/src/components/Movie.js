import "./Movie.css";
const Movie = (props) => {
  return (
    <div className="movie">
      <p className="movie__title">{props.info.title}</p>
      <p className="movie__director">{props.info.director}</p>
      <p className="movie__year">{props.info.year}</p>
    </div>
  );
};

export default Movie;
