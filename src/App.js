import './App.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import React, {useEffect, useState} from 'react';

function App() {
  const AUTH = {
    client_id: 'a963af2b9726410ea479d5b6f07e0675',
    redirect_uri: 'http://localhost:3000',
    auth_url: 'https://accounts.spotify.com/authorize',
    scope: 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state',
    response_type: 'token'
  }

  return (
    <div className="App">
      {!window.localStorage.token ? <Login auth={AUTH}/> : <Dashboard/>}
    </div>
  );
}

export default App;
