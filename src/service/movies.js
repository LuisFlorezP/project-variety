export const apiMovies = (page) =>  {
    const urlMovies = `https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=en-US&page=${page}`
    return urlMovies
}


