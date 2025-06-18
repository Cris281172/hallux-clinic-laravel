import { Link } from '@inertiajs/react';
import treatment1Image from '../assets/images/treatments/treatment1.webp';
import treatment2Image from '../assets/images/treatments/treatment2.webp';
import treatment3Image from '../assets/images/treatments/treatment3.webp';
import treatment4Image from '../assets/images/treatments/treatment4.webp';
import treatment5Image from '../assets/images/treatments/treatment5.webp';
import treatment6Image from '../assets/images/treatments/treatment6.webp';

const TreatmentsTiles = () => {
    const treatmentsConfig = [
        {
            text: 'Diagnostyka podologiczna',
            url: 'diagnostyka-podologiczna',
            image: treatment1Image,
        },
        {
            text: 'Profilaktyka podologiczna',
            url: 'profilaktyka-podologiczna',
            image: treatment2Image,
        },
        {
            text: 'Terpaie problemów skórnych',
            url: 'terapie-problemow-skornych',
            image: treatment3Image,
        },
        {
            text: 'Terapie problemów aparatu paznockiowego',
            url: 'terapie-problemow-aparatu-paznockiowego',
            image: treatment4Image,
        },
        {
            text: 'ortonyskja',
            url: 'ortonyksja',
            image: treatment5Image,
        },
        {
            text: 'zabiegi uzupełniające',
            url: 'zabiegi-uzupelniajace',
            image: treatment6Image,
        },
    ];

    return (
        <div className={'relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-10'}>
            {treatmentsConfig.map((treatment, index) => (
                <Link
                    href={`/uslugi/${treatment.url}`}
                    className={`relative flex aspect-square cursor-pointer items-center justify-center rounded-lg bg-no-repeat`}
                    style={{ backgroundImage: `url("${treatment.image}")` }}
                >
                    <div className={'absolute top-0 left-0 h-full w-full rounded-lg bg-black opacity-45'}></div>
                    <div key={index} className={`absolute max-w-10/12`}>
                        <h3 className={'text-center text-2xl font-bold uppercase'}>{treatment.text}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TreatmentsTiles;
