import React, { useEffect ,useState} from "react";
import './App.css';
import img from './search.svg'
import MoviesCard from "./MovieCard";
const API_KEY='http://www.omdbapi.com?apikey=d6430b89'

const App=()=>{
    const [movies,setMovies]=useState([])
    const [searchInput,setSearchInput]=useState('')
    const SearchMovie=async(title)=>{
        const response=await fetch(`${API_KEY}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }
    useEffect(()=>{
    SearchMovie('batman')
    },[])


    const changeInput=(e)=>{
     setSearchInput(e.target.value)
    }
    return(
        <div>
            <div className="app">
                <h1>Search_Movie</h1>
                <div className="search">
                    <input type="text" placeholder="Search For A movie " value={searchInput} onChange={changeInput}/>
                    <img src={img} alt="" onClick={()=>SearchMovie(searchInput)}/>
                </div>
            </div>

           
           {
            movies?.length>0 ?
            (
                <div className="container">
                    {movies.map((movie)=>(
                    <MoviesCard movie={movie} />
                    ))}

                </div>
            ):
            (
                <div className="empty">
                    <h3>No Movie Found </h3>
                </div>
            )
           }
            


        </div>
    )
}
export default App;