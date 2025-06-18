const SubpageHeader = ({ title, text, background }) => {
    return (
        <div className={`relative h-100 w-full bg-cover bg-fixed bg-top`} style={{ backgroundImage: `url("${background}")` }}>
            <div className={'absolute top-0 left-0 h-full w-full bg-black opacity-35'}></div>
            <div className={'trans absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'}>
                <h1 className={'text-5xl font-bold'}>{title}</h1>
                <p className={'text-center'}>{text}</p>
            </div>
        </div>
    );
};

export default SubpageHeader;
