import { useForm } from '@inertiajs/react';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Switch } from '../../../components/ui/switch.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const EditRole = ({ role, permissions }) => {
    const { data, setData, post } = useForm({
        roleName: role.name,
        permissions: role.permissions.map((item) => item.id),
    });
    console.log(permissions);
    const handleSwitchChange = (id, value) => {
        setData('permissions', value ? [...data.permissions, id] : data.permissions.filter((el) => el !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.role.edit', role.id));
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
                            <h3>{item.title}</h3>
                            <div className={'mt-2 flex flex-col gap-2'}>
                                {item.permissions.map((permission, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <Switch
                                            defaultChecked={data.permissions.find((item) => item === permission.id)}
                                            id={permission.name}
                                            onCheckedChange={(value) => handleSwitchChange(permission.id, value)}
                                        />
                                        <Label htmlFor={permission.name}>{permission.name}</Label>
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
