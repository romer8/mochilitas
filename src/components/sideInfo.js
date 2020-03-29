import React, { Component } from 'react'
import axios from 'axios';
import PlotCountry from './plots'


// class SideInfo extends React.Component {
//   render() {
//     return (
//       <div id= "country_info" className="box-field" className="newsbox">
//          <img src={this.props.country_data["flag"]} alt="Smiley face" width="50%" height="25%"/>
//          <h3>{this.props.country_data["altSpellings"]}</h3>
//       </div>
//
//     );
//   }
// }

function SideInfo(props) {
    return (
      <div id= "country_info" className="box-field" className="newsbox">
         <img src={props.country_data["flag"]} alt="Smiley face" width="50%" height="25%"/>
         <h3>{props.country_data["altSpellings"]}</h3>
      </div>

    );
}
export default SideInfo
