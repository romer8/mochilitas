//https://restcountries.eu/#api-endpoints-response-example

import React, {Component} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

import Map2 from './components/Map'

class App extends Component {
  constructor(){
    super();
    this.state={
      lat:14.410489,
      lng: 16.109795,
      zoom: 4,
      geojsonKey: 0,
      // chartData:{},
      // incidents:[],s
      countries_layer:{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [125.6, 10.1]
        },
        "properties": {
          "name": "Dinagat Islands"
        }
      }
    }
  }
  componentWillMount(){
    // this.getChartData();
  }
  componentDidMount() {
  // async componentDidMount() {
   // const res = await axios.get('https://data.sfgov.org/resource/wr8u-xric.json', {
   //   params: {
   //     "$limit": 500,
   //     "$$app_token": 'RtE2Bz0zkIHLRxGFthOlfUcqk'
   //   }
   // })
   // const incidents = res.data;
   // this.setState({incidents: incidents });

    axios.get('./countries.geojson').then( response => {
     console.log(response.data);
     this.setState({
       countries_layer:response.data,
       geojsonKey:1
     });
     console.log(this.state.countries_layer);

   }).catch(function (error) {
     console.log(error);
   });
 };

  render(){
    return (
      <div className="App">
        <Map2 incidents = {this.state.incidents} lat = {this.state.lat} lng = {this.state.lng} zoom = {this.state.zoom} countries_layer = {this.state.countries_layer} geojsonKey = {this.state.geojsonKey}/>
      </div>
    );

  }

}

export default App;
