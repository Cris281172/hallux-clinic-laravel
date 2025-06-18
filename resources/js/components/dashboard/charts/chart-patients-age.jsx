import { useEffect, useState } from 'react';
import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length > 0) {
        const data = payload[0].payload;
        return (
            <div className="rounded border bg-white px-3 py-2 text-sm text-black shadow">
                <p className="font-semibold">{label} lat</p>
                <p>Liczba pacjentów: {data.count}</p>
                <p>Procent: {data.percentage}%</p>
            </div>
        );
    }

    return null;
};

const ChartPatientsAge = () => {
    const [statistics, setStatistics] = useState();
    const fetchPatientStatisticsAge = async () => {
        const response = await fetch(route('api.dashboard.patients.statistics.age'));
        const data = await response.json();
        setStatistics(data);
    };

    useEffect(() => {
        fetchPatientStatisticsAge();
    }, []);

    return (
        <>
            <ResponsiveContainer width="100%" height={300} className={'mt-15'}>
                <BarChart data={statistics} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
                    <XAxis dataKey="ageGroup" tickFormatter={(value) => `${value} lat`} />
                    <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="percentage" fill="#8884d8">
                        <LabelList dataKey="percentage" position="top" formatter={(value) => `${value}%`} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export default ChartPatientsAge;
