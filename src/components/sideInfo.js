import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import $ from "jquery";

import PlotCountry from './plots'
import TableData from './table'


function SideInfo(props) {
  const FINALTIAL_ENDPOINT = "https://finances.worldbank.org/resource/zucq-nrc3.json?country=";
  const TOKEN = "ZWopjWIh7YfvR6zsdndEu3OSd";
  const TERMINATED = "Terminated";
  const DISBURSED = "Fully Disbursed";
  const REPAID = "Fully Repaid";
  const REPAYING ="Repaying";
  const [finDataTerminated, setFinDataTerminated] = useState([])
  const [finDataRepaid, setFinDataRepaid] = useState([])
  const [finDataDisbursed, setFinDataDisbursed] = useState([])
  const [finDataRepaying, setFinDataRepaying] = useState([])

  useEffect(()=>{
    const fetchTerminated = (status, callback) =>{
      if (props && props.country_data) {
        console.log("terminated data");
        let endpoint = FINALTIAL_ENDPOINT + props.country_data["name"] +"&loan_status="+status;
        console.log(endpoint);
        $.ajax({
            url: endpoint,
            type: "GET",
            data: {
              "$limit" : 5000,
              "$$app_token" : TOKEN
            }
        }).done(function(data) {
          console.log(data);
          let loans_values = [];

          for(let i = 0; i< data.length ; ++i){
            loans_values.push([data[i]["original_principal_amount"],data[i]["agreement_signing_date"] ])
          }
          callback(loans_values);
        });

      }
    }
    fetchTerminated(TERMINATED,setFinDataTerminated);
    fetchTerminated(REPAID, setFinDataRepaid);
    fetchTerminated(DISBURSED, setFinDataDisbursed);
    fetchTerminated(REPAYING, setFinDataRepaying);
    // console.log("WHATS");
    // fetchTerminated();

 },[props.country_data["name"]])

    return (

      <div id= "country_info" className="box-field" className="newsbox">
        <div id ="initialMeta">
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
        <div id= "tableID">
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
          <PlotCountry
            country = {props.country_data["name"]}
            finDataTerminated = {finDataTerminated}
            finDataRepaid = {finDataRepaid}
            finDataRepaying = {finDataRepaying}
            finDataDisbursed = {finDataDisbursed}
          />
        </div>

      </div>

    );
}
export default SideInfo
