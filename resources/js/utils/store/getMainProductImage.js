const getMainProductImage = (images) => {
    return images.find((el) => el.order === 0).filename;
};

export default getMainProductImage;
