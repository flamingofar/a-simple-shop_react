function BasketProduct({ product, setBasket, basket }) {
	const removeProduct = () => {
		const newBasket = basket.filter((el) => el.id !== product.id);
		setBasket(newBasket);
		console.log(newBasket);
	};

	return (
		<li>
			<h5>{product.productdisplayname}</h5>
			<p>{product.price}</p>
			<button onClick={removeProduct}>Remove</button>
		</li>
	);
}

export default BasketProduct;
