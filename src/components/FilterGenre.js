export const FilterGenre = () => {
    return `
    <div class="dropdown">
    <div class="dropbtn">Все жанры</div>
    <div class="dropdown-content">
      <div class="row">
        <a class="film-genre" id="film-genre_thriller" href="#">Триллер</a>
        <a class="film-genre" id="film-genre_drama" href="#">Драма</a>
        <a class="film-genre" id="film-genre_criminal" href="#">Криминал</a>
        <a class="film-genre" id="film-genre_melodrama" href="#">Мелодрама</a>
        <a class="film-genre" id="film-genre_detective"href="#">Детектив</a>
      </div>
      <div class="row">
        <a class="film-genre" id="film-genre_fantasy" href="#">Фантастика</a>
        <a class="film-genre" id="film-genre_adventure" href="#">Приключения</a>
        <a class="film-genre" id="film-genre_biography" href="#">Биография</a>
        <a class="film-genre" id="film-genre_western" href="#">Вестерн</a>
        <a class="film-genre" id="film-genre_action" href="#">Боевик</a>
      </div>
      <div class="row">
        <a class="film-genre" id="film-genre_famaly" href="#">Семейный</a>
        <a class="film-genre" id="film-genre_comedy" href="#">Комедия</a>
        <a class="film-genre" id="film-genre_military" href="#">Военный</a>
        <a class="film-genre" id="film-genre_history" href="#">История</a>
        <a class="film-genre" id="film-genre_horror" href="#">Ужасы</a>
      </div>
      <!-- Добавьте остальные ряды фильмов здесь -->
    </div>
  </div>
    `
}