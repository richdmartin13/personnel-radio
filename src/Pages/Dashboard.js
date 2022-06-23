import React, { useEffect, useState, useRef } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import Tabs from '../Components/Tabs';
import Next from '../Pages/Next';
import Ads from '../Pages/Ads';
import Playlists from '../Pages/Playlists';
import Sidebar from '../Components/Sidebar';
import Player from '../Components/Player';
import Playlist from '../Components/Playlist';
import Navbar from '../Components/Navbar';
// import axios from 'axios';

export default function Dashboard() {
    const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);
    const [activeTab, setActiveTab] = useState(0);
    const [selectedPlaylist, setSelectedPlaylist] = useState(0);
    const [playlists, setPlaylists] = useState([{ name: '', href: '#', images: [], tracks: { href: '#'}}]);
    const [trackList, setTrackList] = useState();
    const focusRef = useRef(HTMLButtonElement);

    const tabs = [
        {
            name: 'Up Next',
            icon: 'disc',
            pageID: 'next',
            index: 0,
            sheetComponent: <Next trackList={trackList}/>,
            pageComponent: <Player/>
        },
        {
            name: 'My Ads',
            icon: 'mic',
            pageID: 'ads',
            index: 1,
            sheetComponent: <Ads/>,
            pageComponent: <Player/>
        },
        {
            name: 'Playlists',
            icon: 'albums',
            pageID: 'playlists',
            index: 2,
            sheetComponent: <Playlists selectPlaylist={setSelectedPlaylist} reportPlaylists={setPlaylists}/>,
            pageComponent: <Playlist playlist={playlists[selectedPlaylist]} setCurrentTrackList={setTrackList}/>
        }
    ];

    useEffect(() => {
        window.history.pushState({}, null, "/");
        window.onresize = () => refreshWindowSize();
        // focusRef.current.focus();
    }, [])

    const logout = () => {
        window.localStorage.removeItem("token");
        window.location.reload();
    }

    const renderSheet = () => {
        return tabs[activeTab].sheetComponent;
    }

    const renderPage = () => {
        return tabs[activeTab].pageComponent;
    }

    const refreshWindowSize = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
    }

    return (
        <div>
            <Navbar>
            <button onClick={logout} className="btn btn-icon"><ion-icon name="exit-outline" size="small"></ion-icon></button>
            </Navbar>
            {renderPage()};
            {isPortrait ? <BottomSheet 
                open
                blocking={false}
                header={
                    <div>
                        <Tabs setPage={setActiveTab} options={tabs}/>
                    </div>
                }
                style={{
                    maxWidth: '400px'
                }}
                snapPoints={({ maxHeight }) => [maxHeight / 9, maxHeight / 3, maxHeight * 0.9 ]}>
                    <div className="sheet-container">
                        {renderSheet()}
                    </div>
            </BottomSheet> : <Sidebar/> }
        </div>
    )

}