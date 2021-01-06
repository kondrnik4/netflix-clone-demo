import React from "react";
import Row from "./Row/Row";
import Banner from "./Banner/Banner"

import './App.css';
import requests from "./requests";
import Nav from "./Nav/Nav";


function App() {
  return (
    <div className="app">
        <Nav/>
        <Banner/>
      <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies}/>
    </div>
  );
}

export default App;
