import React from 'react';
import axios from "axios";

import "./row.css"
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'

const base_url = "https://images.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = React.useState([]);
    const [trailerUrl, setTrailerUrl] = React.useState("");

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }

        fetchData()
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playVars: {
            //
        },
        autoplay: 1,
    };
    console.log(movies)
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || ""
            ).then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch(error => console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id} onClick={() => handleClick(movie)}
                         className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                         src={base_url + (isLargeRow ? movie.poster_path : movie.backdrop_path)} alt={movie.name}/>))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
};

export default Row;
