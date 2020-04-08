import React, { Component } from 'react'
import { Table } from 'react-bootstrap';


function TableData (props) {
  const groupsRegions = (e) =>{
    if (props && props.regionalBlocs&& props.regionalBlocs.length > 0) {
      const groupsMemberShip = props.regionalBlocs.map(group => group.name);
      console.log(groupsMemberShip);

      return (
        <ul>
          {groupsMemberShip.map(group => <li key={group}>{group}</li>)}
        </ul>
      )
    }
    else{
      return (
        <ul>
          <li key="noGroup">None</li>
        </ul>
      )
    }
  }
  const currencies = (e) =>{
    if (props && props.currencies&& props.currencies.length > 0) {
      const currencies_data = props.currencies;
      console.log(currencies_data);
      return (
        <ul>
          {currencies_data.map(currency => <li key={currency.name}>{currency.name} ({currency.symbol}) </li>)}

        </ul>
      )
    }
  }
  const timeZones = (e) =>{
    if (props && props.timeZones&& props.timeZones.length > 0) {
      const time_data = props.timeZones;
      console.log(time_data);
      return (
        <ul>
          {time_data.map(timeZone => <li key={timeZone}> ({timeZone}) </li>)}

        </ul>
      )
    }
  }

    return (
        <Table striped bordered hover responsive ="sm" size="sm">
          <thead>
            <tr>
              <th>Info</th>
              <th>Description</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NativeName</td>
              <td>{props.nativeName}</td>
            </tr>
            <tr>
              <td> ISO 3166 Code</td>
              <td>{props.alpha2Code}</td>
            </tr>
            <tr>
              <td>Region</td>
              <td>{props.region}</td>
            </tr>
            <tr>
              <td>SubRegion</td>
              <td>{props.subregion}</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>{props.capital}</td>
            </tr>
            <tr>
              <td>Demonym</td>
              <td>{props.demonym}</td>
            </tr>
            <tr>
              <td>Population</td>
              <td>{props.population}</td>
            </tr>
            <tr>
              <td>Currencies</td>
              <td>
                {currencies()}
              </td>
            </tr>
            <tr>
              <td>TimeZones</td>
              <td>
                {timeZones()}
              </td>
            </tr>
            <tr>
              <td>Group Membership</td>
              <td>
                {groupsRegions()}
              </td>
            </tr>


          </tbody>
        </Table>


    );
}
export default TableData
