const formatToMySQLDateTime = (dateObj) => {
    const pad = (n) => String(n).padStart(2, '0');

    const year = dateObj.getFullYear();
    const month = pad(dateObj.getMonth() + 1);
    const day = pad(dateObj.getDate());
    const hour = pad(dateObj.getHours());
    const minute = pad(dateObj.getMinutes());
    const second = pad(dateObj.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

export default formatToMySQLDateTime;
