import { getDataHeaderFilter } from "./getDataHeaderFilter"
import { CardFilm } from "../components/cardFilm"
import { showFilmCategory, showMiniSeriesCategory, showSeriesCategory, showTopCategory, showTvShowCategory } from "./showCategoryName";
import { paginationFilm, paginationMiniSeries, paginationSeries, paginationTvShow, removePagination } from "./pagination";
import { rederMiniSeriesCategoryButton, renderFilmCategoryButton, renderSeriesCategoryButton, renderTvShowCategoryButton } from "./buttons";
const filmContainer = document.querySelector('.film-container')

const changeType = () => {

    const filmElemHeader = document.querySelector('.nav-list-items_film')
    const tvShowElemHeader = document.querySelector('.nav-list-items_tvshow')
    const seriesElemHeader = document.querySelector('.nav-list-items_series')
    const miniSeriesElemHeader = document.querySelector('.nav-list-items_miniseries')

    filmElemHeader.addEventListener('click', async () => {
        const filmArray = await getDataHeaderFilter('FILM')
        const filteredFilmArray = filmArray.filter((film) => film.genres.length > 0);
      
        const HTMLtypeFilm = filteredFilmArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres }) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
          
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        })
        filmContainer.innerHTML = HTMLtypeFilm.join("")
        showFilmCategory()
        renderFilmCategoryButton()
        paginationFilm()
    })
    tvShowElemHeader.addEventListener('click', async () => {
        const tvShowArray = await getDataHeaderFilter("TV_SHOW")
        const filtredTvShow = tvShowArray.filter((tvShow) => tvShow.genres.length > 0);
       
        const HTMLtypeTVshop = filtredTvShow.map(({kinopoiskId,posterUrlPreview,nameRu,genres }) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
            
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        })
        filmContainer.innerHTML = HTMLtypeTVshop.join("")
        showTvShowCategory()
        renderTvShowCategoryButton()
        paginationTvShow()
    })
    seriesElemHeader.addEventListener('click', async () => {
        const seriesArray = await getDataHeaderFilter('TV_SERIES')
        const filtredSeries = seriesArray.filter((series) => series.genres.length > 0);
        
        const HTMLtypeSeries = filtredSeries.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
            
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        })
        filmContainer.innerHTML = HTMLtypeSeries.join("")
        showSeriesCategory()
        renderSeriesCategoryButton()
        paginationSeries()
    })
    miniSeriesElemHeader.addEventListener('click', async () => {
        const miniSeriesArray = await getDataHeaderFilter('MINI_SERIES')
        const filtredMiniSeries = miniSeriesArray.filter((miniSeries) => miniSeries.genres.length > 0);
        
        
        const HTMLtypeMiniSeries = filtredMiniSeries.map(({ kinopoiskId, posterUrlPreview, nameRu, genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
           
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        })
        filmContainer.innerHTML = HTMLtypeMiniSeries.join("")
        showMiniSeriesCategory()
        rederMiniSeriesCategoryButton()
        paginationMiniSeries()
    })
}
export default changeType