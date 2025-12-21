import { Link, useForm, usePage } from '@inertiajs/react';
import { Button } from '../../ui/button.js';
import { Input } from '../../ui/input.js';
import { Label } from '../../ui/label.tsx';
import { Separator } from '../../ui/separator.js';

const SignIn = () => {
    const { url } = usePage();
    const { setData, data, post } = useForm({
        email: '',
        password: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('store.auth.sign-in'));
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className={'mb-5 flex flex-col gap-5'}>
                <div className="flex w-full flex-col gap-1.5">
                    <Label className={'text-dark-plum'} htmlFor="email">
                        Email
                    </Label>
                    <Input
                        className={'border-dark-plum text-black'}
                        value={data.email}
                        name={'email'}
                        placeholder={'Podaj email'}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                </div>
                <div className="flex w-full flex-col gap-1.5">
                    <Label className={'text-dark-plum'} htmlFor="password">
                        Hasło
                    </Label>
                    <Input
                        className={'border-dark-plum text-black'}
                        value={data.password}
                        name={'password'}
                        placeholder={'Podaj hasło'}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                </div>
            </div>
            <Button variant={'darkPlum'} className={'w-full'} type={'submit'}>
                Zaloguj się
            </Button>
            <Separator className={'mt-5 mb-5 bg-pink-200'} />
            <p className={'flex justify-center gap-1 text-black'}>
                <span>Brak konta?</span>
                <Link className={'underline'} href={`${url.split('?')[0]}?auth=rejestracja`}>
                    Zarejestruj się
                </Link>
            </p>
        </form>
    );
};

export default SignIn;
