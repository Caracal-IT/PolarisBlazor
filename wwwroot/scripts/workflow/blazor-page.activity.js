export class BlazorPageActivity {
    get ctx() { return this._ctx; }
    set ctx(value) { this._ctx = value; }
    
    get controls() { return this._controls; }
    set controls(value) { return this._controls = value; }

    constructor() {
        this.name = 'blazor-page-activity';
        this.type = 'blazor-page-activity';
    }

    async execute() {
        await DotNet.invokeMethodAsync('PolarisBlazor', 'BuildPage', JSON.stringify(this.controls));
        const container = document.querySelector("#wfContainer");

        for(const child of container.childNodes){
            child.ctx = this.ctx;
        }

        return true;
    }
}