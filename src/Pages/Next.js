import React from 'react';
import Song from '../Components/Song';
import Ad from '../Components/Ad';

export default function Next() {
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

    const upNext = queue.map((item) => {
        return item.type === 'song' ? <Song title={item.title} artist={item.artist} key={item.title}/> : <Ad title={item.title} artist={item.artist} key={item.title}/>
    })

    return (
        <div>
            {upNext}
        </div>
    )
}