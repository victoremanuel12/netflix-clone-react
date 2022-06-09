import React, { useState,useEffect} from 'react';
import axios from '../axios'
import requests from '../request';
import './Banner.css'



function Banner({fetchUrl}) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals)
          console.log(request)
          setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1) ])
          return request
        }
        fetchData()
      }, [])
      function truncate(str, max) {
        return str?.length > max ? str.substr(0, max-1) + '…' : str;
      }
      const movieYear = new Date(movie.first_air_date)
      
  return(
      <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage:
              `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`,
            backgroundPosition:"center",
        }}>
          <div className="banner__vertical--sombra">
            <div className="banner__horizontal--sombra">
              <div className="banner__contents">
                <h1 className='banner__title'>{movie?.title|| movie?.name || movie?.original_name}</h1> 
                <div className="banner__info">
                    <div className="banner__info--points">{movie.vote_average} pontos</div>
                    <div className='banner__info--year'>{movieYear.getFullYear()}</div>
                </div> 
                <div className="banner__description">{truncate(movie?.overview,150)}</div>
                <div className="banner__buttons">
                  <button className="banner__button--play"> ► Play</button>
                  <button className="banner__button--list"> + My List</button>
                </div>
                
              </div>
            </div>
          </div>

         
      </header>
  );
}

export default Banner;