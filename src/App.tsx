import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieForm } from './Components/MovieForm';
import { MovieList } from './Components/MovieList';
import { Search } from './Components/Search';
export const movie = createContext({})
function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <movie.Provider value={{ data, setData }}>
        <div className='d-flex'>
          <MovieForm />
          <div>
            <Search />
            <MovieList />
          </div>
        </div>

      </movie.Provider>
    </div>
  );
}

export default App;
