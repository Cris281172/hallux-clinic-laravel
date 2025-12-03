import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import FormError from '../../form-error.jsx';
import { Button } from '../../ui/button.tsx';
import { Input } from '../../ui/input.tsx';
import { Label } from '../../ui/label.tsx';

export const AccountSummary = ({ account, setCurrentStep }) => {
    const { props } = usePage();

    return (
        <div className={'mt-4'}>
            <h5 className={'font-bold text-black'}>Dane konta</h5>
            <p className={'text-sm text-black'}>Email: {props.auth.user ? props.auth.user.email : account.email}</p>
            <Button size={'sm'} onClick={() => setCurrentStep(1)} className={'mt-5'} variant={'darkPlum'} type={'button'}>
                Edytuj
            </Button>
        </div>
    );
};

const Account = ({ setCurrentStep, account }) => {
    const { props } = usePage();

    const { data, setData, post, errors } = useForm({
        email: account?.email ?? '',
    });
    const [activeTab, setActiveTab] = useState('guest');

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('store.order.account'), {
            preserveScroll: true,
            onSuccess: () => {
                setCurrentStep((prev) => prev + 1);
            },
        });
    };

    return (
        <>
            {props.auth.user ? (
                <div>
                    <p className={'text-black'}>Zalogowany jako: {props.auth.user.email}</p>

                    <Button type={'button'} onClick={() => setCurrentStep((prev) => prev + 1)} variant={'darkPlum'} className={'mt-4'}>
                        Kontynuuj
                    </Button>
                </div>
            ) : (
                <div className="mx-auto w-full max-w-md p-5">
                    <div className="flex w-full border-b border-gray-300">
                        <button
                            onClick={() => setActiveTab('guest')}
                            className={`flex-1 py-2 text-center font-medium transition-all ${
                                activeTab === 'guest' ? 'text-dark-plum border-dark-plum border-b-2' : 'hover:text-dark-plum text-gray-500'
                            }`}
                        >
                            Gość
                        </button>

                        <button
                            onClick={() => setActiveTab('account')}
                            className={`flex-1 py-2 text-center font-medium transition-all ${
                                activeTab === 'account' ? 'text-dark-plum border-dark-plum border-b-2' : 'hover:text-dark-plum text-gray-500'
                            }`}
                        >
                            Konto
                        </button>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className={`mt-4 overflow-hidden transition-all duration-500 ${
                            activeTab === 'guest' ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <Label htmlFor="name" className={'text-dark-plum flex'}>
                            Podaj e-mail, aby kontynować jako gość
                        </Label>
                        <Input
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            type="text"
                            className="mt-1 block w-full border-[#530236] text-black placeholder:text-black"
                            placeholder={'Twój email'}
                        />
                        <FormError message={errors.email} />
                        <Button type={'submit'} variant={'darkPlum'} className={'mt-4 w-full'} size={'lg'}>
                            Kontynuuj
                        </Button>
                    </form>

                    <div
                        className={`mt-4 overflow-hidden transition-all duration-500 ${
                            activeTab === 'account' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <p className="mb-3 text-sm text-gray-700">Zaloguj się lub utwórz konto</p>

                        <button className="hover:border-dark-plum mb-3 w-full rounded-lg border border-gray-400 py-2 transition-all">
                            Zaloguj się
                        </button>

                        <button className="bg-dark-plum w-full rounded-lg py-2 text-white transition-all hover:bg-[#400128]">Zarejestruj się</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Account;
