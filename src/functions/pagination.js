import { CardFilm } from "../components/cardFilm";
import { getDataHeaderFilter } from "./getDataHeaderFilter";
import { getDataAll } from "./getDataMain";
import { getDataGenre } from "./getDataGenre"

const filmContainer = document.querySelector('.film-container')
let page = 1



export const paginationMain = async () => {
  const main_btn = document.querySelector('#btn_main');
  
  
  main_btn.addEventListener('click', async () => {
    const topFilms = await getDataAll(++page);

    const filteredTopArray = topFilms.filter((film) => film.genres.length > 0);

    const HTMLtopFilms = filteredTopArray.map(({ kinopoiskId, posterUrlPreview, nameRu, genres }) => {
      const selectedGenres = genres.slice(0, 3).map((genre) => genre.genre);
      return CardFilm(kinopoiskId, posterUrlPreview, nameRu, selectedGenres);
    });

    filmContainer.insertAdjacentHTML('beforeend', HTMLtopFilms.join(''));

    
  });
};
    

    export const paginationFilm = async () => {
        const film_btn = document.querySelector('#btn_film')

        film_btn.addEventListener('click', async () => {
            const filmArray = await getDataHeaderFilter('FILM', ++page)
            
            const filteredFilmArray = filmArray.filter((film) => film.genres.length > 0);
            
            const HTMLtypeFilm = filteredFilmArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres }) => {
              const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);

              return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
          });
            filmContainer.insertAdjacentHTML('beforeend', HTMLtypeFilm.join(''));
        });
      }
      
    
    
    export const paginationTvShow = async () => {
        const tvShow_btn = document.querySelector('#btn_tv-show')

        tvShow_btn.addEventListener('click', async () => {
            const tvShowArray = await getDataHeaderFilter("TV_SHOW", ++page)
            
            const filtredTvShow = tvShowArray.filter((tvShow) => tvShow.genres.length > 0);
            
            const HTMLtypeTVshop = filtredTvShow.map(({kinopoiskId,posterUrlPreview,nameRu,genres }) => {
              const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);

              return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
          });
            filmContainer.insertAdjacentHTML('beforeend', HTMLtypeTVshop.join(''));
        });
    }
    
    export const paginationSeries = async () => {
      const series_btn = document.querySelector('#btn_series')

      series_btn.addEventListener('click', async () => {
        const seriesArray = await getDataHeaderFilter("TV_SERIES", ++page)

        const filtredSeries = seriesArray.filter((series) => series.genres.length > 0)

        const HTMLseries = filtredSeries.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
          const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)

          return CardFilm(kinopoiskId,posterUrlPreview,nameRu, selectedGenres)
        })
        filmContainer.insertAdjacentHTML('beforeend', HTMLseries.join(''))
      })
    }


    export const paginationMiniSeries = async () => {
      const miniSeries_btn = document.querySelector('#btn_mini-series')

      miniSeries_btn.addEventListener('click', async () => {
        const miniSeriesArray = await getDataHeaderFilter('MINI_SERIES', ++page)

        const filtredMiniSeriesArray = miniSeriesArray.filter((series) => series.genres.length > 0)

        const HTMLminiSeries = filtredMiniSeriesArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
          const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)

          return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        })
        filmContainer.insertAdjacentHTML('beforeend', HTMLminiSeries.join(""))
      })
    }
    // Пагинация для жанровв 

  export const paginationThriller = async () => {
    const thriller_btn = document.querySelector('#btn_thriller')

    thriller_btn.addEventListener('click', async () => {
          const thrillerArray = await getDataGenre(1 , ++page)
          
          const filtredThrillerArray = thrillerArray.filter((film) => film.genres.length > 0);
          
          const renderThriller = filtredThrillerArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres }) => {
            const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);

            return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
        });
          filmContainer.insertAdjacentHTML('beforeend', renderThriller.join(''));
      });
  }

  export const paginationDrama = async () => {
    const drama_btn = document.querySelector('#btn_drama')

    drama_btn.addEventListener('click', async () => {
          const dramaArray = await getDataGenre(2, ++page)
          
          const filteredDramaArray = dramaArray.filter((film) => film.genres.length > 0 );

  const renderDrama = filteredDramaArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);

      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
    });
      filmContainer.insertAdjacentHTML('beforeend', renderDrama.join(''));
  });
}


export const paginationCriminal = async () => {
  const criminal_btn = document.querySelector('#btn_criminal')

criminal_btn.addEventListener('click', async () => {
  const criminalArray = await getDataGenre(3, ++page)
  
  const filterCriminalArray = criminalArray.filter((film) => film.genres.length > 0);

  const renderCriminal = filterCriminalArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
  });
    filmContainer.insertAdjacentHTML('beforeend', renderCriminal.join(''));
});
}


export const paginationMelodrama = async () => {
  const melodrama_btn = document.querySelector('#btn_melodrama')

melodrama_btn.addEventListener('click', async () => {
  const melodramArray = await getDataGenre(4, page)
  const filteredMelodramArray = melodramArray.filter((film) => film.genres.length > 0);

  const renderMelodram = filteredMelodramArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
  });
    filmContainer.insertAdjacentHTML('beforeend', renderMelodram.join(''));
});
}

