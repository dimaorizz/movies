import MoviesList from "./components/MoviesList/MoviesList";
import { Switch, Route } from 'react-router-dom';
import FilmDetails from './components/FilmDetails/FilmDetails'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <MoviesList>

        </MoviesList>
      </Route>
      <Route exact path='/film'>
        <FilmDetails></FilmDetails>
      </Route>
    </Switch>
  );
}

export default App;
