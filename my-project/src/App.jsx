import React from 'react';
import Navbar from './components/navbar';
import SignInForMore from './components/SignInForMore';

function App() {
  return (
    <>
      <link rel="icon" type="image/ico" href="/spotifyIcon.ico" />
      <title>audiophify</title>
        <div className="min-h-screen bg-slate-200">
          <Navbar />
          <SignInForMore />
        </div>
    </>
  );
}

export default App;

