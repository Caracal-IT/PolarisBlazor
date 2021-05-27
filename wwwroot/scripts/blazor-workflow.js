import {BlazorPageActivity} from './workflow/blazor-page.activity.js';
import {CustomActivity} from './workflow/custom.activity.js';

window.addEventListener('message', msg => {
    if(msg.data !== 'WORKFLOW_LOADED')
        return;
    
    const wf = document.querySelector("polaris-workflow");
    wf.addActivity(new CustomActivity());
    wf.addActivity(new BlazorPageActivity(), true);
    
    window.goto = (next) => wf.ctx.wf.goto(next);
    
    window.setModelValue = (key, value) => wf.ctx.model.setValue(key, value);
    window.getModelValue = (key) => wf.ctx.model.getValue(key);
});