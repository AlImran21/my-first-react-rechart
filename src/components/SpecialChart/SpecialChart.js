import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState ([]);

    useEffect ( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then (data => {
            const loadedData = data.data.data;
            const phoneData = loadedData.map (phone => {
                const parts = phone.slug.split('-');
                const ph = {
                    name: parts[0],
                    value: parseInt(parts[1])
                }
                return ph;
            });
            setPhones(phoneData);
            console.log (phoneData);
        })
    }, [])

    return (
        <BarChart width={1000} height={540} data={phones} margin={{top: 100, bottom: 100}}>
        <Bar dataKey="value" fill="indigo" />
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Tooltip />
      </BarChart>
    );
};

export default SpecialChart;