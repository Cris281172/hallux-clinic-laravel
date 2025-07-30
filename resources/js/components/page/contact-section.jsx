import { useForm } from '@inertiajs/react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { toast } from 'sonner';
import InputError from '../input-error.js';
import { Input } from '../ui/input.js';
import { Label } from '../ui/label.js';
import { Textarea } from '../ui/textarea.js';

const ContactSection = () => {
    const { data, setData, post, errors } = useForm({
        name: '',
        surname: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('send.contact.form'), {
            onSuccess: () => {
                toast.success('Wiadomość została wysłana!');
                setData({
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                    message: '',
                });
            },
            onError: () => {
                toast.error('Wystąpił błąd.');
            },
        });
    };

    return (
        <div className={'flex flex-col lg:flex-row'}>
            <form className={'w-full lg:w-1/2'} onSubmit={handleSubmit}>
                <div className={'grid grid-cols-1 gap-6 sm:grid-cols-2'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name" className={'text-dark-plum'}>
                            Imię (obowiązkowe)
                        </Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            type="text"
                            className="bg-dark-plum mt-1 block w-full"
                            placeholder="Podaj swoje imie"
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name" className={'text-dark-plum'}>
                            Nazwisko
                        </Label>
                        <Input
                            id="surname"
                            value={data.surname}
                            onChange={(e) => setData('surname', e.target.value)}
                            type="text"
                            className="bg-dark-plum mt-1 block w-full"
                            placeholder="Podaj swoje nazwisko"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name" className={'text-dark-plum'}>
                            Numer telefonu (obowiązkowe)
                        </Label>
                        <Input
                            id="phone"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            type="text"
                            className="bg-dark-plum mt-1 block w-full"
                            placeholder="Podaj numer telefonu"
                        />
                        <InputError message={errors.phone} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name" className={'text-dark-plum'}>
                            E-mail (obowiązkowe)
                        </Label>
                        <Input
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            type="text"
                            className="bg-dark-plum mt-1 block w-full"
                            placeholder="Podaj e-mail"
                        />
                        <InputError message={errors.email} />
                    </div>
                </div>
                <div className={'mt-6 flex w-full flex-col gap-1.5'}>
                    <Label htmlFor="name" className={'text-dark-plum'}>
                        Treść (obowiązkowa)
                    </Label>
                    <Textarea value={data.message} onChange={(e) => setData('message', e.target.value)} className="bg-dark-plum block w-full" />
                    <InputError message={errors.message} />
                </div>
                <button
                    className={
                        'bg-dark-plum hover:bg-dark-plum-500 mt-5 h-12 w-full cursor-pointer rounded-full px-4 py-2 font-bold text-white transition'
                    }
                    type={'submit'}
                >
                    Wyślij
                </button>
            </form>
            <div className={'mt-5 border-l-1 lg:mt-0 lg:ml-12 lg:pl-12'}>
                <ul className={'mb-2 border-b-1 pb-2'}>
                    <li className={'text-dark-plum flex items-center'}>
                        <FaPhoneAlt className={'mr-2'} /> Numer telefonu:{' '}
                        <a className={'ml-1 font-bold'} href={''}>
                            {' '}
                            +48 459 410 096
                        </a>
                    </li>
                    <li className={'text-dark-plum flex items-center'}>
                        <MdEmail className={'mr-2'} /> Email:{' '}
                        <a className={'ml-1 font-bold'} href={''}>
                            {' '}
                            hallux.clinic@gmail.com
                        </a>
                    </li>
                </ul>
                <ul className={'text-dark-plum'}>
                    <li>Armii Krajowej 44; 94-046 Łódź</li>
                    <li>Nip: 7261496883</li>
                    <li>Regon: 471387913</li>
                    <li>Konto bankowe: 03 1240 5556 1111 0011 2320 7916 (Pekao S.A.)</li>
                </ul>
            </div>
        </div>
    );
};

export default ContactSection;
