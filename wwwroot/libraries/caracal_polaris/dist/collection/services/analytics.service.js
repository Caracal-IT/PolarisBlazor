export class AnalyticsService {
  sendMessage(event) {
    this.sendPostMessage(event.detail);
  }
  send(type, path) {
    const wfElement = path.find(i => i["wf-Workflow"] !== undefined);
    if (!wfElement)
      return;
    const payload = this.createPayload(type, wfElement, path);
    if (payload) {
      this.sendPostMessage({
        type: payload.type,
        process: payload.process,
        activity: payload.activity,
        control: payload.control,
        valueHash: payload.valueHash,
        path: payload.wfPath.map(this.getName)
      });
    }
  }
  getPath(event) {
    return event.composedPath(event);
  }
  sendPostMessage(message) {
    const msg = { ...message, timestamp: Date.now() };
    console.log("ANALYTICS", msg);
    window.postMessage(msg, "*");
  }
  getName(item) {
    if (item.id)
      return item.id;
    if (item.page && item.page.name)
      return item.page.name;
    return "";
  }
  createPayload(type, wfElement, path) {
    const p = path.filter(i => i.nodeName && i.nodeName.indexOf("document-fragment") === -1);
    const wfPage = p.find(i => i.localName === "polaris-workflow");
    if (!wfPage)
      return null;
    const activity = wfPage.ctx.wf.activity;
    const wfPath = p.slice(0, p.indexOf(wfPage) + 1);
    if (!activity.name)
      return null;
    const process = wfPage.ctx.wf.process.name;
    const act = activity.name;
    const control = wfElement.id;
    const valueHash = this.getHashCode(wfElement.value);
    return { type, process, activity: act, control, valueHash, wfPath };
  }
  getHashCode(value) {
    let hash = 0;
    let chr;
    if (!value || value.length === 0)
      return hash;
    for (let i = 0; i < value.length; i++) {
      chr = value.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
  ;
}
