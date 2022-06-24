import React, { useState } from "react";

const PlaylistCard = (props) => {
    const [movies, setMovies] = useState(["Batman", "Superman", "Joker", "POTC"])
    const [user, setUser] = useState("userName")
    return (
        <div>
            <div>
                PlayList Name
            </div>
            <div className="movieList">
            {movies.map(movie => (
                <div> 
                    {movie}
                </div>
            ))}</div>
            <div>
                {user}
            </div>
        </div>
    )
}

export default PlaylistCard ;