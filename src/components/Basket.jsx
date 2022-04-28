import BasketProduct from "./BasketProduct";

function Basket({ basket, setBasket }) {
	const prices = basket.map((product) => product.price);

	const sum = prices.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
	console.log(sum);

	return (
		<div>
			<h4>Basket</h4>
			<div>Amount: {basket.length}</div>
			<span>Total: {sum}</span>
			<ul>
				{basket.map((product) => (
					<BasketProduct key={product.id} product={product} setBasket={setBasket} basket={basket} />
				))}
			</ul>
		</div>
	);
}

export default Basket;
