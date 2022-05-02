import { useState } from "react";
import styles from "../styles/Product.module.scss";
import NumberFormat from "react-number-format";

import Button from "@mui/material/Button";

function Product({ product, basket, setBasket }) {
	const [readMore, setReadMore] = useState(false);

	const handleReadMore = () => {
		setReadMore(!readMore);
	};

	const addToBasket = () => {
		if (basket.find((el) => el.id === product.id)) {
			console.log("Does exist");
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
		} else {
			setBasket((prev) => [...prev, { ...product, amount: 1 }]);
			console.log("Does not exist");
		}
	};
	console.log(product.category);

	return (
		<li className={styles.li}>
			<div className={styles.img_container}>
				<img src={`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`} alt="" />
			</div>
			<p>{product.brandname}</p>
			<h4>{product.productdisplayname}</h4>
			<div className={styles.info_basket}>
				<NumberFormat thousandsGroupStyle="thousand" value={product.price} decimalSeparator="." thousandSeparator={true} displayType="text" suffix=".00 kr." />

				<div>
					<Button disableElevation variant="contained" onClick={addToBasket}>
						Add to basket
					</Button>
					<Button disableElevation variant="outlined" onClick={handleReadMore}>
						Read More
					</Button>
				</div>
			</div>
			<p className={readMore ? "" : styles.hidden}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint excepturi laudantium est. Distinctio, consectetur fugiat?</p>
		</li>
	);
}

export default Product;
