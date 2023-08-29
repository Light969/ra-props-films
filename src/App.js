import './App.css'
import Stars from './react-component/Stars'
import { Film } from './react-component/Stars'

const ratingFilm: Film = {count: 5, name: 'Супермен'};
const ratingFilm2: Film = {count: 4, name: 'Одинокий странник'};

function App() {
  return (
    <>
      <Stars rating={ratingFilm}/>
      <Stars rating={ratingFilm2}/>
    </>
  )
}

export default App
