import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = ["#238723", "#E8AA42", "#D2222D", "#025464", "#E57C23", "#F8F1F1"];

const AppCircleChart = ( props) => {
  let dataArray = []
  props.categoryList.map(cat => {
    if(cat.name != "Tiền" || cat.id != "3")
    dataArray.push({"name": cat.name + " (" + cat.unit +")", "value": parseInt((cat.totalAmount / props.totalAmount) * 100)})
  })
  console.log(dataArray)
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={dataArray}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {dataArray.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];

export default AppCircleChart;
