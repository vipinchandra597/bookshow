import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './nav/NavBar';
import Login from './pages/Login';
import Shows from './pages/Shows';
import Signup from './pages/Signup';
import ShowDetails  from './Components/ShowDetails'
import BookedShows from './Components/BookedShows';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shows/>}/>
        <Route path='/showdetails' element={<ShowDetails/>}/>
        <Route path='/shows' element={<Shows/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/bookedshows' element={<BookedShows/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
