import React from 'react';
import Song from '../Components/Song';
import Ad from '../Components/Ad';

export default function Next({ trackList }) {

    const queue = [
        {
            title: 'Fight the Feeling',
            artist: 'Mac Miller & Kendrick Lamar',
            type: 'song'
        },
        {
            title: 'Rich Spirit',
            artist: 'Kendrick Lamar',
            type: 'song'
        },
        {
            title: "That's Life",
            artist: 'Mac Miller',
            type: 'song'
        },
        {
            title: "Remember to Buy Your Cheese!",
            artist: 'False Advertising',
            type: 'ad'
        },

    ];

    console.log(trackList)

    return (
        <div>
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
                    <p style={{ color: '#212121', margin: 0 }}>{track.track.name}</p>
                    <p style={{ color: '#aaa', margin: 0, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>{track.track.album.artists[0].name}</p>
                </div>
            </div>
        )
    })}
        </div>
    )
}