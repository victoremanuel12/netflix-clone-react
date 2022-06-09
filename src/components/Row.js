import React, { useEffect, useState } from 'react'
import axios from "../axios"
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BASE_URL_IMG = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl}) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")
  const [scrollLeft,setScrollLeft] = useState(-400)

 
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
        })
        .catch((error) => console.log(error))

    }

  }
  function handleLeftArrow(){
    let x = scrollLeft + Math.round(window.innerWidth / 2 )
    if( x > 0 ){
        x = 0
    }
    setScrollLeft(x)
  }
  function handleRightArrow(){
    let x = scrollLeft - Math.round(window.innerWidth / 2 )
    let listWidth = movies.length * 150
    if((window.innerWidth - listWidth) > x){
        x = (window.innerWidth - listWidth) - 20
    }
   
    setScrollLeft(x)


  }
  return (

    <div className='row'>
        <h2>{title}</h2>
      <div className='row__listarea' >
        <div className="row--left" onClick={handleLeftArrow} >
          <NavigateBeforeIcon style={{ fontSize: 40 }}  />
        </div>
        <div className="row--right" onClick={handleRightArrow} >
          <NavigateNextIcon style={{ fontSize: 40 }} />
        </div>
        <div className='row__list' style={{ marginLeft:scrollLeft,width: movies.length * 200}} >
          {movies.map((movie, key) => (
            <div className='row__item'>
              <img
              className='row__item__img'
                style={{ width: 300 }}
                key={movie.id}
                src={`${BASE_URL_IMG}${movie?.poster_path || movie?.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </div>
          ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
     
    </div>
    
  )
}

export default Row
