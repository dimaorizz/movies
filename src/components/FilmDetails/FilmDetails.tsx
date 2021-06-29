import { useDispatch, useSelector } from "react-redux";
import { selectedFilmSelector } from "../../store/selectors";

const FilmDetails = (props: any) => {
  const selectedFilm = useSelector(selectedFilmSelector);
  return (
    <div>{selectedFilm.title}</div>
  )
}

export default FilmDetails;