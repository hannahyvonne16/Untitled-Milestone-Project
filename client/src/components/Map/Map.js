import { React } from 'react';


function initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  
  function loadScript(){
    let scriptEl = this.createMapScript();
    let scriptOnPage = document.getElementsByTagName('script');
    scriptOnPage.parentNode.insertBefore(scriptEl, scriptOnPage[0]);
  }
  functioncreatedMapScript();{
    let mapScript = document.createElement("script")
    const API_KEY = ''
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }
}

window.initMap = initMap;


export default initMap;