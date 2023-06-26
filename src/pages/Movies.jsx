import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleFill } from "react-icons/ri";
import { apiMovies } from "../service/movies";
import CardMovie from "../components/CardMovie/CardMovie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const urlImage = "https://image.tmdb.org/t/p/w500";

  const getMovies = async () => {
    const res = await fetch(apiMovies(page));
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
    cssEase: "linear",
  
    
  };

  return (
    <section className="container__movies">
      <section className="container__movies-hero"></section>

      <section className="container__movies-cards">
        {movies.length > 0 ? (
          <Slider {...settings}>
            {movies.map((movie, i) => (
              <div key={i}>
                <CardMovie
                  backgroundImage={`${urlImage}${movie.poster_path}`}
                  title={movie.original_title}
                  description={movie.overview}
                  date={movie.release_date}
                  rating={movie.vote_average}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <h1>Loading</h1>
        )}
        <section className="container__movies-pagination">
          <button onClick={previousPage}>
            <RiArrowLeftDoubleFill  className="icon"/>
          </button>
          <h2>{page}</h2>
          <button onClick={nextPage}>
            {" "}
            <RiArrowRightDoubleLine className="icon" />{" "}
          </button>
        </section>
      </section>
    </section>
  );
};

export default Movies;
