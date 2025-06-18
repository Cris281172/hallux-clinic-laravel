const HeadingBanner = ({ backgroundImage, title, desc }) => {
    return (
        <div className={'relative bg-no-repeat pt-20 pb-20'} style={{ backgroundImage: `url("${backgroundImage}")` }}>
            <div className={'absolute top-0 left-0 h-full w-full bg-black opacity-35'}></div>
            <div className={'absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center'}>
                <h1 className={'text-3xl font-bold'}>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default HeadingBanner;
