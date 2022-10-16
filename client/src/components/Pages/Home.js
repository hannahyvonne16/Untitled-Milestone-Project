import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';


const libraries = ['places']
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
}

export default function Home(){
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return <div>
    <GoogleMap mapContainerStyle={mapContainerStyle}></GoogleMap>
  </div>;
}
