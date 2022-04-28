import styles from "../styles/Nav.module.scss";

function Nav() {
	return (
		<nav>
			<ul className={styles.ul}>
				<li>Home</li>
				<li>Products</li>
				<li>About</li>
			</ul>
		</nav>
	);
}

export default Nav;
