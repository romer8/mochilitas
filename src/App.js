//https://restcountries.eu/#api-endpoints-response-example

import React, {Component, useState, useEffect,useRef} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

import Map2 from './components/Map'

function App (){
  const [lat,setLat] = useState(14.410489)
  const [lng,setLng] = useState(16.109795)
  const [zoom,setZoom] = useState(4)
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
  // const latestCountries_layer= useRef(countries_layer)
  // const latestGeojsonKey= useRef(geojsonKey)


   useEffect(()=>{
     // console.log("using use effect");

     async function changeData(){
       const result = await axios.get('./countries.geojson')
       // if(geojsonKey === 0){
       //   setGeoJsonKey(1)
       //   setCountriesLayer(result.data)
       //
       // }
       if(geojsonKey === 0){
         setGeoJsonKey(1)

         setCountriesLayer(result.data)

       }


       // console.log(countries_layer);
     }

    changeData();
    return ()=>{
      setGeoJsonKey(0)
    }

  },[countries_layer])

  //  useEffect(()=>{
  //    setGeoJsonKey(geojsonKey)
  //    setCountriesLayer(countries_layer)
  // },[])

    return (
     <div className="App">
       {      console.log(countries_layer)}

       {      console.log(geojsonKey)}

       <Map2 lat = {lat} lng = {lng} zoom = {zoom} countries_layer = {countries_layer} geojsonKey = {geojsonKey}/>
      </div>
    );


}

export default App;
// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       lat:14.410489,
//       lng: 16.109795,
//       zoom: 4,
//       geojsonKey: 0,
//       // chartData:{},
//       // incidents:[],s
//       countries_layer:{
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [125.6, 10.1]
//         },
//         "properties": {
//           "name": "Dinagat Islands"
//         }
//       }
//     }
//   }
//
//   componentDidMount() {
//   // async componentDidMount() {
//    // const res = await axios.get('https://data.sfgov.org/resource/wr8u-xric.json', {
//    //   params: {
//    //     "$limit": 500,
//    //     "$$app_token": 'RtE2Bz0zkIHLRxGFthOlfUcqk'
//    //   }
//    // })
//    // const incidents = res.data;
//    // this.setState({incidents: incidents });
//
//     axios.get('./countries.geojson').then( response => {
//      // console.log(response.data);
//      this.setState({
//        countries_layer:response.data,
//        geojsonKey:1
//      });
//      // console.log(this.state.countries_layer);
//
//    }).catch(function (error) {
//      console.log(error);
//    });
//  };
//
//   render(){
//     return (
//       <div className="App">
//         <Map2 incidents = {this.state.incidents} lat = {this.state.lat} lng = {this.state.lng} zoom = {this.state.zoom} countries_layer = {this.state.countries_layer} geojsonKey = {this.state.geojsonKey}/>
//       </div>
//     );
//
//   }
//
// }
//
// export default App;
