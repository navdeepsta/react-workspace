import FilmLibrary from './components/FilmLibrary/FilmLibrary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import FilmDetail from './components/FilmDetail/FilmDetail';
import FilmDetailEmpty from './components/FilmDetail/FilmDetailEmpty';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/films" element={<FilmLibrary/>} >
        <Route path="/films/:filmId" element={<FilmDetail />}/>
        <Route path="/films" element={<FilmDetailEmpty />}/>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
