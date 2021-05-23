export class IPCActivity {
  constructor() {
    this.name = "ipc";
    this.type = "ipc-activity";
  }
  async execute() {
    if (this.process && this.process.length > 0) {
      this.ctx.wf.stack.push({
        process: this.ctx.wf.process.name,
        activity: this.next
      });
      this.ctx.wf.setProcess(this.ctx.model.getInterpolatedValue(this.process), 'start', this.next ? false : true);
    }
    return true;
  }
}
