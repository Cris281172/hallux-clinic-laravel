import { useForm } from '@inertiajs/react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Button } from '../../ui/button.js';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog.js';
import { Input } from '../../ui/input.js';
import { Label } from '../../ui/label.js';

const SetPasswordDialog = ({ isPasswordChanged }) => {
    const { data, setData, post } = useForm({
        newPassword: '',
        newPasswordConfirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('password.update'));
    };

    return (
        <Dialog open={!isPasswordChanged}>
            <DialogTrigger asChild>
                <Button className={'flex-1 cursor-pointer'} variant={'outline'}>
                    <FaCalendarAlt />
                    Dodaj wizytę
                </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="sm:max-w-[650px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Wymagane ustawienie hasła!</DialogTitle>
                        <DialogDescription>Ustaw swoje nowe hasło do logowania</DialogDescription>
                    </DialogHeader>
                    <div className={'mt-2 grid grid-cols-2 gap-4'}>
                        <div className="flex w-full flex-col gap-1.5">
                            <Label htmlFor="newPassword">Nowe hasło</Label>
                            <Input
                                value={data.newPassword}
                                onChange={(e) => setData('newPassword', e.target.value)}
                                type="password"
                                id="newPassword"
                                placeholder="Podaj nowe hasło"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-1.5">
                            <Label htmlFor="newPasswordConfirmation">Potwórz nowe hasło</Label>
                            <Input
                                value={data.newPasswordConfirmation}
                                onChange={(e) => setData('newPasswordConfirmation', e.target.value)}
                                type="password"
                                id="newPasswordConfirmation"
                                placeholder="Powtórz nowe hasło"
                            />
                        </div>
                    </div>
                    <DialogFooter className={'mt-5'}>
                        <Button type="submit">Potwierdź i zaloguj się ponownie</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default SetPasswordDialog;
