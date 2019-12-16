class CustomTab extends HTMLElement {
	constructor() {
		super();

		this.props = {};

		this.element = document.createElement('div');
	}

	setProps = props => {
		this.props = props;

		this.init();
	}

	init = () => {
		this.element.innerText = this.props.title;
		
		this.render();
	}

	render = () => {
		this.attachShadow({mode: 'open'}).appendChild(this.element);
	}
};

customElements.define('custom-tab', CustomTab);