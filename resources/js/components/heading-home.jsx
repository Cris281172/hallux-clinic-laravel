const HeadingHome = ({ title, text, titleClasName }) => {
    return (
        <div className={'mb-5 flex w-full flex-col items-center'}>
            <div className={'flex justify-center'}>
                <h2 className={`border-b-4 border-[#F7AACBFF] pb-2 text-center text-4xl font-medium sm:text-5xl ${titleClasName}`}>{title}</h2>
            </div>
            {text && <p className={'text-dark-plum mt-2 max-w-200 text-center'}>{text}</p>}
        </div>
    );
};

export default HeadingHome;
