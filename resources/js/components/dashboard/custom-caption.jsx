import { useMemo } from 'react';

const CustomCaption = ({ displayMonth, onMonthChange }) => {
    const years = useMemo(() => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: currentYear - 1900 + 1 }, (_, i) => 1900 + i);
    }, []);

    const handleYearChange = (e) => {
        const newYear = Number(e.target.value);
        const newDate = new Date(displayMonth);
        newDate.setFullYear(newYear);
        onMonthChange(newDate);
    };

    return (
        <div className="flex items-center justify-center gap-2 p-2">
            <button onClick={() => onMonthChange(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1))}>◀</button>

            <select value={displayMonth.getFullYear()} onChange={handleYearChange}>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>

            <span className="w-24 text-center">{displayMonth.toLocaleString('default', { month: 'long' })}</span>

            <button onClick={() => onMonthChange(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1))}>▶</button>
        </div>
    );
};

export default CustomCaption;
