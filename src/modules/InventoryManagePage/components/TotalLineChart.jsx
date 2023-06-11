import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'


export default function TotalLineChart(props) {

    let calData = props.categoryList.map(cat => {
        return cat.totalAmount 
    })

    const data = [
        {
          "name": "23/05/2023",
          "av": 73,
          "bv": 45,
          "cv": 110,
          "dv": 56,
          "ev": 72
        },
        {
            "name": "25/05/2023",
            "av": 62,
            "bv": 55,
            "cv": 112,
            "dv": 56,
            "ev": 68
          },
          {
            "name": "26/05/2023",
            "av": 52,
            "bv": 55,
            "cv":134,
            "dv": 60,
            "ev": 70
          },
          {
            "name": "28/05/2023",
            "av": 67,
            "bv": 55,
            "cv": 105,
            "dv": 90,
            "ev": 105,
          },
          {
            "name": "01/06/2023",
            "av": 100,
            "bv": 69,
            "cv": 101.2,
            "dv": 123,
            "ev": 113
          },
          {
            "name": "02/06/2023",
            "av": 94,
            "bv": 67,
            "cv": 98,
            "dv": 128,
            "ev": 109
          },
          {
            "name": "05/06/2023",
            "av": 120,
            "bv": 72,
            "cv": 98,
            "dv": 107.5,
            "ev": 92
          },
          {
            "name": "07/06/2023",
            "av": 105.3,
            "bv": 75,
            "cv": 103,
            "dv": 84,
            "ev": 73,
          },
          {
            "name": "09/06/2023",
            "av": 88,
            "bv": 78,
            "cv": 90,
            "dv": 82,
            "ev": 53
          },
          {
            "name": "11/06/2023",
            "av": calData[1],
            "bv": calData[2],
            "cv": calData[3],
            "dv": calData[4],
            "ev": calData[5],
          },
      ]

    console.log('calData')
    console.log(calData)
    return (
        <div>
              <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="av" stroke="#238723" name='Gạo' />
                    <Line type="monotone" dataKey="bv" stroke="#E8AA42" name='Thịt gà'/>
                    <Line type="monotone" dataKey="cv" stroke="#D2222D" name='Thịt bò' />
                    <Line type="monotone" dataKey="dv" stroke="#025464" name='Thịt heo' />
                    <Line type="monotone" dataKey="ev" stroke="#E57C23" name='Cá' />
                </LineChart>
        </div>
      )
}


function getRandomInt(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
  
