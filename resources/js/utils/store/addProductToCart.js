import Cookies from 'js-cookie';
const addProductToCart = (id, quantity) => {
    const currentBasketValue = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];
    const productIndex = currentBasketValue.findIndex((el) => el.id === id);
    if (productIndex !== -1) {
        currentBasketValue[productIndex].quantity += quantity;
    } else {
        currentBasketValue.push({ id, quantity });
    }

    Cookies.set('cart', JSON.stringify(currentBasketValue), { expires: 7 });
    return;
};

export default addProductToCart;
