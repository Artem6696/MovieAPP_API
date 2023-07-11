import { CardFilm } from "../components/cardFilm"
import { renderAdventureGenreButton, renderBigoraphyGenreButton, renderComedyGenreButton, renderCriminalrGenreButton, renderDetectivGenreButton, renderDramaGenreButton, renderFamalyGenreButton, renderFantasyGenreButton, renderHistoryGenreButton, renderHorrorGenreButton, renderMelodramaGenreButton, renderThrillerGenreButton, renderWesternGenreButton , rendeActionGenreButton} from "./buttons";
import { getDataGenre } from "./getDataGenre"
import { paginationAction, paginationAdventure, paginationBiography, paginationComedy, paginationCriminal, paginationDetective, paginationDrama, paginationFamaly, paginationFantasy, paginationHistory, paginationHorror, paginationMelodrama, paginationThriller, paginationWestern } from "./pagination";
import { showActionGenre, showAdventureGenre, showBiographyGenre, showComedyGenre, showCriminalGenre, showDetectiveGenre, showDramaGenre, showFamalyGenre, showFantasyGenre, showHistoryGenre, showHorrorGenre, showMelodramGenre, showMilitaryGenre, showThrillerGenre, showWesternGenre } from "./showGenreName";
const filmContainer = document.querySelector('.film-container')

