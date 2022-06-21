import React, { Children } from 'react';

export default function Navbar (props) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '64px',
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 20px'
        }}>
            {props.children}
        </div>
    )
}