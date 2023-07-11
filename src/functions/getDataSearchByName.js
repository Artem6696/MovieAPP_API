export const getDataSearchByName = async () => {
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=%D1%82%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D0%BA&page=1'
    const apiKey = '8c8e1a50-6322-4135-8875-5d40a5420d86'
    const response = await fetch(url, {
        headers: {
            'X-API-KEY': "8c8e1a50-6322-4135-8875-5d40a5420d86"
        }
    });
    const Data = await response.json()
    return Data.films[0]
}
