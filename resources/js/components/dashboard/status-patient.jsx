const StatusPatient = ({ status }) => {
    const statusesConfig = {
        new: 'bg-blue-100 text-blue-800',
        active: 'bg-green-100 text-green-800',
        inactive: 'bg-gray-100 text-gray-800',
        archived: 'bg-yellow-100 text-yellow-800',
        blocked: 'bg-red-100 text-red-800',
    };

    return <div className={`rounded pt-1 pr-2 pb-1 pl-2 text-xs ${statusesConfig[status.slug]}`}>{status.name}</div>;
};

export default StatusPatient;
