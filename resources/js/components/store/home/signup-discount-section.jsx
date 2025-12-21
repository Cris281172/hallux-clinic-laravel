import { Button } from '../../ui/button.tsx';

const SignupDiscountSection = () => {
    return (
        <div className="bg-pink-100 py-16 text-center">
            <h2 className="text-dark-plum mb-4 text-4xl font-bold">Zarejestruj się i zdobądź 5% rabatu</h2>
            <p className="text-dark-plum mx-auto mb-8 max-w-xl">
                Załóż konto w naszym sklepie i od razu otrzymaj 5% zniżki na pierwsze zakupy. Zyskasz też dostęp do historii zamówień i specjalnych
                promocji.
            </p>
            <Button variant={'darkPlum'} size={'lg'}>
                Załóż konto
            </Button>
        </div>
    );
};

export default SignupDiscountSection;
