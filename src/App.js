import React,{useEffect} from 'react'
import {useState} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';




// 5b5176d8 

const API_URL = 'https://www.omdbapi.com?apikey=5b5176d8 ';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm ] = useState('');
 
    const searchMovie = async (title)=> {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    }

useEffect(()=> {
     searchMovie('batman')
},[]);

  return (
    <div className='app'>
          <h1>MovieLand</h1>

          <div className='search'>
          <input type='' placeholder='Search for movies'
             value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
             />
             <img src={SearchIcon} alt='search' onClick={()=> searchMovie(searchTerm)}/>
          </div>

          {
            movies?.length > 0 ? (<div className='container'>
             {
                movies.map((movie)=> (
                    <MovieCard movie={movie}/>
                ) )
             }
         </div>
         ) : (
           <div className='empty'>
                <h2>No Movie Found</h2>
           </div>
         )
          }

          
    </div>
  )
}

export default App
