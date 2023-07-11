import { addToFavorite } from "./addToFavorite";

 export const getDataById = async (kinopoiskId) => {
  const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskId}`
  const apiKey = '8c8e1a50-6322-4135-8875-5d40a5420d86'

  const response = await fetch(url, {
   headers: {
       'X-API-KEY': apiKey
   }
  });
  const dataSearchById = await response.json();
  addToFavorite(dataSearchById)
return dataSearchById


}

window.getDataById = getDataById;



 
