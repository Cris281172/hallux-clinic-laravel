import { Link, useForm, usePage } from '@inertiajs/react';
import { Button } from '../../ui/button.js';
import { Input } from '../../ui/input.js';
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
            <Input value={data.email} name={'email'} placeholder={'Podaj email'} onChange={(e) => setData('email', e.target.value)} />
            <Input value={data.password} name={'password'} placeholder={'Podaj hasło'} onChange={(e) => setData('password', e.target.value)} />
            <Button type={'submit'}>Submit</Button>
            <Separator className={'mt-5 mb-5'} />
            <p className={'flex justify-center gap-1'}>
                <span>Brak konta?</span>
                <Link className={'underline'} href={`${url.split('?')[0]}?auth=rejestracja`}>
                    Zarejestruj się
                </Link>
            </p>
        </form>
    );
};

export default SignIn;
