import React from 'react';

export default function Song({ title, artist }) {
    return (
        <div className="song-card">
            <ion-icon name="disc-outline" className="song-icon"/>
            <div className="song-info">
                <h4 className="song-title">{title}</h4>
                <p className="song-artist">{artist}</p>
            </div>
        </div>
    )
}