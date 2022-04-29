import { useEffect, useState, useRef } from "react";
import styles from "../styles/CheckoutForm.module.scss";
import { Button } from "@mui/material";

function CheckoutForm({ basket }) {
	const [isValid, setIsValid] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const form = useRef(null);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const postBasket = () => {
		const payload = {
			name,
			email,
			basket,
		};

		const postData = JSON.stringify(payload);
		fetch("https://cocktails-2d4e.restdb.io/rest/a-simple-shop-react  ", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"x-apikey": "6138eab743cedb6d1f97ee7b",
			},
			body: postData,
		})
			.then((res) => res.json())
			.then((data) => console.log(data));

		console.log(payload);
	};

	useEffect(() => {
		console.log(form.current.checkValidity());

		if (form.current.checkValidity() && name) {
			setIsValid(false);
		}
	}, [email]);

	const submit = (e) => {
		e.preventDefault();
		postBasket();
		setEmail("");
		setName("");
		setIsValid(true);
	};
	return (
		<form className={styles.form} onSubmit={submit} ref={form}>
			<label>
				{/* prettier-ignore */}
				Name: <input type="text" id="name" onChange={handleName} value={name} required />
			</label>
			<label>
				{/* prettier-ignore */}
				Email: <input type="email" id="email" onChange={handleEmail} value={email} />
			</label>
			<Button variant="contained" disabled={isValid}>
				Checkout
			</Button>
		</form>
	);
}

export default CheckoutForm;
