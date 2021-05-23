export class CustomActivity {
    get ctx() { return this._ctx; }
    set ctx(value) { this._ctx = value; }

    get next() { return this._next; }
    set next(value) { this._next = value; }

    constructor() {
        this.name = 'my-custom-activity';
        this.type = 'custom-activity';
    }

    execute() {
        return new Promise(async (resolve) => {
            const msg = await DotNet.invokeMethodAsync('PolarisBlazor', 'GreetFromCs');
            alert(msg);

            this.ctx.wf.goto(this.next);
            resolve(true);
        });
    };
}