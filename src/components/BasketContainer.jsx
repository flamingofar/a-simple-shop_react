import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm";

import styles from "../styles/containers.module.scss";
function BasketContainer({ basket, setBasket }) {
	return (
		<aside className={styles.basket}>
			<h4>Basket</h4>

			<Basket basket={basket} setBasket={setBasket} />
			<CheckoutForm basket={basket} />
		</aside>
	);
}

export default BasketContainer;
