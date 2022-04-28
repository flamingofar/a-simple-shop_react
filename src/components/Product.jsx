function Product({ product, basket, setBasket }) {
	const addToBasket = (e) => {
		setBasket((prev) => [...prev, product]);
		console.log(basket);
	};

	return (
		<li>
			<p>{product.brand}</p>
			<h4>{product.productdisplayname}</h4>
			<p>{product.price}</p>
			<button onClick={addToBasket}>Add to basket</button>
		</li>
	);
}

export default Product;
