import React, { useEffect, useState, useRef } from 'react';
import Tabs from '../Components/Tabs';
import Next from '../Pages/Next';
import Ads from '../Pages/Ads';
import Playlists from '../Pages/Playlists';

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            name: 'Up Next',
            icon: 'disc',
            pageID: 'next',
            index: 0,
            component: <Next/>
        },
        {
            name: 'My Ads',
            icon: 'mic',
            pageID: 'ads',
            index: 1,
            component: <Ads/>
        },
        {
            name: 'Playlists',
            icon: 'albums',
            pageID: 'playlists',
            index: 2,
            component: <Playlists/>
        }
    ];

    const renderSheet = () => {
        return tabs[activeTab].component;
    }

    return (
        <div className="sidebar-container">
            <Tabs setPage={setActiveTab} options={tabs}/>
            {renderSheet()}
        </div>
    )
}