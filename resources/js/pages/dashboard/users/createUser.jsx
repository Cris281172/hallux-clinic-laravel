import { useForm } from '@inertiajs/react';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const CreateUser = ({ roles }) => {
    const { data, setData, post } = useForm({
        name: '',
        email: '',
        password: '',
        role: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.user.create'));
    };

    return (
        <DashboardLayout>
            <Heading title={'Stwórz użytkownika'} />
            <form onSubmit={handleSubmit}>
                <div className={'grid grid-cols-3 gap-4'}>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="name">Nazwa użytkownika</Label>
                        <Input
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            type="text"
                            id="name"
                            placeholder="Podaj nazwę użytkownika"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email">Email użytkownika</Label>
                        <Input
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Podaj email użytkownika"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="password">Hasło użytkownika</Label>
                        <Input
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type="password"
                            id="password"
                            placeholder="Podaj hasło użytkownika"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email">Email użytkownika</Label>
                        <Select defaultValue={data.role} onValueChange={(value) => setData('role', +value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Wybierz status wizyty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {roles.map((item, index) => (
                                        <SelectItem key={index} value={`${item.id}`}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button className={'mt-4'} type={'submit'}>
                    Dodaj użytkownika
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default CreateUser;