export const paginationDetective = async () => {
  const detective_btn = document.querySelector('#btn_detective')

detective_btn.addEventListener('click', async () => {
  const detectiveArray = await getDataGenre(5, ++page)
  
  const filteredDetectiveArray = detectiveArray.filter((film) => film.genres.length > 0);

  const renderDetective = filteredDetectiveArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
  });
    filmContainer.insertAdjacentHTML('beforeend', renderDetective.join(''));
});
}


export const paginationFantasy = async () => {
  const fantasy_btn = document.querySelector('#btn_fantasy')

fantasy_btn.addEventListener('click', async () => {
  const fantasyArray = await getDataGenre(6, ++page)
  
  const filteredFantasyArray = fantasyArray.filter((film) => film.genres.length > 0);

  const renderFantasy = filteredFantasyArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
  })
    filmContainer.insertAdjacentHTML('beforeend', renderFantasy.join(''));
});
}


export const paginationAdventure = async () => {
  const adventure_btn = document.querySelector('#btn_adventure')

adventure_btn.addEventListener('click', async () => {
  const adventureArray = await getDataGenre(6, ++page)
  
  const filteredAdventureArray = adventureArray.filter((film) => film.genres.length > 0);

  const renderAdventure = filteredAdventureArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
  });
    filmContainer.insertAdjacentHTML('beforeend', renderAdventure.join(''));
});
}


export const paginationBiography = async () => {
  const biography_btn = document.querySelector('#btn_biography')

biography_btn.addEventListener('click', async () => {
  const biographyArray = await getDataGenre(8, ++page)
  
  const filteredBiographyArray = biographyArray.filter((film) => film.genres.length > 0)

  const renderBiography = filteredBiographyArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
  })
    filmContainer.insertAdjacentHTML('beforeend', renderBiography.join(''));
});
}


export const paginationWestern = async () => {
  const western_btn = document.querySelector('#btn_western')

western_btn.addEventListener('click', async () => {
  const westernArray = await getDataGenre(10, ++page)
  
  const filtredWesternArray = westernArray.filter((film) => film.genres.length > 0)

  const renderWestern = filtredWesternArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
  });
    filmContainer.insertAdjacentHTML('beforeend', renderWestern.join(''));
});
}


export const paginationAction = async () => {
  const action_btn = document.querySelector('#btn_action')

action_btn.addEventListener('click', async () => {
  const actionArray = await getDataGenre(11, ++page)
  
  const filtredActionArray = actionArray.filter((film) => film.genres.length > 0)

  const renderAction = filtredActionArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
  });
    filmContainer.insertAdjacentHTML('beforeend', renderAction.join(''));
});
}


export const paginationFamaly = async () => {
  const famaly_btn = document.querySelector('#btn_famaly')

famaly_btn.addEventListener('click', async () => {
  const famalyArray = await getDataGenre(19, ++page)
  
  const filtredFamalyArray = famalyArray.filter((film) => film.genres.length > 0)

  const renderFamaly = filtredFamalyArray.map(({kinopoiskId,posterUrlPreview,nameRu,genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
      return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
  })
    filmContainer.insertAdjacentHTML('beforeend', renderFamaly.join(''));
});
}


export const paginationComedy = async () => {
  const comedy_btn = document.querySelector('#btn_comedy')

comedy_btn.addEventListener('click', async () => {
  const comedyArray = await getDataGenre(13, ++page)
  
  const filtredComedyArray = comedyArray.filter((film) => film.genres.length > 0)

  const renderComedy = filtredComedyArray.map(({kinopoiskId, posterUrlPreview, nameRu, genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
      return CardFilm(kinopoiskId, posterUrlPreview, nameRu, selectedGenres)
  })
    filmContainer.insertAdjacentHTML('beforeend', renderComedy.join(''));
});
}


export const paginationMilitary = async () => {
  const military_btn = document.querySelector('#btn_military')

military_btn.addEventListener('click', async () => {
  const militaryArray = await getDataGenre(14, ++page)
  
  const filtredMilitaryArray = militaryArray.filter((film) => film.genres.length > 0)

  const renderMilitary = filtredMilitaryArray.map(({kinopoiskId, posterUrlPreview, nameRu, genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
      return CardFilm(kinopoiskId, posterUrlPreview, nameRu, selectedGenres)
  })
    filmContainer.insertAdjacentHTML('beforeend', renderMilitary.join(''));
});
}


export const paginationHistory = async () => {
  const history_btn = document.querySelector('#btn_history')

history_btn.addEventListener('click', async () => {
  const historyArray = await getDataGenre(15, ++page)
  
  const filteredHistoryArray = historyArray.filter((film) => film.genres.length > 0)

  const renderHistory = filteredHistoryArray.map(({kinopoiskId, posterUrlPreview, nameRu, genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
      return CardFilm(kinopoiskId, posterUrlPreview, nameRu, selectedGenres)
  })
    filmContainer.insertAdjacentHTML('beforeend', renderHistory.join(''));
});
}


export const paginationHorror = async () => {
  const horror_btn = document.querySelector('#btn_horror')

horror_btn.addEventListener('click', async () => {
  const horrorArray  = await getDataGenre(17, ++page)
  const filtredHorrorArray = horrorArray.filter((film) => film.genres.length > 0)

  const renderHorror = filtredHorrorArray.map(({kinopoiskId, posterUrlPreview, nameRu, genres}) => {
      const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre)
      return CardFilm(kinopoiskId, posterUrlPreview, nameRu, selectedGenres)
  })
    filmContainer.insertAdjacentHTML('beforeend', renderHorror.join(''));
});
}