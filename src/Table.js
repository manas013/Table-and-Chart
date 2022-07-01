import React from 'react'
import './table.css';


function Table() {
    const deta=[
        {
          "Id": 1,
          "Year": 2004,
          "Medals": 1
      },
      {
          "Id": 2,
          "Year": 2008,
          "Medals": 3
      },
      {
          "Id": 3,
          "Year": 2012,
          "Medals": 6
      },
      {
          "Id": 4,
          "Year": 2016,
          "Medals": 2
      },
      {
          "Id": 5,
          "Year": 2020,
          "Medals": 7
      }
    
      ]
  return (
    <div>
         <table>
        <thead>
      <tr>
    <th>Id</th>
    <th>Year</th>
    <th>Medals</th>
  </tr>
  </thead>
  <tbody>
    {deta.map((e)=>{
     return <tr>
        <td>{e.Id}</td>
        <td>{e.Year}</td>
        <td>{e.Medals}</td>
        </tr>
    })}
  </tbody>
      </table>
    </div>
  )
}

export default Table