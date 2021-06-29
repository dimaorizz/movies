import { combineReducers } from "redux"
import {initialSelectedFilms} from "../initialState";

const selectFilmReducer = (state: any = initialSelectedFilms, action: any) => {
  if(action.type === 'SELECT_FILM') {
    return {
      ...state,
      ...action.payload
    }
  } else {
    return state;
  }
}

export default combineReducers({
  selectedFilm: selectFilmReducer
});