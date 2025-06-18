const StatusVisit = ({ status }) => {
    const statusesConfig = {
        scheduled: 'bg-blue-100 text-blue-800',
        completed: 'bg-green-100 text-green-800',
        no_show: 'bg-red-100 text-red-800',
        cancelled: 'bg-gray-200 text-gray-800',
        in_progress: 'bg-yellow-100 text-yellow-800',
    };

    if (!status) {
        return;
    }

    return <div className={`rounded pt-1 pr-2 pb-1 pl-2 text-xs ${statusesConfig[status.slug]}`}>{status.name}</div>;
};

export default StatusVisit;
