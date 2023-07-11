import {CardFavoritesFilms} from "../components/CardFavoritesFilms"

const renderFavorites = async () => {
  const favoritesArray = JSON.parse(localStorage.getItem("favorites")) || [];

  const HTMLfavorites = favoritesArray.map(({ kinopoiskId, posterUrlPreview, nameRu, genres }) => {
    const selectedGenres = genres.slice(0, 3).map((genre) => genre.genre);
    return CardFavoritesFilms(kinopoiskId, posterUrlPreview, nameRu, selectedGenres);
  });

  return HTMLfavorites.join('');
};

export default renderFavorites;