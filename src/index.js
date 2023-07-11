import "./style.scss";
import Header from "./components/Header";
import changeType from "./functions/changeType";
import { CardFilm } from "./components/cardFilm";
import { getDataSearchByName } from "./functions/getDataSearchByName";
import { getDataAll } from "./functions/getDataMain";
import { FilterGenre } from "./components/FilterGenre";
import { togleDpodDown } from "./functions/togleDropDown";
import { getDataHeaderFilter } from "./functions/getDataHeaderFilter";
import { showFavoriteCategory, showFilmCategory, showMainCategory, showMiniSeriesCategory, showSeriesCategory, showTopCategory, showTvShowCategory } from "./functions/showCategoryName";
import changeMain from "./functions/chagneMain";
import { paginationMain, removePagination } from "./functions/pagination";
import { renderMainCategoryButton } from "./functions/buttons";
import { changeGenre } from "./functions/changeGenre";
import { addToFavorites } from "./functions/getDataById";
import renderFavorites from "./functions/renderFavorites";
import { CardFavoritesFilms } from "./components/CardFavoritesFilms";
import { addToFavorite } from "./functions/addToFavorite";
import { removeFromFavorite } from "./functions/removeFromFavorite";
const filmContainer = document.querySelector('.film-container')
const showMore = document.querySelector('#show-more')


filmContainer.innerHTML = await changeMain()


const showHeader = () => {
    const headerElem = document.querySelector('.header')
    headerElem.innerHTML = Header()
}
const showFilter = () => {
    const filterElem = document.querySelector('.filter')
    filterElem.innerHTML = FilterGenre()

}
const showMain = () => {
    const allContent = document.querySelector('.nav-list-items_main')

    allContent.addEventListener('click', async () => {
        filmContainer.innerHTML = await changeMain()
        showMainCategory()
        renderMainCategoryButton()
        paginationMain()

    })
    renderMainCategoryButton()
    paginationMain()
    showMainCategory()

}

const showFavorites = () => {
    const header_user = document.querySelector('.header_user');
    header_user.addEventListener('click', async () => {
      showFavoriteCategory(); 
      
      const favoritesHTML = await renderFavorites();
      
      if (favoritesHTML) {
        filmContainer.innerHTML = favoritesHTML;
      } else {
        filmContainer.innerHTML = "Вы пока не добавили ни одного фильма";
      }
    });

    filmContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-from-favorite-btn")) {
          const kinopoiskId = event.target.closest(".card-film").id;
          console.log(localStorage.getItem("favorites"))
          removeFromFavorite(kinopoiskId);
          console.log("Фильм удален из избранного:", kinopoiskId);
          // Перерендер или выполнение других действий после удаления
        }
      });
  };
 

const App = async () => {
    
    showHeader()
    showFavorites()
    showFilter()
    togleDpodDown()
    changeType()
    showMain()
    changeGenre()

}
App()






