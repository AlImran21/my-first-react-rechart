import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLine = () => {
    const data = [
        {
            name: 'Suplier A',
            price: 4000,
            Sales: 2400,
            profit: 2400,
        },
        {
            name: 'Suplier B',
            price: 3000,
            Sales: 1398,
            profit: 2210,
        },
        {
            name: 'Suplier C',
            price: 2000,
            Sales: 9800,
            profit: 2290,
        },
        {
            name: 'Suplier D',
            price: 2780,
            Sales: 3908,
            profit: 2000,
        },
        {
            name: 'Suplier E',
            price: 1890,
            Sales: 4800,
            profit: 2181,
        },
        {
            name: 'Suplier F',
            price: 2390,
            Sales: 3800,
            profit: 2500,
        },
        {
            name: 'Suplier G',
            price: 3490,
            Sales: 4300,
            profit: 2100,
        },
    ];


    return (
       <LineChart width={800} height={500} data={data} margin={{top: 100}}>
           <Line dataKey={'price'} stroke={'purple'}></Line>
           <Line dataKey={'Sales'} stroke="#FFF" ></Line>
           <Line dataKey={'profit'} stroke={'green'}></Line>
           <Tooltip></Tooltip>
           <XAxis dataKey={'name'}></XAxis> 
           <YAxis></YAxis>
       </LineChart>
    );
};

export default MyLine;