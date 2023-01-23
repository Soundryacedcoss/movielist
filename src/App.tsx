import React, { createContext, useState } from 'react';
import './App.css';
import { MovieForm } from './Components/MovieForm';
import { MovieList } from './Components/MovieList';
import { Search } from './Components/Search';
export const movie = createContext({})
export const SearchContext = createContext({})
export const valueContext = createContext({})
function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState([])
  const [value, setvalue] = useState("")
  return (
    <div className="App">
      <movie.Provider value={{ data, setData }}>
        <SearchContext.Provider value={{ search, setSearch }}>
          <valueContext.Provider value={{ value, setvalue }}>
            <div style={{ display: "flex", columnGap: "5%" }}>
              <div className='w-50'>
                <MovieForm />
              </div>
              <div className='Container2'>
                <Search />
                <MovieList />
              </div>
            </div>
          </valueContext.Provider>
        </SearchContext.Provider>
      </movie.Provider>
    </div>
  );
}

export default App;
