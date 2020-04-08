import React, { Component } from 'react'
import Plot from 'react-plotly.js';

function PlotCurrency (props){

  const endYear = new Date().getFullYear();
  const startYear = new Date().getFullYear() - 1;
  const titleCurrencyPlot = `Currency Time Series for ${startYear} - ${endYear}`;
  console.log(props.times);

  return (
    <div>
      <Plot
        data={[
          {
            x: props.times,
            y: props.usd,
            type: 'scatter',
            mode: 'lines',
            name: 'USD',
            marker: {color: 'red'},
          },
          {
            x: props.times,
            y: props.eur,
            type: 'scatter',
            mode: 'lines',
            name: 'EUR',
            marker: {color: 'blue'},
          },

          ]
        }
        layout={ {width: 600, height: 600, title: titleCurrencyPlot} }
      />

    </div>

  )
}
export default PlotCurrency
