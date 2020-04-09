import React, { Component } from 'react'

function Instructions (props){

  return (
    <div id="infoHelp">
      <h2>Instructions</h2>
      <p>The Mochilitas App is an app that tries to collect Api from the WorldBank open data and other currency data.
      The main focus of the app is to try to show general information, finantial, and social data about the selected country.
      The app was created trying to collect free API for each one of the countries, so it can be easy to know how teh country is performing
      in each one of these areas (finatial, social). The app is pretty intuitive, and when a country is clicked, the data will get
      displayed in the left corner of the screen. Firstly, the general info will be displayed. Secondly, the finatial data will displayed.
      Finally, the social data will be displayed at the end.Below explanation of each of the areas will be described. </p>
      <h3>General Info</h3>
      <p> The general Info displays the following data for each one of the countries:</p>
      <ul>
        <li>nativeName</li>
        <li>ISO 3166 COde</li>
        <li>Regiom</li>
        <li>Sub Region</li>
        <li>Capital</li>
        <li>Denonym</li>
        <li>Population</li>
        <li>Currencies</li>
        <li>Time Zones</li>
        <li>Time Zones</li>
        <li>Group Membership</li>
      </ul>
      <p>The Api used  for this was the <a href="https://restcountries.eu/"> Rest Country API</a></p>

      <h3>Finantial Data</h3>
      <p> The Finantial data displays finatial inforamtion in two parts: currency conversion and IBRD Statements of Loans</p>
      <ul>
        <li>
          <p> Currency Conversion</p>
          <p><em>
            The currency conversion gives conversion from the local currency to USD and Euros. In addition, the last year data Conversion
            for the USD and Euro are included. The API used for this was the  <a href="https://currencylayer.com/"> Currency Layer</a>
          </em></p>
        </li>
        <li>
          <p> International Bank for Reconstruction and Development (IBRD) loans</p>
          <p><em>
            The International Bank for Reconstruction and Development (IBRD) loans are public and publicly guaranteed debt extended by the World Bank Group. IBRD loans are made to, or guaranteed by, countries that are members of IBRD. IBRD may also make loans to IFC. IBRD lends at market rates. Data are in U.S. dollars calculated using historical rates. This dataset contains historical snapshots of the Statement of Loans including the latest available snapshots. The World Bank complies with all sanctions applicable to World Bank transactions.The API used for this was the  <a href="https://dev.socrata.com/foundry/finances.worldbank.org/zucq-nrc3"> IBRD Statement Of Loans - Historical Data API</a>
          </em></p>
        </li>
      </ul>

      <h3>Social Data</h3>
      <p> The Social data is divided in two parts. Firstly, it displays a time series graph of underemployment of women, men and total. Secondly, it displays a time series graph for infant mortality
      for males and females as a percentage for every 1000 deaths </p>
      <ul>
        <li>
          <p>Time-related underemployment, (% of employment)</p>
          <p><em>
            The underemployment percentage related to time is a time series plot that describes the percentage of men and women or population in general that have a job under their professional capacities.
          </em></p>
        </li>
        <li>
          <p> Mortality rate, infant, female and male (per 1,000 live births)</p>
          <p><em>
            The  Mortality rate, infant dataset contains data for female and male (per 1,000 live births), and it is displayed with a time series scatter plot, so the drop or rise in the mortality can be noticed
          </em></p>
        </li>
        <p>The API used for this was the
          <a href="https://www.quandl.com/data/WGEN-World-Bank-Gender-Statistics/documentation"> World Bank Gender Statistics</a>
        </p>
      </ul>
      <h4> Mochilitas App Code</h4>

      <p> The source code of the app can be found in this <a href="https://github.com/romer8/mochilitas"> GitHub Repo</a></p>
    </div>

  )
}
export default Instructions
