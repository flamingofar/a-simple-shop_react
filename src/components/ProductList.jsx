import Product from "./Product";
import styles from "../styles/containers.module.scss";
import Filter from "./Filter";

import { useState } from "react";

import Button from "@mui/material/Button";

function ProductList({ products, setProducts, basket, setBasket, loadMore }) {
	const [gender, setGender] = useState("");

	const filtered = gender === "" ? products : products.filter((product) => product.gender.toLowerCase() === gender);

	return (
		<article className={styles.produktListmain}>
			<div className={styles.header}>
				<h4>Products</h4>
				<Filter products={products} setProducts={setProducts} setGender={setGender} gender={gender} />
			</div>
			<ul className={styles.productList}>
				{filtered.map((product) => (
					<Product key={product.id} product={product} basket={basket} setBasket={setBasket} />
				))}
			</ul>
			<Button disableElevation variant="contained" onClick={loadMore}>
				Load More
			</Button>
		</article>
	);
}

export default ProductList;
