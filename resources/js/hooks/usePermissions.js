import { usePage } from '@inertiajs/react';

const usePermissions = () => {
    const { props } = usePage();
    const userPermissions = props.userPermissions || [];

    const checkUserHasPermission = (permissionName) => {
        return userPermissions.some((permission) => permission.name === permissionName);
    };

    return { checkUserHasPermission };
};

export default usePermissions;
