import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm";

import styles from "../styles/containers.module.scss";
function BasketContainer({ basket, setBasket }) {
	return (
		<aside className={styles.basket}>
			<Basket basket={basket} setBasket={setBasket} />
			<CheckoutForm />
		</aside>
	);
}

export default BasketContainer;
