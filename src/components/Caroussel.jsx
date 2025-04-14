import { searchMovies, getPopularMovies } from "../Services/Api";
import { useState, useEffect } from "react";
import Movies from "./Movies";

function Caroussel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to Load Movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to Load Movies...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="container-movies row" id="filmes">
          {movies.map((movie) => (
            <Movies movie={movie} key={movie.id} />
          ))}
          )
        </div>
      )}
    </>
  );
}

export default Caroussel;
