import { dispatch } from '../../store/store';
import { changeBackgroud } from '../../store/actions';

export enum Attribute {
	'description' = 'description',
	'text_button' = 'text_button',
}

class Card extends HTMLElement {
	description?: string;
	text_button?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			description: null,
			text_button: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: unknown, newValue: string) {
		this[propName] = newValue;
		this.render();
	}

	connectedCallback() {
		this.render();

		const btn = this.shadowRoot?.querySelector('button');
		btn?.addEventListener('click', () => {
			console.log('holi');
			dispatch(changeBackgroud('red'));
		});
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <h1>This is my card</h1>
      <p>${this.description}</p>
      <button>${this.text_button}</button>
      `;
		}
	}
}

customElements.define('app-card', Card);
export default Card;
