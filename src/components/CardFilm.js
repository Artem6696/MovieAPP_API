import getDataById from "../functions/getDataById";
export const CardFilm = (kinopoiskId, posterUrlPreview, nameRu, selectedGenres) => {
  let three = selectedGenres.join(", ");



  return `
    <div id="${kinopoiskId}" class="card-film">
      <div class="card-film_image">
        <img src="${posterUrlPreview}">
      </div>
      <div class="card-film_content">
        <div class="card-film_title">${nameRu}</div>
        <div class="card-film_genre">${three}</div>
        <div class="add-to-favorite-btn" id="${kinopoiskId}" onclick="getDataById('${kinopoiskId}')">Посмотреть позже</div>
      </div>
    </div>
  `;
};