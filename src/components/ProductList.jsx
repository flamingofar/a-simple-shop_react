import Product from "./Product";
import styles from "../styles/containers.module.scss";

function ProductList({ products, basket, setBasket }) {
	return (
		<article>
			<h4>Products</h4>
			<ul className={styles.productList}>
				{products.map((product) => (
					<Product key={product.id} product={product} basket={basket} setBasket={setBasket} />
				))}
			</ul>
		</article>
	);
}

export default ProductList;
