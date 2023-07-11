export const getDataHeaderFilter = async (type, page = 1) => {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=${type}&page=${page}`
    const apiKey = '8c8e1a50-6322-4135-8875-5d40a5420d86';

    const response = await fetch(url, {
        headers: {
            'X-API-KEY': apiKey
        }
    })
    const dataHeaderFilter = await response.json()
    return dataHeaderFilter.items
}