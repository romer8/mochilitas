import React, {Component, useState, useEffect,useRef} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

import Map2 from './components/Map'

function App (){
  const [lat,setLat] = useState(15.410489)
  const [lng,setLng] = useState(12.109795)
  const [zoom,setZoom] = useState(3)
  const [geojsonKey, setGeoJsonKey] = useState(0)
  const [countries_layer, setCountriesLayer] = useState(
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [125.6, 10.1]
      },
      "properties": {
        "name": "Dinagat Islands"
      }
    }
  )


   useEffect(()=>{

     async function changeData(){
       const result = await axios.get('./countries.geojson')

       if(geojsonKey === 0){
         setGeoJsonKey(1)
         setCountriesLayer(result.data)
       }

     }

    changeData();
    return ()=>{
      setGeoJsonKey(0)
    }

  },[countries_layer])



    return (
     <div className="App">
       {      console.log(countries_layer)}

       {      console.log(geojsonKey)}

       <Map2 lat = {lat} lng = {lng} zoom = {zoom} countries_layer = {countries_layer} geojsonKey = {geojsonKey}/>
      </div>
    );


}

export default App;
