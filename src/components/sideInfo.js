import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import $ from "jquery";

import PlotDebts from './plots'
import PlotCurrency from './currencyPlot'
import TableData from './table'


function SideInfo(props) {
  const FINALTIAL_ENDPOINT = "https://finances.worldbank.org/resource/zucq-nrc3.json?country_code=";
  const CURRENCY_API_TIME_FRAME = "https://api.currencylayer.com/timeframe?access_key=208c7901616724f01b18dae408480857";
  const LIVE_CURRENCY_CONVERSION = "https://api.currencylayer.com/live?access_key=208c7901616724f01b18dae408480857";
  const TOKEN = "ZWopjWIh7YfvR6zsdndEu3OSd";
  const TERMINATED = "Terminated";
  const DISBURSED = "Fully Disbursed";
  const REPAID = "Fully Repaid";
  const REPAYING ="Repaying";
  const [finDataTerminated, setFinDataTerminated] = useState([]);
  const [finDataRepaid, setFinDataRepaid] = useState([]);
  const [finDataDisbursed, setFinDataDisbursed] = useState([]);
  const [finDataRepaying, setFinDataRepaying] = useState([]);
  const [currencyTimeSerie, setCurrencyTimeSerie] = useState({});
  const [liveCurrencyConversion, setLiveCurrencyConversion] = useState({
    USD:0,
    EUR:0
  });
  const [historicalCurrencyConversion, setHistoricalCurrencyConversion] = useState({});

  useEffect(()=>{
    const fixCountriesNames =(name) =>{
      // if(name =="Bolivia (Plurinational State of)"){
      //
      //
      // }
      // if(){
      //
      // }

    }
    const fetchTerminated = (status, callback) =>{
      if (props && props.country_data) {
        let endpoint = FINALTIAL_ENDPOINT + props.country_data["alpha2Code"] +"&loan_status="+status;
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
    const fetchTerminatedCurrency = (callback) =>{
        if(props.country_data['currencies']){
          let currencyCode = "USD";

          currencyCode = props.country_data['currencies'][0]["code"];

          let endpoint = `${LIVE_CURRENCY_CONVERSION}&source=${currencyCode}&currencies=USD,EUR&`;
          console.log(endpoint);
          $.ajax({
              url: endpoint,
              type: "GET",
          }).done(function(data) {
            console.log(data);
            let currencyConversion={};
            currencyConversion['USD']=data['quotes'][`${props.country_data["currencies"][0]['code']}USD`];
            currencyConversion['EUR']=data['quotes'][`${props.country_data["currencies"][0]['code']}EUR`];
            callback(currencyConversion);
          });

        }
    }
    const fetchTerminatedHistoricalCurrency = (callback) =>{
        let baseDate= new Date();
        let endDate =baseDate.toISOString().slice(0,10);
        let startDate = new Date(baseDate.getFullYear()-1, baseDate.getMonth(), baseDate.getDate()+1).toISOString().slice(0,10);
        console.log(startDate);

        console.log(endDate);

        if(props.country_data['currencies']){
          let currencyCode = "USD";

          currencyCode = props.country_data['currencies'][0]["code"];

          console.log(currencyCode);
          let endpoint = `${CURRENCY_API_TIME_FRAME}&source=${currencyCode}&currencies=USD,EUR&start_date=${startDate}&end_date=${endDate}`
          console.log(endpoint);
          $.ajax({
              url: endpoint,
              type: "GET",
          }).done(function(data) {
            console.log(data);
            let dataQuotes = data['quotes'];

            let allDates = Object.keys(dataQuotes);
            console.log(allDates);
            let preAllValues =Object.values(dataQuotes);
            let EURValues=[];
            let USDValues = [];
            preAllValues.forEach(function(e){
              USDValues.push(e[`${props.country_data["currencies"][0]['code']}USD`]);
              EURValues.push(e[`${props.country_data["currencies"][0]['code']}EUR`]);
            })

            let currencyHistoricakConversion={};
            currencyHistoricakConversion['time']= allDates;
            currencyHistoricakConversion['USD']= EURValues;
            currencyHistoricakConversion['EUR']= USDValues;
            callback(currencyHistoricakConversion);
          });

        }
    }
    fetchTerminatedCurrency(setLiveCurrencyConversion);
    fetchTerminatedHistoricalCurrency(setHistoricalCurrencyConversion);
    fetchTerminated(TERMINATED,setFinDataTerminated);
    fetchTerminated(REPAID, setFinDataRepaid);
    fetchTerminated(DISBURSED, setFinDataDisbursed);
    fetchTerminated(REPAYING, setFinDataRepaying);
    // console.log("WHATS");
    // fetchTerminated();

 },[props.country_data["name"], props.codeCurrency])

  const renderGeneralInfo = ()=>{
    return (
      <div>
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
          <h3>Actual Currency Conversion</h3>
          <p className="valueCurrency">
            1
          </p>
          <p >
            <em> {(() => {
              if (props && props.country_data["currencies"]) {
                return props.country_data["currencies"][0]["name"]
              }
            })()}
            </em>
          </p>
          <div id= "explainCurrency">
            <div id="USDcon">
              <p className="valueCurrency">{liveCurrencyConversion['USD']}</p>
              <p><em> USD</em></p>
            </div>
            <div id="EURcon">
              <p className="valueCurrency">  {liveCurrencyConversion['EUR']} </p>
              <p><em> EUR</em></p>
            </div>
          </div>
          <PlotCurrency
            usd= {historicalCurrencyConversion['USD']}
            eur= {historicalCurrencyConversion['EUR']}
            times= {historicalCurrencyConversion['time']}
          />
        </div>
      </div>
        );
    }
    const renderNotGeneric = () =>{
      if((finDataTerminated.length > 0 || finDataRepaid.length > 0) || (finDataDisbursed.length > 0 || finDataRepaying.length > 0) ){
        return (
          <PlotDebts
            country = {props.country_data["name"]}
            finDataTerminated = {finDataTerminated}
            finDataRepaid = {finDataRepaid}
            finDataRepaying = {finDataRepaying}
            finDataDisbursed = {finDataDisbursed}
          />
        );
      }
      else{
        return(
          <h4>No Data available for {props.country_data["name"]}. It can be due to that the World Bank does not have any
          records of historical loans to this country in specific</h4>
        );
      }
    }
        return (

        <div id= "country_info" className="box-field" className="newsbox">
          {renderGeneralInfo()}
          {renderNotGeneric()}

        </div>

    );
}
export default SideInfo
