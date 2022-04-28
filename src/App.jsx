import { useEffect, useState } from "react";
import "./styles/globals.scss";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";

function App() {
	const [products, setProducts] = useState([]);
	const [basket, setBasket] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const json = await fetch("https://kea-alt-del.dk/t7/api/products");
			const data = await json.json();

			setProducts((prev) => [...prev, ...data]);
		};
		fetchData();
	}, []);

	return (
		<>
			<header>
				<Nav />
			</header>

			<main>
				<ProductList products={products} basket={basket} setBasket={setBasket} />
				<BasketContainer basket={basket} setBasket={setBasket} />
			</main>
		</>
	);
}

export default App;
