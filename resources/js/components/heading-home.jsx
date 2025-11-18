const HeadingHome = ({ title, text, titleClasName }) => {
    return (
        <div className={'mb-5 flex w-full flex-col items-center'}>
            <div className={'flex justify-center'}>
                <h2
                    className={`font-heading font-600 border-b-4 border-[#F7AACBFF] pb-2 text-center text-3xl font-semibold sm:text-4xl ${titleClasName}`}
                >
                    {title}
                </h2>
            </div>
            {text && <p className={'text-dark-plum text-md mt-2 max-w-200 text-center'}>{text}</p>}
        </div>
    );
};

export default HeadingHome;
