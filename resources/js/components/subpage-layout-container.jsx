import HeadingSubpage from './heading-subpage.jsx';

const SubpageLayoutContainer = ({ children, className }) => {
    return (
        <div
            style={{
                boxShadow: '0 10px 30px #000',
            }}
            className={`relative -top-15 m-auto w-full rounded-tl-xl rounded-tr-xl bg-gray-200 pr-5 pb-20 pl-5 sm:w-10/12 sm:pr-10 sm:pl-10 ${className}`}
        >
            <div className={'pt-5 pb-10'}>
                <HeadingSubpage />
            </div>
            {children}
        </div>
    );
};

export default SubpageLayoutContainer;
