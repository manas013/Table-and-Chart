import React from 'react'
import './Line.css';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    Label,
    CartesianGrid
  } from 'recharts';

function Linechart() {
    const pdata = [
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
        <div style={{fontWeight:'bold',marginBottom:'10px'}}>Medals Won by India in Olympics</div>
        <ResponsiveContainer width="100%" aspect={4} className="line">
        <LineChart data={pdata} margin={{ right: 500 }}>
            <CartesianGrid />
            <XAxis dataKey="Year" 
            
            
                interval={'preserveStartEnd'}
                
                 ><Label value="Years" offset={0} position="insideBottom" fill='#E8F0F2' /></XAxis>
            <YAxis datakey='Id'  interval={'preserveStartEnd'} >
            <Label value="Medals Won" offset={-30} angle="-90" position="left" className='lebel' fill='#E8F0F2'  />
           
            </YAxis>
           
            <Tooltip />
            <Line dataKey="Medals"
                stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
    </ResponsiveContainer>

    </div>
  )
}

export default Linechart