import { getDataById } from "./getDataById";

export const addToFavorite = async (filmData) => {

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isDuplicate = favorites.some((favorite) => favorite.kinopoiskId === filmData.kinopoiskId);
  
    if (!isDuplicate) {
      favorites.push(filmData);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };