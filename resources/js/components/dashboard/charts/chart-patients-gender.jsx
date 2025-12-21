import { useEffect, useState } from 'react';
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const ChartPatientsGender = () => {
    const [statistics, setStatistics] = useState();

    const fetchPatientsGender = async () => {
        const response = await fetch(route('api.dashboard.patients.statistics.gender'));
        const data = await response.json();
        const femaleCount = data.femaleCount;
        const maleCount = data.maleCount;
        const sumCount = femaleCount + maleCount;
        setStatistics([
            {
                gender: 'Kobieta',
                count: femaleCount,
                percentage: ((100 * femaleCount) / sumCount).toFixed(1),
            },
            {
                gender: 'Mężczyzna',
                count: data.maleCount,
                percentage: ((100 * maleCount) / sumCount).toFixed(1),
            },
        ]);
    };
    useEffect(() => {
        fetchPatientsGender();
    }, []);

    return (
        <ResponsiveContainer width="100%" height={300} className={'mt-15'}>
            <BarChart data={statistics} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
                <XAxis dataKey="gender" />
                <YAxis domain={[0, 100]} tickFormatter={(value) => `${value} %`} />
                {/*<Tooltip content={<CustomTooltip />} />*/}
                <Bar dataKey="percentage" fill="#8884d8">
                    <LabelList dataKey="percentage" position="top" formatter={(value) => `${value}%`} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartPatientsGender;
