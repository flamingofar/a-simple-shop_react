import { useEffect } from "react";
import styles from "../styles/BasketProduct.module.scss";
import NumberFormat from "react-number-format";

function BasketProduct({ product, setBasket, basket }) {
	const removeProduct = () => {
		const newBasket = basket.filter((el) => el.id !== product.id);
		setBasket(newBasket);
	};

	const incrementProduct = () => {
		console.log("++");

		setBasket((prev) =>
			prev.map((item) => {
				if (item.id === product.id) {
					const copy = { ...item };
					copy.amount++;
					return copy;
				}
				return item;
			})
		);
	};
	const decrementProduct = () => {
		if (product.amount >= 0) {
			console.log("Decrementing products");

			setBasket((prev) =>
				prev.map((item) => {
					if (item.id === product.id) {
						const copy = { ...item };
						copy.amount--;
						return copy;
					}
					return item;
				})
			);
		}
	};

	useEffect(() => {
		if (product.amount === 0) {
			removeProduct();
			console.log("There are zero products");
		}
	}, [product]);

	return (
		<li className={styles.li}>
			<h5>{product.productdisplayname}</h5>
			<p>Qty: {product.amount}</p>
			<NumberFormat thousandsGroupStyle="thousand" value={product.price} prefix="kr. " decimalSeparator="." thousandSeparator={true} displayType="text" />
			<div>
				<button onClick={removeProduct}>Remove</button>
				<div>
					<button onClick={decrementProduct}>-</button>
					<button onClick={incrementProduct}>+</button>
				</div>
			</div>
		</li>
	);
}

export default BasketProduct;
