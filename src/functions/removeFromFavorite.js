// import { CardFavoritesFilms } from "../components/CardFavoritesFilms";
// export const removeFromFavorite =  (kinopoiskId) => {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
//     const updatedFavorites = favorites.filter(
//       (favorite) => favorite.kinopoiskId !== kinopoiskId
//     );
  
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

export const removeFromFavorite = (kinopoiskId) => {
 
  const favoritesArray = JSON.parse(localStorage.getItem("favorites")) || [];

  const updatedFavorites = favoritesArray.filter((film) => film.kinopoiskId !== kinopoiskId);

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};