const formatDatePolish = (dateString, time = true, friendly = true) => {
    if (!dateString) return '';

    const date = new Date(dateString.replace(' ', 'T'));
    if (isNaN(date)) return '';

    if (friendly) {
        const months = [
            'stycznia',
            'lutego',
            'marca',
            'kwietnia',
            'maja',
            'czerwca',
            'lipca',
            'sierpnia',
            'września',
            'października',
            'listopada',
            'grudnia',
        ];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        if (time) {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${day} ${month} ${year}, ${hours}:${minutes}`;
        } else {
            return `${day} ${month} ${year}`;
        }
    } else {
        if (time) {
            return date.toLocaleString('pl-PL', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            });
        } else {
            return date.toLocaleString('pl-PL', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });
        }
    }
};

export default formatDatePolish;
