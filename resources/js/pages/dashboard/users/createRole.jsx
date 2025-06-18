import { useForm } from '@inertiajs/react';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Switch } from '../../../components/ui/switch.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const CreateRole = ({ permissions }) => {
    const { data, setData, post } = useForm({
        roleName: '',
        permissions: [],
    });

    const handleSwitchChange = (id, value) => {
        setData('permissions', value ? [...data.permissions, id] : data.permissions.filter((el) => el !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.role.create'));
    };

    return (
        <DashboardLayout>
            <Heading title={'Dodawanie roli'} />
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
                    {permissions.map((permission, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <Switch id={permission.name} onCheckedChange={(value) => handleSwitchChange(permission.id, value)} />
                            <Label htmlFor={permission.name}>{permission.name}</Label>
                        </div>
                    ))}
                </div>
                <Button type={'submit'} className={'mt-5'}>
                    Stwórz role
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default CreateRole;
