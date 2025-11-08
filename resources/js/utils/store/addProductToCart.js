import Cookies from 'js-cookie';
const addProductToCart = (id, quantity, variantID) => {
    const currentBasketValue = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];
    const productIndex = currentBasketValue.findIndex((el) => el.id === id && el.variant === variantID);
    if (productIndex !== -1) {
        currentBasketValue[productIndex].quantity += quantity;
    } else {
        currentBasketValue.push({ id, quantity, variant: variantID });
    }

    Cookies.set('cart', JSON.stringify(currentBasketValue), {
        expires: 7,
        sameSite: 'Lax',
    });
    return;
};

export default addProductToCart;
