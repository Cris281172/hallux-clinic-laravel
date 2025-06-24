import { pl } from 'date-fns/locale';
import DatePicker from 'react-datepicker';

const DateBirthday = ({ selected, onChange }) => {
    return (
        <DatePicker
            showYearDropdown
            maxDate={new Date()}
            yearDropdownItemNumber={110}
            locale={pl}
            id="date"
            // disabled={!data.userID}
            selected={selected}
            onChange={onChange}
            // includeTimes={availableTimes}
            dateFormat="dd-MM-yyyy"
            className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-[7px] text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            placeholderText={'Wybierz datę urodzenia pacjenta'}
        />
    );
};

export default DateBirthday;
