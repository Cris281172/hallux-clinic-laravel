import { useState } from 'react';
import { toast } from 'sonner';
import { callToApi } from '../../../utils/api/callToApi.js';
import { Button } from '../../ui/button.tsx';
import { Input } from '../../ui/input.tsx';
import { Label } from '../../ui/label.tsx';

const PromotionCode = ({ setCodePromotionPrice, setCodePromotionID }) => {
    const [code, setCode] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await callToApi({
                url: route('store.order.send.code'),
                method: 'POST',
                data: {
                    code: code,
                },
            });
            if (response.success) {
                setCodePromotionPrice(response.promotionPrice);
                setCodePromotionID(response.codeID);
                toast.success('Kod rabatowy został dodany.');
            } else {
                toast.error(response.message);
            }
        } catch (err) {
        } finally {
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={'flex items-end gap-3'}>
                <div className="flex w-full flex-col gap-1.5">
                    <Label className={'text-dark-plum flex'} htmlFor="code">
                        Kod rabatowy
                    </Label>
                    <Input
                        className="block w-full border-[#530236] text-black placeholder:text-black"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        type="text"
                        id="code"
                        placeholder="Podaj kod rabatowy"
                    />
                </div>
                <Button variant={'darkPlum'} type={'submit'}>
                    Dodaj kod
                </Button>
            </form>
        </>
    );
};

export default PromotionCode;
