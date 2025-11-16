const ProductPrice = ({ price, promotions = [], showPrevPrice = true, finalPriceClassName }) => {
    const activePromotion = promotions.length ? promotions.reduce((prev, curr) => (curr.priority > prev.priority ? curr : prev)) : null;

    const finalPrice = activePromotion
        ? activePromotion.discount_type === 'percent'
            ? price * (1 - activePromotion.discount_value / 100)
            : price - activePromotion.discount_value
        : price;

    return (
        <div className="product-price flex items-center gap-2">
            {activePromotion && finalPrice !== price ? (
                <>
                    {showPrevPrice && <span className="text-xl text-gray-500 line-through">{price} zł</span>}
                    <span className={`text-lg font-semibold text-black ${finalPriceClassName}`}>{finalPrice} zł</span>
                </>
            ) : (
                <span className={`text-lg font-semibold text-black ${finalPriceClassName}`}>{price} zł</span>
            )}
        </div>
    );
};

export default ProductPrice;
