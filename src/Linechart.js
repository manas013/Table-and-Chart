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
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Medals Won by India in Olympics</div>
            <ResponsiveContainer width={'95%'} height={200} className="line">
                <LineChart data={pdata} margin={{ top: 5, right: 20, left: 10, bottom: 5 }} >
                    <CartesianGrid />
                    <XAxis dataKey="Year"


                        interval={0}

                    ><Label value="Years" offset={-6} position="bottom" fill='#E8F0F2' /></XAxis>
                    <YAxis datakey='Id' interval={0}
                        // label={{ value: 'Medals Won', angle: -90, position: 'insideLeft', fill: '#E8F0F2' }}
                    >
                        <Label value="Medals Won"  angle={-90} position="insideLeft" fill='#E8F0F2' />


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