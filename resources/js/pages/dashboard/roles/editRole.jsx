import { useForm } from '@inertiajs/react';
import Heading from '../../../components/heading.tsx';
import { Button } from '../../../components/ui/button.tsx';
import { Input } from '../../../components/ui/input.tsx';
import { Label } from '../../../components/ui/label.tsx';
import { Switch } from '../../../components/ui/switch.tsx';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const EditRole = ({ role, permissions }) => {
    const { data, setData, post } = useForm({
        roleName: role.name,
        permissions: role.permissions.map((item) => item.id),
    });
    const handleSwitchChange = (id, value) => {
        setData('permissions', value ? [...data.permissions, id] : data.permissions.filter((el) => el !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.role.edit', role.id));
    };

    const handleSwitchAll = (permissionsGroup) => {
        const allSelected = permissionsGroup.every((perm) => data.permissions.includes(perm.id));

        if (allSelected) {
            setData((prev) => ({
                ...prev,
                permissions: prev.permissions.filter((id) => !permissionsGroup.some((perm) => perm.id === id)),
            }));
        } else {
            setData((prev) => {
                const updated = [...prev.permissions];
                permissionsGroup.forEach((perm) => {
                    if (!updated.includes(perm.id)) {
                        updated.push(perm.id);
                    }
                });
                return {
                    ...prev,
                    permissions: updated,
                };
            });
        }
    };

    return (
        <DashboardLayout>
            <Heading title={'Edytuj rolę'} />
            <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="roleName">Nazwa roli</Label>
                    <Input
                        value={data.roleName}
                        onChange={(e) => setData('roleName', e.target.value)}
                        type="text"
                        id="roleName"
                        placeholder="Podaj nazwę roli"
                    />
                </div>
                <div className={'mt-5 grid grid-cols-3 gap-5'}>
                    {permissions.map((item, index) => (
                        <div key={index}>
                            <div className={'flex items-center gap-1'}>
                                <Label htmlFor={item.title}>{item.title}</Label>
                                <Switch
                                    onClick={() => handleSwitchAll(item.permissions)}
                                    id={item.title}
                                    checked={item.permissions.every((obj) => data.permissions.includes(obj.id))}
                                />
                            </div>
                            <div className={'mt-2 flex flex-col gap-2'}>
                                {item.permissions.map((permission, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <Switch
                                            checked={data.permissions.find((item) => item === permission.id)}
                                            id={permission.id}
                                            onCheckedChange={(value) => handleSwitchChange(permission.id, value)}
                                        />
                                        <Label htmlFor={permission.id}>{permission.name}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Button type={'submit'} className={'mt-5'}>
                    Edytuj role
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default EditRole;
