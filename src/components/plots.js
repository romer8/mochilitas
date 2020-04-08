import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import axios from 'axios';
import { create, all } from 'mathjs'

function PlotDebts (props){
  const config = { };
  const math = create(all, config);
  const titleFinantial = 'Historical IBRD Statement of Loans';
  console.log(props.finDataTerminated);
  console.log(props.finDataRepaying);
  console.log(props.finDataRepaid);
  console.log(props.finDataDisbursed);
  const pieArray = () => {
    let pieObject = [];
    let repaid = props.finDataRepaid.map(function(a){
      return a[0];
    })
    let repaying = props.finDataRepaying.map(function(a){
      return a[0];
    })
    let disbursed = props.finDataDisbursed.map(function(a){
      return a[0];
    })
    let terminated = props.finDataTerminated.map(function(a){
      return a[0];
    })


    // let sumTerminated = math.sum(props.finDataTerminated);
    // let sumRepaying = math.sum(props.finDataRepaying);
    // let sumRepaid = math.sum(props.finDataRepaid);
    // let sumDisbursed = math.sum(props.finDataDisbursed);

    // pieObject.push(sumTerminated);
    pieObject.push(math.sum(repaying));
    pieObject.push(math.sum(repaid));
    pieObject.push(math.sum(disbursed));
    pieObject.push(math.sum(terminated));
    return pieObject;
  }
  const splitArray = (ep) => {
    let x = [];
    let y = [];
    let xy = [];
    xy.push(x);
    xy.push(y);
    ep.forEach(function(e){
      y.push(e[0]);
      if(e[1]!== undefined){
        let dateString = e[1].split("T")[0];
        x.push(e[1].split("T")[0]);
      }
      else{
        x.push(0);
      }
    })
    // xy.sort();

    return xy;
  }
  const sorted = (data) => {
    data.sort((a,b) => {
      console.log(a);
      console.log(b);
      // const [aD, bD] = [a,b].map(([d]) => ([d]));
    return a[0] - b[0];
    });
  }

  const final = (e) =>{
    let xy = splitArray(e);
    console.log(xy);
    let xy_sorted = sorted(xy);
    return xy_sorted;
  }
  console.log(final(props.finDataRepaid));
  console.log(splitArray(props.finDataRepaid));
  console.log(splitArray(props.finDataRepaying));
  console.log(splitArray(props.finDataDisbursed));
  console.log(splitArray(props.finDataTerminated));
  console.log(pieArray());

  return (
    <div>
      <Plot
        data={[
          {
            x: splitArray(props.finDataRepaid)[0],
            y: splitArray(props.finDataRepaid)[1],
            name: 'Repaid Loan',
            type: 'bar',
            barmode: 'stack',
            marker: {
              color: 'blue',
              opacity: 1,
              line: {
                color: 'blue',
                width: 5
              }
            }
          },
          {
            x: splitArray(props.finDataRepaying)[0],
            y: splitArray(props.finDataRepaying)[1],
            name: 'Repaying Loan',
            type: 'bar',
            barmode: 'stack',
            marker: {
              color: 'red',
              opacity: 1,
              line: {
                color: 'red',
                width: 5
              }
            }
          },
          {
            x: splitArray(props.finDataDisbursed)[0],
            y: splitArray(props.finDataDisbursed)[1],
            name: 'Disbursed Loan',
            type: 'bar',
            barmode: 'stack',
            marker: {
              color: 'orange',
              opacity: 1,
              line: {
                color: 'orange',
                width: 5
              }
            }
          },
          {
            x: splitArray(props.finDataTerminated)[0],
            y: splitArray(props.finDataTerminated)[1],
            name: 'Terminated Loan',
            type: 'bar',
            barmode: 'stack',
            marker: {
              color: 'green',
              opacity: 1,
              line: {
                color: 'green',
                width: 5
              }
            }
          },

        ]}
        layout={ {width: 600, height: 600, title: titleFinantial} }
      >
      </Plot>
      <Plot
        data={[
          {
            values: pieArray() ,
            labels: ['Repaying','Repaid','Disbursed','Terminated'],
            type: 'pie',
          },
        ]}

        layout={ {
          width: 600,
          height: 600,
          title: titleFinantial,
          grid: {rows: 1, columns: 1, pattern: 'independent'},
        } }
      >
      </Plot>
      {/* <Plot
        data={[
          {
        x: splitArray(props.finDataRepaid)[0],
        y: splitArray(props.finDataRepaid)[1],
        type: 'scatter',
        mode: 'markers',
        marker: {
        color: 'red',
        }
          },
          {
        x: splitArray(props.finDataRepaying)[0],
        y: splitArray(props.finDataRepaying)[1],
        type: 'scatter',
        mode: 'markers',
        marker: {
        color: 'blue',
        }
          },
          {
        x: splitArray(props.finDataDisbursed)[0],
        y: splitArray(props.finDataDisbursed)[1],
        type: 'scatter',
        mode: 'markers',
        marker: {
        color: 'orange',
        }
          },

        ]}

        layout={ {
          width: 600,
          height: 600,
          title: titleFinantial,
          grid: {rows: 1, columns: 1, pattern: 'independent'},
        } }
        >
      </Plot> */}



    </div>

  )
}
export default PlotDebts
