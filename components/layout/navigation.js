import Link from 'next/link';
import Logo from './logo';

import classes from './navigation.module.css';

function Navigation() {
	return (
		<header className={classes.header}>
			<Link href="/">
				<Logo />
			</Link>

			<nav>
				<ul>
					<li>
						<Link href="/impressive-stuff">Impressive Stuff</Link>
					</li>
					<li>
						<Link href="/things-i-do">Things I Do</Link>
					</li>
					<li>
						<Link href="/things-i-like">Things I Like</Link>
					</li>
					<li>
						<Link href="/how-i-am">How I Am</Link>
					</li>
					<li>
						<Link href="/contact-me">Contact Me</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;