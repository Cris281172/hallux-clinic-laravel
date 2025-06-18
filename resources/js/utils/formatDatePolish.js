const formatDatePolish = (dateString) => {
    const date = new Date(dateString.replace(' ', 'T'));
    return date.toLocaleString('pl-PL', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    });
};

export default formatDatePolish;
