const initState = {
  movieList: []
}

const todos = (state = initState, action) => {
  switch (action.type) {
    case 'NEW_LIST':
      return {
          ...state,
          movieList: action.movieList
        }
    default:
      return state
  }
}

export default todos