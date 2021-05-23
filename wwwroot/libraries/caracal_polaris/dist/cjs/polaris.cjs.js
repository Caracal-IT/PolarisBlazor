'use strict';

const index = require('./index-e7581e5e.js');

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('polaris.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["polaris-analytics_2.cjs",[[0,"polaris-analytics",null,[[4,"click","analyticsHandler"],[4,"wfMessage","wfMessage"]]],[0,"polaris-workflow",{"parent":[16],"tag":[1],"page":[16],"ctx":[16],"value":[8],"url":[1],"process":[1],"activity":[1],"sessionId":[1,"session-id"],"setServices":[64],"load":[64],"addActivity":[64],"addValidator":[64]}]]]], options);
});
