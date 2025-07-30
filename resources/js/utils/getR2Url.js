const getR2Url = (key) => {
    return `${import.meta.env.VITE_R2_PUBLIC_URL}/${key}`;
};

export default getR2Url;
