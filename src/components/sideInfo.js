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
  let h =props.country_data["altSpellings"];
  if(h && h.length > 0){
    console.log(h[1]);
  }
    return (

      <div id= "country_info" className="box-field" className="newsbox">

        <h2>{props.country_data["name"]}</h2>

        <em>
        {(() => {
           if (props && props.country_data["altSpellings"] && props.country_data["altSpellings"].length > 0) {
             return props.country_data["altSpellings"][1]
           }
         })()}
         </em>
        <em>
        {(() => {
           if (props && props.country_data["altSpellings"] && props.country_data["altSpellings"].length > 0) {
             return props.country_data["altSpellings"][2]
           }
         })()}
         </em>
         <br></br>
         <img src={props.country_data["flag"]}/>

      </div>

    );
}
export default SideInfo
