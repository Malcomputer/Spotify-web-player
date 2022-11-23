import React from 'react';
import './App.css';
import SpotifyPlayer from 'react-spotify-web-playback';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpotifyPlayer
          token="BQDMprzGcDmtxU7d83z4X4uIb5JjkCfYd3TRm3M-exsmc1PYLZyCKcdAzH_euhhtff51Bg2tCt0Bgle9UwLGpfBY0KdqvnIdakdMA-q4rjtfkYsVdimiN-30GSL6ihF4OW0K0hv4g-e5fY2MVuEwo_gZWu3lrwTbk6Lvr4UPJTmkBlSsfrOT2nQFNUqhIA1yPb1TvEIO91rncTZEmP-dJALkV-GJ40Y8D3VwgO82DoQDpNva85lm9NnIuQ4_hCelFCpU2WrMFcTiIEvd4V0KdERP71Jo1IAE68Yx6rcBTzMMIKz7oWH24tGGYSMWhqVp1_kRcxOhGw"
          uris={['spotify:track:6xolFoxqewJrWhChklI5xc']}
        />
      </header>
    </div>
  );
}

export default App;
