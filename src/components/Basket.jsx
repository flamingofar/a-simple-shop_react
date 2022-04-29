import BasketProduct from "./BasketProduct";
import NumberFormat from "react-number-format";
import styles from "../styles/Basket.module.scss";

function Basket({ basket, setBasket }) {
	const prices = basket.map((product) => product.price * product.amount);
	const amount = basket.map((product) => product.amount);

	const priceSum = prices.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
	const amountSum = amount.reduce((prevValue, currentValue) => prevValue + currentValue, 0);

	return (
		<div className={styles.basket}>
			<div>Amount: {amountSum}</div>
			<span>
				{/* prettier-ignore */}
				Total: <NumberFormat thousandsGroupStyle="thousand" value={priceSum} suffix=" kr." decimalSeparator="." thousandSeparator={true} displayType="text" />
			</span>
			<ul>
				{basket.map((product) => (
					<BasketProduct key={product.id} product={product} setBasket={setBasket} basket={basket} />
				))}
			</ul>
		</div>
	);
}

export default Basket;
