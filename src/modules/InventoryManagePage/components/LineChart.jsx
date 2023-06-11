import React, { useState } from 'react'
import { useEffect } from 'react'
import { Tooltip } from 'react-bootstrap'
import {CartesianGrid, Legend, Line, LineChart, XAxis, YAxis} from "recharts"
import { CategoryService, ItemService } from '../../../services'

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  

export default function LineChartComp(props) {
  const [lineChartData, setLineChartData] = useState([])
  const [distributionList, setDistributionList] = useState([])
  const [itemfrList, setItemFromList] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isDone, setDone] = useState(false)
  useEffect( () => {
     retrieveDistribution()
     setLoading(false)
  }, [])

  const retrieveDistribution= () => {
    CategoryService.getCategoryDistributionChart(props.id)
    .then(res => {
      let linechartData = []
      const lineChart= res.data.data
      setDistributionList(lineChart)
      lineChart.map(data => {
        let max = parseInt(data.distributionItemPlannedQuantity + 5)
        let min = data.distributionItemPlannedQuantity > 10 ? parseInt(data.distributionItemPlannedQuantity -6) : 2
        linechartData.push({
          name: data.distributionItemTime.slice(0, 10),
          uv: data.distributionItemPlannedQuantity,
          pv: getRandomInt(min , max)
        })
      })
      setLineChartData(linechartData)
      setDone(true)
    })
    .catch(err => {
      console.log(err)
    })
  }
  if(!isLoading)
  return (
    <div>
          <LineChart width={730} height={250} data={lineChartData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" name='Thu' />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" name='Chi'/>
            </LineChart>
    </div>
  )
}

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}


                              
