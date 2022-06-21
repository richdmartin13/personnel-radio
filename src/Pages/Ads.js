import React from 'react';
import Ad from '../Components/Ad';

export default function Ads() {
    const queue = [
        {
            title: "Remember to Buy Your Cheese!",
            artist: 'False Advertising',
            type: 'ad'
        },

    ];

    const ads = queue.map((item) => {
        return <Ad title={item.title} artist={item.artist}/>
    })

    return (
        <div>
            {ads}
        </div>
    )
}