// pages/index.js

import React from 'react';
import useSWR from 'swr';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Sample data for solar production
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
    // Replace with your actual data API endpoint
    const { data, error } = useSWR('/api/solar-data', fetcher);

    if (error) return <div>Error loading data.</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Solar Dashboard</h1>
            <div style={{ width: '100%', height: 300 }}>
                <LineChart data={data}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="production" stroke="#8884d8" />
                </LineChart>
            </div>

            <h2>Current Power Output: {data[data.length - 1]?.production} kW</h2>
            <h2>Daily Energy Produced: {data[data.length - 1]?.dailyProduction} kWh</h2>
            <h2>Carbon Offset: {data[data.length - 1]?.carbonOffset} kg CO2</h2>
        </div>
    );
}
