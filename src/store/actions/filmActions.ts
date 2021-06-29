export const selectFilm: any = (movie: any) => {
  console.log('ACTION SENT')
  return {
    type: 'SELECT_FILM',
    payload: movie
  }
};