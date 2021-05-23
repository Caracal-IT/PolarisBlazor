export class MessageActivity {
  constructor() {
    this.name = "message";
    this.type = "message-activity";
  }
  async execute() {
    this.ctx.page.sendMessage({
      type: this.messageType,
      description: this.description,
      metadata: {
        message: this.message
      }
    });
    if (this.next && this.next.length > 0)
      this.ctx.wf.goto(this.next);
    return true;
  }
}
