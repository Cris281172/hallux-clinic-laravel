const SectionHeader = ({ title, text }) => {
    return (
        <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-dark-plum border-b-4 border-[#F7AACBFF] pb-3 text-4xl font-bold">{title}</h2>
            <p className="text-dark-plum mt-4 max-w-2xl">{text}</p>
        </div>
    );
};

export default SectionHeader;
