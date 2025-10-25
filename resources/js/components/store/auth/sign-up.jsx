import { Link, useForm } from '@inertiajs/react';
import googleIcon from '../../../assets/icons/google-icon.png';
import { Button } from '../../ui/button.js';
import { Checkbox } from '../../ui/checkbox.js';
import { Input } from '../../ui/input.js';
import { Label } from '../../ui/label.js';
import { Separator } from '../../ui/separator.js';

const SignUp = () => {
    const { setData, data, post } = useForm({
        name: '',
        surname: '',
        email: '',
        password: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('store.auth.sign-up'));
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className={'mb-6 flex flex-col gap-3'}>
                <Button type={'button'} variant={'outline'}>
                    <img src={googleIcon} alt={'Google icon'} className={'w-6'} />
                    <a href={route('store.auth.google.redirect')}>Google</a>
                </Button>
            </div>
            <div className={'mb-5 flex flex-col gap-5'}>
                <div className={'flex gap-5'}>
                    <div className="grid flex-1 gap-1">
                        <Label htmlFor="name">Imię</Label>
                        <Input value={data.name} name={'name'} placeholder={'Podaj imię'} onChange={(e) => setData('name', e.target.value)} />
                    </div>
                    <div className="grid flex-1 gap-1">
                        <Label htmlFor="name">Nazwisko</Label>
                        <Input
                            value={data.surname}
                            name={'surname'}
                            placeholder={'Podaj nazwisko'}
                            onChange={(e) => setData('surname', e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid flex-1 gap-1">
                    <Label htmlFor="name">Email</Label>
                    <Input value={data.email} name={'email'} placeholder={'Podaj email'} onChange={(e) => setData('email', e.target.value)} />
                </div>
                <div className="grid flex-1 gap-1">
                    <Label htmlFor="name">Hasło</Label>
                    <Input
                        value={data.password}
                        name={'password'}
                        placeholder={'Podaj hasło'}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3 flex gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Zgadzam się na Umowę Użytkowania oraz Politykę Prywatności Hallux Clinic.</Label>
            </div>
            <Button className={'mb-3 w-full'} type={'submit'}>
                Zarejestruj się
            </Button>
            <Separator className={'mt-5 mb-5'} />
            <div className={'flex justify-center gap-1'}>
                <p>Masz konto?</p>
                <Link className={'underline'}>Zaloguj się</Link>
            </div>
        </form>
    );
};

export default SignUp;
