import React, { useEffect, useState } from 'react';
import defaultImg from '../Images/default-playlist.png';
import axios from 'axios';

export default function Playlist({ playlist, setCurrentTrackList }) {
    const [trackList, setTrackList] = useState();
    const [previousURL, setPreviousURL] = useState();

    const tracksURL = playlist.tracks.href || '';
    const playlistName = playlist.name || '';
    const imgUrl = playlist.images.length > 0 ? playlist.images[0].url : defaultImg;

    const getTracks = async () => {
        const { data } = await axios.get(tracksURL, {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            }
        })

        setPreviousURL(tracksURL);
        setTrackList(data.items);
        console.log(data.items)
    }

    useEffect(() => {
        if (!trackList || tracksURL !== previousURL) {
            getTracks();
        }
    })

    return (
        <div style={{
            overflowY: 'scroll',
            padding: '90px',
            maxHeight: '80vh',
            width: '90vw'
        }}>
            <img src={imgUrl} style={{ maxWidth: '60vw', borderRadius: '10px' }} alt="playlist header" />
            <div style={{
                display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'space-between', maxWidth: '76vw', margin: '0 auto'
            }}>
                <h1 style={{ color: '#fff' }}>{playlistName}</h1>
                <button className="btn btn-icon" onClick={() => setCurrentTrackList(trackList)}><ion-icon name="play"/></button>
            </div>
            {trackList && trackList.map(track => {
                return (
                    <div style={{
                        display: 'flex',
                        flexFlow: 'row nowrap',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        margin: '10px 0'
                    }} key={track.track.id}>
                        <img src={track.track.album.images[0].url} alt='album' style={{ width: '48px', borderRadius: '4px', marginRight: '20px' }} />
                        <div style={{
                            display: 'flex',
                            flexFlow: 'column nowrap',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                        }}>
                            <p style={{ color: '#fff', margin: 0 }}>{track.track.name}</p>
                            <p style={{ color: '#444', margin: 0, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>{track.track.album.artists[0].name}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}