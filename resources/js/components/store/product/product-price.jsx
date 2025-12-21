const ProductPrice = ({ price, promotion = null, showPrevPrice = true, finalPriceClassName }) => {
    return (
        <div className="product-price flex items-center gap-2">
            {promotion && promotion.final_discount !== price ? (
                <>
                    {showPrevPrice && <span className="text-xl text-gray-500 line-through">{price} zł</span>}
                    <span className={`text-lg font-semibold text-black ${finalPriceClassName}`}>{promotion.final_discount} zł</span>
                </>
            ) : (
                <span className={`text-lg font-semibold text-black ${finalPriceClassName}`}>{price} zł</span>
            )}
        </div>
    );
};

export default ProductPrice;
