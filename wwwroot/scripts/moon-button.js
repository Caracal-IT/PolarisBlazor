class MoonButton extends HTMLElement {
    static get observedAttributes() { return ['caption']; }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
    }

    get caption() { return this.getAttrValue('caption'); }
    set caption(value) { this.setAttrValue('caption',  value); }

    get ctx() { return this._ctx; }
    set ctx(value) { this._ctx = value; }

    get next() { return this.getAttrValue('next'); }
    set next(value) { this.setAttrValue('next',  value); }
    
    getAttrValue(name) {
        return this.getAttr(name).value;
    }

    setAttrValue(name, val) {
        return this.getAttr(name).value = val;
    }
    
    getAttr(name) {
        return this.attributes.getNamedItem(name)
    }

    async connectedCallback() {
        this.shadow.innerHTML = '';
        this.shadow.appendChild(this._css());
        this.shadow.appendChild(this._render());
    }

    disconnectedCallback() {
        this.button.removeEventListener('click', this.btnClick);
    }

    _buttonHandler() {
        this.ctx.wf.goto(this.next);
    }

    _render() {
        this.button = document.createElement('button');
        this.btnClick = this._buttonHandler.bind(this);

        this.button.addEventListener('click', this.btnClick);
        this.button.textContent = this.caption;
        this.button.className = 'btn btn-primary';

        return this.button;
    }

    _css() {
        const style = document.createElement('style');
        style.innerHTML = `
            @import "../../css/bootstrap/bootstrap.min.css";
            @import "../../css/app.css";
            
            button {
                margin: 0 5px;
            } 
        `;

        return style;
    }
}

customElements.define('moon-button', MoonButton);