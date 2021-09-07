import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../constants/images";
import * as styles from "../styles/Navbar.module.css";
const Navbar = () => {
	return (
		<nav>
			<div className={`${styles.navContainer} margin-on-side row`}>
				{/* logo */}
				<Image src={images.logo} />
				{/* nav-links */}
				<ul className={`row ${styles.navLinks}`}>
					<li
						className={`${styles.navLink} ${styles.activeNavLink} text-dark-gray`}
					>
						<Link href="/">Home</Link>
					</li>
					<li className={`${styles.navLink} text-dark-gray`}>
						<Link href="/">Find a doctor</Link>
					</li>
					<li className={`${styles.navLink} text-dark-gray`}>
						<Link href="/">Apps</Link>
					</li>
					<li className={`${styles.navLink} text-dark-gray`}>
						<Link href="/">Testimonials</Link>
					</li>
					<li className={`${styles.navLink} text-dark-gray`}>
						<Link href="/">About us</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;