import React from 'react'

function VehicleTable(props) {
  return(
    <div>
      <table>
        <tr>
          <th>{props.columns[0]}</th>
          <th>{props.columns[1]}</th>
          <th>{props.columns[2]}</th>
          <th>{props.columns[3]}</th>
        </tr>
        <tr>
          <td>{props.year}</td>
          <td>{props.model}</td>
          <td>{props.price}</td>
          <td>
            <button>Buy Now</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default VehicleTable