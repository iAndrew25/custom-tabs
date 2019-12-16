class CustomTabs extends HTMLElement {
	constructor() {
		super();

		this.scope = {
			displayPage: 0,
			pages: {}
		};

		this.element = document.createElement('ul');
		this.attachShadow({mode: 'open'}).appendChild(this.element);
	}

	setProps = ({list}) => {
		this.scope.list = list;

		this.init();
	}

	init = () => {
		this.element.innerText = this.scope.list;

		this.scope.list.forEach((data, key) => this.scope.pages[key] = this.getPageContent({data, key}));

		[...document.getElementsByClassName('menu')].forEach((element, key) => {
			element.addEventListener('click', () => {
				this.scope.displayPage = key;
				this.render();
			});
		});

		this.render();
	}

	getPageContent = ({data, key, classes = []}) => {
		const element = document.createElement('custom-tab');
		element.setProps(data);

		return element;
	}

	render = () => {
		this.element.innerHTML = '';
		this.element.appendChild(this.scope.pages[this.scope.displayPage]);		
	}
};

customElements.define('custom-tabs', CustomTabs);