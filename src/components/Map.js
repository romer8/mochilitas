import React, { Component,useState, useEffect } from 'react'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import L from "leaflet"
import axios from 'axios';
import IconButton from '@material-ui/core/Button';
import ArrowBackIos from '@material-ui/icons/ArrowForwardIos';

import 'leaflet/dist/leaflet.css';

import countries_data from './countries.geojson'
import SideInfo from './sideInfo'
import LogoMochilas from '../iconMochilita.png'

const restcountries_url = 'https://restcountries.eu/rest/v2/alpha/'
var isoCountries = {
    'Afghanistan': 'AF',
    'Aland Islands': 'AX',
    'Albania': 'AL',
    'Algeria': 'DZ',
    'American Samoa': 'AS',
    'Andorra': 'AD',
    'Angola': 'AO',
    'Anguilla': 'AI',
    'Antarctica': 'AQ',
    'Antigua And Barbuda': 'AG',
    'Argentina': 'AR',
    'Armenia': 'AM',
    'Aruba': 'AW',
    'Australia': 'AU',
    'Austria': 'AT',
    'Azerbaijan': 'AZ',
    'The Bahamas': 'BS',
    'Bahrain': 'BH',
    'Bangladesh': 'BD',
    'Barbados': 'BB',
    'Belarus': 'BY',
    'Belgium': 'BE',
    'Belize': 'BZ',
    'Benin': 'BJ',
    'Bermuda': 'BM',
    'Bhutan': 'BT',
    'Bolivia': 'BO',
    'Bosnia and Herzegovina': 'BA',
    'Botswana': 'BW',
    'Bouvet Island': 'BV',
    'Brazil': 'BR',
    'British Indian Ocean Territory': 'IO',
    'Brunei': 'BN',
    'Bulgaria': 'BG',
    'Burkina Faso': 'BF',
    'Burundi': 'BI',
    'Cambodia': 'KH',
    'Cameroon': 'CM',
    'Canada': 'CA',
    'Cape Verde': 'CV',
    'Cayman Islands': 'KY',
    'Central African Republic': 'CF',
    'Chad': 'TD',
    'Chile': 'CL',
    'China': 'CN',
    'Christmas Island': 'CX',
    'Cocos (Keeling) Islands': 'CC',
    'Colombia': 'CO',
    'Comoros': 'KM',
    'Democratic Republic of the Congo': 'CG',
    'Republic of the Congo': 'CD',
    'Cook Islands': 'CK',
    'Costa Rica': 'CR',
    'Cote D\'Ivoire': 'CI',
    'Croatia': 'HR',
    'Cuba': 'CU',
    'Cyprus': 'CY',
    'Czech Republic': 'CZ',
    'Denmark': 'DK',
    'Djibouti': 'DJ',
    'Dominica': 'DM',
    'Dominican Republic': 'DO',
    'East Timor':'TL',
    'Ecuador': 'EC',
    'Egypt': 'EG',
    'El Salvador': 'SV',
    'Equatorial Guinea': 'GQ',
    'Eritrea': 'ER',
    'Estonia': 'EE',
    'Ethiopia': 'ET',
    'Falkland Islands': 'FK',
    'Faroe Islands': 'FO',
    'Fiji': 'FJ',
    'Finland': 'FI',
    'France': 'FR',
    'French Guiana': 'GF',
    'French Polynesia': 'PF',
    'French Southern Territories': 'TF',
    'Gabon': 'GA',
    'Gambia': 'GM',
    'Georgia': 'GE',
    'Germany': 'DE',
    'Ghana': 'GH',
    'Gibraltar': 'GI',
    'Greece': 'GR',
    'Greenland': 'GL',
    'Grenada': 'GD',
    'Guadeloupe': 'GP',
    'Guam': 'GU',
    'Guatemala': 'GT',
    'Guernsey': 'GG',
    'Guinea': 'GN',
    'Guinea Bissau': 'GW',
    'Guyana': 'GY',
    'Haiti': 'HT',
    'Heard Island & Mcdonald Islands': 'HM',
    'Holy See (Vatican City State)': 'VA',
    'Honduras': 'HN',
    'Hong Kong': 'HK',
    'Hungary': 'HU',
    'Iceland': 'IS',
    'India': 'IN',
    'Indonesia': 'ID',
    'Iran': 'IR',
    'Iraq': 'IQ',
    'Ireland': 'IE',
    'Isle Of Man': 'IM',
    'Israel': 'IL',
    'Italy': 'IT',
    'Ivory Coast': 'CI',
    'Jamaica': 'JM',
    'Japan': 'JP',
    'Jersey': 'JE',
    'Jordan': 'JO',
    'Kazakhstan': 'KZ',
    'Kenya': 'KE',
    'Kiribati': 'KI',
    'South Korea': 'KR',
    'Kuwait': 'KW',
    'Kyrgyzstan': 'KG',
    'Laos': 'LA',
    'Latvia': 'LV',
    'Lebanon': 'LB',
    'Lesotho': 'LS',
    'Liberia': 'LR',
    'Libya': 'LY',
    'Liechtenstein': 'LI',
    'Lithuania': 'LT',
    'Luxembourg': 'LU',
    'Macao': 'MO',
    'Macedonia': 'MK',
    'Madagascar': 'MG',
    'Malawi': 'MW',
    'Malaysia': 'MY',
    'Maldives': 'MV',
    'Mali': 'ML',
    'Malta': 'MT',
    'Marshall Islands': 'MH',
    'Martinique': 'MQ',
    'Mauritania': 'MR',
    'Mauritius': 'MU',
    'Mayotte': 'YT',
    'Mexico': 'MX',
    'Micronesia, Federated States Of': 'FM',
    'Moldova': 'MD',
    'Monaco': 'MC',
    'Mongolia': 'MN',
    'Montenegro': 'ME',
    'Montserrat': 'MS',
    'Morocco': 'MA',
    'Mozambique': 'MZ',
    'Myanmar': 'MM',
    'Namibia': 'NA',
    'Nauru': 'NR',
    'Nepal': 'NP',
    'Netherlands': 'NL',
    'Netherlands Antilles': 'AN',
    'New Caledonia': 'NC',
    'New Zealand': 'NZ',
    'Nicaragua': 'NI',
    'Niger': 'NE',
    'Nigeria': 'NG',
    'Niue': 'NU',
    'Norfolk Island': 'NF',
    'Northern Mariana Islands': 'MP',
    'Norway': 'NO',
    'Oman': 'OM',
    'Pakistan': 'PK',
    'Palau': 'PW',
    'Palestinian Territory, Occupied': 'PS',
    'Panama': 'PA',
    'Papua New Guinea': 'PG',
    'Paraguay': 'PY',
    'Peru': 'PE',
    'Philippines': 'PH',
    'Pitcairn': 'PN',
    'Poland': 'PL',
    'Portugal': 'PT',
    'Puerto Rico': 'PR',
    'Qatar': 'QA',
    'Reunion': 'RE',
    'Romania': 'RO',
    'Russia': 'RU',
    'Rwanda': 'RW',
    'Saint Barthelemy': 'BL',
    'Saint Helena': 'SH',
    'Saint Kitts And Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Martin': 'MF',
    'Saint Pierre And Miquelon': 'PM',
    'Saint Vincent And Grenadines': 'VC',
    'Samoa': 'WS',
    'San Marino': 'SM',
    'Sao Tome And Principe': 'ST',
    'Saudi Arabia': 'SA',
    'Senegal': 'SN',
    'Republic of Serbia': 'RS',
    'Seychelles': 'SC',
    'Sierra Leone': 'SL',
    'Singapore': 'SG',
    'Slovakia': 'SK',
    'Slovenia': 'SI',
    'Solomon Islands': 'SB',
    'Somalia': 'SO',
    'South Africa': 'ZA',
    'South Georgia And Sandwich Isl.': 'GS',
    'South Sudan': 'SS',
    'Spain': 'ES',
    'Sri Lanka': 'LK',
    'Sudan': 'SD',
    'Suriname': 'SR',
    'Svalbard And Jan Mayen': 'SJ',
    'Swaziland': 'SZ',
    'Sweden': 'SE',
    'Switzerland': 'CH',
    'Syria': 'SY',
    'Taiwan': 'TW',
    'Tajikistan': 'TJ',
    'United Republic of Tanzania': 'TZ',
    'Thailand': 'TH',
    'Timor-Leste': 'TL',
    'Togo': 'TG',
    'Tokelau': 'TK',
    'Tonga': 'TO',
    'Trinidad And Tobago': 'TT',
    'Tunisia': 'TN',
    'Turkey': 'TR',
    'Turkmenistan': 'TM',
    'Turks And Caicos Islands': 'TC',
    'Tuvalu': 'TV',
    'Uganda': 'UG',
    'Ukraine': 'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'United States of America': 'US',
    'United States Outlying Islands': 'UM',
    'Uruguay': 'UY',
    'Uzbekistan': 'UZ',
    'Vanuatu': 'VU',
    'Venezuela': 'VE',
    'Vietnam': 'VN',
    'Virgin Islands, British': 'VG',
    'Virgin Islands, U.S.': 'VI',
    'Wallis And Futuna': 'WF',
    'Western Sahara': 'EH',
    'West Bank':'PS',
    'Yemen': 'YE',
    'Zambia': 'ZM',
    'Zimbabwe': 'ZW'
};



