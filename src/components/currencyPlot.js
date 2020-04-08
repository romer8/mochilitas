import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import { create, all } from 'mathjs'

function PlotCurrency (props){
  const config = { };
  const math = create(all, config);
  const endYear = new Date().getFullYear();
  const startYear = new Date().getFullYear() - 1;
  const titleCurrencyPlot = `Currency Time Series for ${startYear} - ${endYear}`;

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
