import React from 'react';
import {Tooltip, PieChart, Pie} from 'recharts';




export default function Grades() {

    const data = [
        {name:"Passing A", value: 10, fill: '#43A047'},
        {name: "Passing B", value:12, fill:'#039BE5'},
        {name: "Passing C", value:8, fill:'#FDD835'},
        {name: "Failing D", value:3, fill:'#F4511E'},
        {name: "Failing F", value:1, fill:'red'},

    ];



    
    return (
        <div className="div">
            <h3>Average Grade Reports for Class 906</h3>
            <p1>Updated Weekly. Last updated 10/24/2021 6:09AM</p1>
            <div>
            <center><PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            label
          />
         
          <Tooltip />
        </PieChart>
        </center>
          </div>
        </div>
        

        
    )
}
