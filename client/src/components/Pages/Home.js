import { React, useState } from 'react';
import ReactMapGL from 'react-map-gl';

 function Home() {
  const [viewport, setViewport] = useState({
    latitude: 40.741895,
    longitude: -73.989308,
    zoom: 10,
    width: '100vw',
    height: '100vh'
  })

  return <div>
    <ReactMapGL {...viewport}>Map Here</ReactMapGL>
  </div>
}

export default Home;
