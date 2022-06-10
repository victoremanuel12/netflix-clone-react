import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './request'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title='Originais Netflix' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Em Alta' fetchUrl={requests.fetchTrending}/>
      <Row title='Mais Votados' fetchUrl={requests.fetchTopRated}/>
      <Row title='Filmes de Ação' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Filmes de Comédia' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Filmes de Terror' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Filmes de Romance' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentários' fetchUrl={requests.fetchDocumantaries}/>
      <Footer/>






    </div>
  );
}

export default App;
