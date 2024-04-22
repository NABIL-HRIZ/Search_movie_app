import React from "react";
import './App.css'

const MoviesCard=({movie})=>{
    return(
       <div>
        <div className="container">
            <div className="movie">
              <div>
                <span>{movie.Type}</span>
                <h2>{movie.Title}</h2>
              </div>
              <div>
                <img src={movie.Poster? movie.Poster : 'http/unspleesh.com'} alt={movie.Title}/>
              </div>
              <div>
                <h2 style={{color:'white',textAlign:'center'}}>{movie.Year}</h2></div>
 
            </div>

        </div>

       </div>
    )
}
export default MoviesCard;