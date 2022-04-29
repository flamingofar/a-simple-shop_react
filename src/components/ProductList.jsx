import Product from "./Product";
import styles from "../styles/containers.module.scss";

function ProductList({ products, basket, setBasket, loadMore }) {
	return (
		<article className={styles.produktListmain}>
			<h4>Products</h4>
			<ul className={styles.productList}>
				{products.map((product) => (
					<Product key={product.id} product={product} basket={basket} setBasket={setBasket} />
				))}
			</ul>
			<button onClick={loadMore}>Load More</button>
		</article>
	);
}

export default ProductList;
