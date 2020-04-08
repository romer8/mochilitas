import React, { Component } from 'react'
import Plot from 'react-plotly.js';

function PlotSocial (props){
  const endYear = new Date().getFullYear();
  const startYear = new Date().getFullYear() - 1;
  const maleMortality = props.maleMortality;
  const femaleMortality = props.femaleMortality;
  const totalUnderemployment = props.totalUnderemployment;
  const femaleUnderemployment = props.femaleUnderemployment;
  const maleUnderemployment = props.maleUnderemployment;
  console.log(props.times);

  return (
    <div>
      <Plot
        data={[
          {
            x: totalUnderemployment["time"],
            y: totalUnderemployment["values"],
            type: 'scatter',
            mode: 'lines',
            name: totalUnderemployment["title"],
            marker: {color: 'red'},
          },
          {
            x: femaleUnderemployment["time"],
            y: femaleUnderemployment["values"],
            type: 'scatter',
            mode: 'lines',
            name: femaleUnderemployment["title"],
            marker: {color: 'blue'},
          },
          {
            x: maleUnderemployment["time"],
            y: maleUnderemployment["values"],
            type: 'scatter',
            mode: 'lines',
            name: maleUnderemployment["title"],
            marker: {color: 'green'},
          },

          ]
        }
        layout={ {width: 600, height: 600, title: "Time-related underemployment, (% of employment)"} }
      />
      <Plot
        data={[
          {
            x: femaleMortality["time"],
            y: femaleMortality["values"],
            type: 'scatter',
            mode: 'lines',
            name: femaleMortality["title"],
            marker: {color: 'red'},
          },
          {
            x: maleMortality["time"],
            y: maleMortality["values"],
            type: 'scatter',
            mode: 'lines',
            name: maleMortality["title"],
            marker: {color: 'blue'},
          },

          ]
        }
        layout={ {width: 600, height: 600, title: "Mortality rate, infant (per 1,000 live births)"} }
      />

    </div>

  )
}
export default PlotSocial