export const changeGenre = () => {
    
    document.querySelector('#film-genre_thriller').addEventListener('click', async () => {
        const thrillerArray = await getDataGenre(1)
        const filteredThrillerArray = thrillerArray.filter((film) => film.genres.length > 0);

        const renderThriller = filteredThrillerArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres }) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
            
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        });
        filmContainer.innerHTML = renderThriller.join("")
        showThrillerGenre()
        renderThrillerGenreButton()
        paginationThriller()
    });
    document.querySelector('#film-genre_drama').addEventListener('click', async () => {
        const dramaArray = await getDataGenre(2)
        const filteredDramaArray = dramaArray.filter((film) => film.genres.length > 0 );

        const renderDrama = filteredDramaArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
            
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        });
        filmContainer.innerHTML = renderDrama.join("")
        showDramaGenre()
        renderDramaGenreButton()
        paginationDrama()
    });
    document.querySelector('#film-genre_criminal').addEventListener('click', async () => {
        const criminalArray = await getDataGenre(3)
        const filterCriminalArray = criminalArray.filter((film) => film.genres.length > 0);

        const renderCriminal = filterCriminalArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        });
        filmContainer.innerHTML = renderCriminal.join("")
        showCriminalGenre()
        renderCriminalrGenreButton()
        paginationCriminal()
    });
    document.querySelector('#film-genre_melodrama').addEventListener('click', async () => {
        const melodramArray = await getDataGenre(4)
        const filteredMelodramArray = melodramArray.filter((film) => film.genres.length > 0);

        const renderMelodram = filteredMelodramArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        });
        filmContainer.innerHTML = renderMelodram.join("")
        showMelodramGenre()
        renderMelodramaGenreButton()
        paginationMelodrama()
    });
    document.querySelector('#film-genre_detective').addEventListener('click', async () => {
        const detectiveArray = await getDataGenre(5)
        const filteredDetectiveArray = detectiveArray.filter((film) => film.genres.length > 0);

        const renderDetective = filteredDetectiveArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        });
        filmContainer.innerHTML = renderDetective.join("")
        showDetectiveGenre()
        renderDetectivGenreButton()
        paginationDetective()
    })  
    document.querySelector('#film-genre_fantasy').addEventListener('click', async () => {
        const fantasyArray = await getDataGenre(6)
        const filteredFantasyArray = fantasyArray.filter((film) => film.genres.length > 0);

        const renderFantasy = filteredFantasyArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        })
        filmContainer.innerHTML = renderFantasy.join("")
        showFantasyGenre()
        renderFantasyGenreButton()
        paginationFantasy()
    })
    document.querySelector('#film-genre_adventure').addEventListener('click', async () => {
        const adventureArray = await getDataGenre(6)
        const filteredAdventureArray = adventureArray.filter((film) => film.genres.length > 0);

        const renderAdventure = filteredAdventureArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        });
        filmContainer.innerHTML = renderAdventure.join("")
        showAdventureGenre()
        renderAdventureGenreButton()
        paginationAdventure()
    })
    document.querySelector('#film-genre_biography').addEventListener('click' , async () => {
        const biographyArray = await getDataGenre(8)
        const filteredBiographyArray = biographyArray.filter((film) => film.genres.length > 0)

        const renderBiography = filteredBiographyArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        })
        filmContainer.innerHTML = renderBiography.join("")
        showBiographyGenre()
        renderBigoraphyGenreButton()
        paginationBiography()
    })
    document.querySelector('#film-genre_western').addEventListener('click', async () => {
        const westernArray = await getDataGenre(10)
        const filtredWesternArray = westernArray.filter((film) => film.genres.length > 0)

        const renderWestern = filtredWesternArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        });
        filmContainer.innerHTML = renderWestern.join("")
        showWesternGenre()
        renderWesternGenreButton()
        paginationWestern()
    })
    document.querySelector('#film-genre_action').addEventListener('click', async () => {
        const actionArray = await getDataGenre(11)
        const filtredActionArray = actionArray.filter((film) => film.genres.length > 0)

        const renderAction = filtredActionArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        });
        filmContainer.innerHTML = renderAction.join("")
        showActionGenre()
       rendeActionGenreButton()
        paginationAction()
    })
    document.querySelector('#film-genre_famaly').addEventListener('click', async () => {
        const famalyArray = await getDataGenre(19)
        const filtredFamalyArray = famalyArray.filter((film) => film.genres.length > 0)

        const renderFamaly = filtredFamalyArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        })
        filmContainer.innerHTML = renderFamaly.join("")
        showFamalyGenre()
        renderFamalyGenreButton()
        paginationFamaly()
    })
    document.querySelector('#film-genre_comedy').addEventListener('click', async () => {
        const comedyArray = await getDataGenre(13)
        const filtredComedyArray = comedyArray.filter((film) => film.genres.length > 0)

        const renderComedy = filtredComedyArray.map(({kinopoiskId, posterUrlPreview, nameRu, genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
            return CardFilm(kinopoiskId, posterUrlPreview, nameRu, selectedGenres)
        })
        filmContainer.innerHTML = renderComedy.join("")
        showComedyGenre()
        renderComedyGenreButton()
        paginationComedy()
    })
    document.querySelector('#film-genre_military').addEventListener('click', async () => {
        const militaryArray = await getDataGenre(14)
        const filtredMilitaryArray = militaryArray.filter((film) => film.genres.length > 0)

        const renderMilitary = filtredMilitaryArray.map(({kinopoiskId, posterUrlPreview, nameRu, genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
            return CardFilm(kinopoiskId, posterUrlPreview, nameRu, selectedGenres)
        })
        filmContainer.innerHTML = renderMilitary.join("")
        showMilitaryGenre()
        renderComedyGenreButton()
        paginationComedy()
    })
    document.querySelector('#film-genre_history').addEventListener('click', async () => {
        const historyArray = await getDataGenre(15)
        const filteredHistoryArray = historyArray.filter((film) => film.genres.length > 0)

        const renderHistory = filteredHistoryArray.map(({kinopoiskId, posterUrlPreview, nameRu, genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
            return CardFilm(kinopoiskId, posterUrlPreview, nameRu, selectedGenres)
        })
        filmContainer.innerHTML = renderHistory.join("")
        showHistoryGenre()
        renderHistoryGenreButton()
        paginationHistory()
    })
    document.querySelector('#film-genre_horror').addEventListener('click', async () => {
        const horrorArray  = await getDataGenre(17)
        const filtredHorrorArray = horrorArray.filter((film) => film.genres.length > 0)

        const renderHorror = filtredHorrorArray.map(({kinopoiskId, posterUrlPreview, nameRu, genres}) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
            return CardFilm(kinopoiskId, posterUrlPreview, nameRu, selectedGenres)
        })
        filmContainer.innerHTML = renderHorror.join("")
        showHorrorGenre()
        renderHorrorGenreButton()
        paginationHorror()
    })
}