import { getDataAll } from "./getDataMain"
import { CardFilm } from "../components/cardFilm"

const changeMain = async () => {
    
    const allArray =  await getDataAll()
   //выходили 18+ фильмы
    const filteredArray = allArray.filter(( {genres }) => {
        const hasAdultGenre = genres.every((genres) => genres.genre !== "для взрослых")
        return hasAdultGenre
    })

    const HTMLall = filteredArray.map( ({kinopoiskId,  posterUrlPreview ,nameRu, genres}) => {
        const selectedGenres = genres.slice(0, 3).map((genres) => genres.genre);
      
        
        return CardFilm(kinopoiskId,posterUrlPreview,nameRu,selectedGenres)
    })

    
   return HTMLall.join("")
   
}

export default changeMain