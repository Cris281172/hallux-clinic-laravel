const HeadingHome = ({ children }) => {
    return (
        <div className={'flex justify-center'}>
            <h2 className={'border-b-4 border-[#F7AACBFF] pb-2 text-center text-5xl font-medium'}>{children}</h2>
        </div>
    );
};

export default HeadingHome;
