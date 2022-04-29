import { useEffect, useState } from "react";
import "./styles/globals.scss";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			light: "#757ce8",
			main: "#3f50b5",
			dark: "#002884",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff7961",
			main: "#f44336",
			dark: "#ba000d",
			contrastText: "#000",
		},
	},
});

function App() {
	const [products, setProducts] = useState([]);
	const [basket, setBasket] = useState([]);
	const [fetchAmount, setFetchAmount] = useState(0);

	const loadMore = () => {
		setFetchAmount((prev) => prev + 10);
	};

	useEffect(() => {
		const fetchData = async () => {
			const json = await fetch("https://kea-alt-del.dk/t7/api/products?start=" + fetchAmount);
			const data = await json.json();

			setProducts((prev) => [...prev, ...data]);
		};
		fetchData();
	}, [fetchAmount]);

	return (
		<>
			<header>
				<Nav />
			</header>

			<main>
				<ProductList products={products} basket={basket} setBasket={setBasket} loadMore={loadMore} />
				<BasketContainer basket={basket} setBasket={setBasket} />
			</main>
		</>
	);
}

export default App;
