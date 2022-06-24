import React, { useState } from 'react';
import PlaylistCard from './PlaylistCard';

const Playlist = () => {
    const [playlists, setPlaylists] = useState([ "PlayList","PlayList","PlayList","PlayList" ]);
    return (
        <div>
            <div>
                <PlaylistCard />
                <PlaylistCard />
            </div>
        </div>
    )
}

export default Playlist; 