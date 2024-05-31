import { addObserver, dispatch } from '../store/store';
import { navigate } from '../store/actions';

class Login extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const button = this.shadowRoot?.querySelector('button');
		button?.addEventListener('click', () => {
			dispatch(navigate('DASHBOARD'));
		});
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `<h1>Login</h1>
			<button>Click</button>`;
		}
	}
}

customElements.define('app-login', Login);
