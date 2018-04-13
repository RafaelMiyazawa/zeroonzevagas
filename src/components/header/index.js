import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Zero Onze Vagas</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Vagas</Link>
					<Link activeClassName={style.active} href="/add">Adicionar</Link>
				</nav>
			</header>
		);
	}
}
