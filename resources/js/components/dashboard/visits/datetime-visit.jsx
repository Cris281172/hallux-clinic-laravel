import { pl } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { route } from 'ziggy-js';
import formatToMySQLDateTime from '../../../utils/formatToMySQLDateTime.js';

const DatetimeVisit = ({ selected, onChange, data, setAvailableTimes, availableTimes }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAvailableHours = async () => {
            if (!data.date || !data.userID) return;

            const dateStr = formatToMySQLDateTime(new Date(data.date));
            const response = await fetch(
                route('dashboard.visit.get.available.hours', {
                    date: dateStr,
                    user_id: data.userID,
                }),
            );
            const dataTimes = await response.json();
            const times = dataTimes.map((timeStr) => {
                const [hour, minute] = timeStr.split(':');
                const date = new Date(data.date);
                date.setHours(parseInt(hour));
                date.setMinutes(parseInt(minute));
                date.setSeconds(0);
                date.setMilliseconds(0);
                return date;
            });

            setAvailableTimes(times);
        };

        fetchAvailableHours();
    }, [data.date, data.userID]);

    return (
        <DatePicker
            locale={pl}
            id="date"
            disabled={!data.userID}
            selected={selected}
            onChange={onChange}
            showTimeSelect
            includeTimes={availableTimes}
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="dd-MM-yyyy HH:mm"
            className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            placeholderText={data.userID ? 'Wybierz datę i godzinę' : 'WYBÓR LEKARZA WYMAGANY!'}
        />
    );
};

export default DatetimeVisit;
