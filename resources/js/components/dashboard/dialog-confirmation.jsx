import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button.js';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog.js';

const DialogConfirmation = ({ title, text, handleConfirmation, confirmationAlert, children }) => {
    const [open, setOpen] = useState(false);

    const onConfirm = () => {
        handleConfirmation();
        setOpen(false);
        if (confirmationAlert) {
            toast.success(confirmationAlert);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent showCloseButton={true} className="sm:max-w-[650px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{text}</DialogDescription>
                </DialogHeader>
                <DialogFooter className={'mt-5'}>
                    <Button type="button" onClick={onConfirm} variant="destructive">
                        Potwierdź
                    </Button>
                    <Button type="button" variant={'outline'} onClick={() => setOpen(false)}>
                        Anuluj
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogConfirmation;
