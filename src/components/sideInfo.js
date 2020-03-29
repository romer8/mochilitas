import React, { Component } from 'react'
import axios from 'axios';
import PlotCountry from './plots'
import TableData from './table'


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
        <br></br>
        <TableData
          alpha2Code= {props.country_data["alpha2Code"]}
          alpha3Code= {props.country_data["alpha3Code"]}
          callingCodes= {props.country_data["callingCodes"]}
          capital= {props.country_data["capital"]}
          currencies = {props.country_data["currencies"]}
          demonym = {props.country_data["demonym"]}
          giny= {props.country_data["giny"]}
          borders= {props.country_data["borders"]}
          languages= {props.country_data["languages"]}
          nativeName= {props.country_data["nativeName"]}
          numericCode= {props.country_data["numericCode"]}
          population= {props.country_data["population"]}
          region= {props.country_data["region"]}
          regionalBlocs= {props.country_data["regionalBlocs"]}
          subregion= {props.country_data["subregion"]}
          timeZones={props.country_data["timezones"]}
          translations={props.country_data["translations"]}

          nativeName={props.country_data["nativeName"]}
          latlng ={props.country_data["latlng"]}

        />
      </div>

    );
}
export default SideInfo
