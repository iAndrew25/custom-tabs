class CustomPage extends HTMLElement {
	constructor() {
		super();

		this.props = {};

		this.element = document.createElement('div');
	}

	setProps = props => {
		this.props = props;

		this.willMount();
	}

	willMount = () => {
		this.element.innerText = this.props.title;
		
		this.render();
	}

	render = () => {
		this.attachShadow({mode: 'open'}).appendChild(this.element);
	}
};

customElements.define('custom-page', CustomPage);