function Map2 (props){
  const [showSideInfo, setShowSideInfo] =  useState(false);
  const [country_data, setCountry_data] =  useState({});
  const [lat, setLat]=useState(props.lat);
  const[lng, setLng] = useState(props.lng);
  const[zoom, setZoom] = useState(props.zoom);


  const getStyle = (feature, layer) =>{
     return {
       // color: '#E5FEFB',
       color: '#536872',
       weight: 5,
       opacity: 1,
       width: "100%"
     }
   }

  const apiShow = (e) => {
    let countryInfo= document.getElementById("country_info");
    let maps = document.querySelector(".leaflet-container");
    if(countryInfo !==null && maps !==null){
      countryInfo.style.display = "flex";
      maps.style.cssText="display: flex; flex: 1 1 70%;height: 100%;width: 100%; position:relative;"

    }

    let layer = e.target;
    setShowSideInfo(true);
    let newlat = layer["_bounds"].getCenter()['lat'];
    let newlng = layer["_bounds"].getCenter()['lng'];
    let newZoom = 6;
    console.log(layer);

    console.log(layer.feature.properties.name);
    let countryFullName=layer.feature.properties.name;

    if(isoCountries.hasOwnProperty(`${countryFullName}`)){
      let isoCodeCountry = isoCountries[`${countryFullName}`];
      let url_request = `${restcountries_url}${isoCodeCountry}`;
      console.log(url_request);
      axios.get(url_request).then( response => {
       console.log(response.data);

       setCountry_data(response.data);
       setZoom(newZoom);

       setLat(newlat);
       setLng(newlng);

       // if(newlat === lat && newlng === lng){
       //   setZoom(newZoom);
       // }
       console.log(response.data['currencies']);
     }).catch(function (error) {
       console.log(error);
     });

    }

  }
  const onEachFeature = (feature, layer) => {
    // country_pop(feature,layer)
      if (feature.properties && feature.properties.name) {
      //     layer.bindPopup(feature.properties.name);
      }
      layer.on({
        click: apiShow
      });
  }

  const renderMap = () =>{
    return (
      <Map
        center={[lat, lng]}
        zoom={zoom}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON key={props.geojsonKey} data={props.countries_layer} style={getStyle} onEachFeature={onEachFeature}/>
        {        console.log(props.countries_layer)}
        {console.log(props.geojsonKey)
        }      </Map>

    );
  }
  const renderFrontPage = () => {
    return (
        <div id="frontContainer">
          <img src={LogoMochilas} alt="Mochilita App"></img>

          <h1>
            Mochilitas App

          </h1>
          <div id="bolud">

            <IconButton color="primary" aria-label="add to shopping cart" onClick={() => {
              let countryInfo= document.getElementById("country_info");
              let maps = document.querySelector(".leaflet-container");
              if(countryInfo!==null && maps !== null){
                // if(props.showSideInfo === false){
                if(countryInfo.style.display === "none"){
                  countryInfo.style.display = "flex";
                  maps.style.cssText="display: flex;flex: 1 1 70%;height: 100%;width: 100%; position:relative"

                }
                else{
                  countryInfo.style.display = "none";
                  maps.style.cssText="margin-left:30%;"
                  maps.style.cssText="flex: 1 1 100%; height: 100%; width: 100%; position:absolute; padding-left:30%;"

                }

              }

            }}>
              <ArrowBackIos/>
            </IconButton>

          </div>

        </div>

    )

  }

  const renderSideInfo = ()=>{
    return(
      <SideInfo country_data={country_data} showSideInfo = {showSideInfo}/>
    )
  }


  if(showSideInfo){
         // this.props.incidents ?
      return(
        <div id="wholeContainer">
          <div id="front">
            {renderFrontPage()}
          </div>
          <div id= 'principal'>
            {renderMap()}
            {renderSideInfo()}
          </div>
        </div>


      )
    }
    else{
      return(
          <div id="wholeContainer">
            <div id="front">
              {renderFrontPage()}
            </div>
            <div id= 'principal'>
              {console.log(props.countries_layer)}
              { console.log(props.geojsonKey)}
              {renderMap()}
            </div>
          </div>
       )

    }


}

export default Map2
