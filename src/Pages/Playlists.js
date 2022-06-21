import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImg from '../Images/default-playlist.png';

export default function Playlists({ selectPlaylist, reportPlaylists }) {
    const [playlists, setPlaylists] = useState([]);
    const [selected, setSelected] = useState(0);

    const queue = async () => {
        const { data } = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            }
        })

        console.log(data.items);
        setPlaylists(data.items);
        reportPlaylists(data.items);
    }

    const list = playlists.map((item) => {
        const imgUrl = item.images.length > 0 ? item.images[0].url : defaultImg;

        return (
            <button onClick={() => selectList(item.id)} className="playlist-item" key={item.id}>
                <img src={imgUrl} style={{maxWidth: '64px', borderRadius: '4px'}} alt="playlist header"/>
                <div className="song-info" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px'}}>
                    <h4 className="song-title" style={{fontSize: '16px'}}>{item.name}</h4>
                </div>
            </button>

        )
    })

    const selectList = (id) => {
        var index = 0;
        playlists.forEach((playlist) => {
            if (playlist.id === id) {
                setSelected(index);
                selectPlaylist(index);
            } else {
                index++;
            }
        })

    }

    useEffect(() => {
        playlists.length > 0 ? setTimeout(() => queue(), 60000) : queue();
    })

    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            paddingTop: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        }}>
            {list}
        </div>
    )
}