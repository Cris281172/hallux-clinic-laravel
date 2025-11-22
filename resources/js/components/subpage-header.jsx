import Container from './page/container.jsx';

const SubpageHeader = ({ title, text, background }) => {
    return (
        <div className={`relative h-100 w-full`}>
            <div className={'absolute top-0 left-0 h-full w-full bg-black opacity-60'}></div>
            <div
                className={
                    'trans absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center lg:max-w-2/4'
                }
            >
                <Container>
                    <h1 className={'text-center text-3xl font-bold sm:text-5xl'}>{title}</h1>
                    <p className={'mt-2 text-center text-sm sm:text-lg'}>{text}</p>
                </Container>
            </div>
        </div>
    );
};

export default SubpageHeader;
