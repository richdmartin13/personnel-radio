import React, { useEffect, useState } from 'react';

export default function Tabs ({options, setPage}) {
    const [ activeTab, setActiveTab ] = useState(0);
    const tabs = options;
    
    const tabsMap = tabs.map((tab) => {
        return (
            <button onClick={() => buttonHandler(tab.index)} key={tab.pageID + tab.index} 
            className={activeTab === tab.index ? 'btn btn-primary' : 'btn btn-alt'}
            style={{margin: '0 4px'}}>
                <span><ion-icon name={tab.icon}/>{tab.name}</span>
            </button>
        )
    })

    const buttonHandler = (index) => {
        setActiveTab(index);
        setPage(index);
    }

    return (
        <div style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent: 'center',     
        }}>
            {tabsMap}
        </div>
    )
}