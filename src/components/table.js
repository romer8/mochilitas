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

  }
  const currencies = (e) =>{
    if (props && props.currencies&& props.currencies.length > 0) {
      const currencies_data = props.currencies;
      return (
        <ul>
          {currencies_data.map(currency => <li key={currency.name}>{currency.name} ({currency.symbol}) </li>)}

        </ul>

      )
    }
  }

    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Table heading</th>
            <th>Table heading</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NativeName</td>
            <td>{props.nativeName}</td>
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
            <td><ul>
              {currencies()}
            </ul></td>
          </tr>
          <tr>
            <td>TimeZones</td>
            <td></td>
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
