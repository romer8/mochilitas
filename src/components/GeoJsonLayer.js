import React, { Component } from 'react'
import { GeoJSON } from 'react-leaflet'
import axios from 'axios';

import countries_data from './countries.geojson'
class GeoJsonLayer extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            data: []
        };

    }

   getStyle(feature, layer) {
     return {
       color: '#006400',
       weight: 5,
       opacity: 0.65
     }
   }
   // countries_layer_data(){
   //   axios.get('./countries.geojson').then( response => {
   //     console.log(response.data);
   //     this.setState({
   //       countries_layer:response.data
   //     });
   //
   //   }).catch(function (error) {
   //     console.log(error);
   //   });
   //
   // }
   componentDidMount(){
     axios.get('./countries.geojson').then( response => {
       console.log(response.data);
       this.setState({
         countries_layer:response.data
       });
       console.log(this.state.countries_layer);
     }).catch(function (error) {
       console.log(error);
     });

    }


   render() {
     return()
   }

export default GeoJsonLayer
