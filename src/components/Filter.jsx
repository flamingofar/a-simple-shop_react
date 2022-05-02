import { useState, useEffect } from "react";

function Filter({ products, setProducts, setGender, gender, categories, setCategory }) {
	useEffect(() => {
		console.log(gender);
	}, [gender]);

	const handleGender = (e) => {
		setGender(e.target.value);
	};
	const handleCategory = (e) => {
		setCategory(e.target.value);
	};

	return (
		<form>
			<label>
				Gender
				<select name="gender" id="gender" onChange={handleGender}>
					<option value="">All</option>
					<option value="men">Men</option>
					<option value="women">Women</option>
					<option value="unisex">Unisex</option>
				</select>
			</label>
			<label>
				Category
				<select name="category" id="category" onChange={handleCategory}>
					<option value="">All</option>
					{categories.map((category, idx) => (
						<option key={idx} value={category.category.toLowerCase()}>
							{category.category}
						</option>
					))}

					<option value="men">Men</option>
					<option value="women">Women</option>
				</select>
			</label>
		</form>
	);
}

export default Filter;
