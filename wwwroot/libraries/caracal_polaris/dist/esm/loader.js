import { p as promiseResolve, b as bootstrapLazy } from './index-d50090ea.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["polaris-analytics_2",[[0,"polaris-analytics",null,[[4,"click","analyticsHandler"],[4,"wfMessage","wfMessage"]]],[0,"polaris-workflow",{"parent":[16],"tag":[1],"page":[16],"ctx":[16],"value":[8],"url":[1],"process":[1],"activity":[1],"sessionId":[1,"session-id"],"setServices":[64],"load":[64],"addActivity":[64],"addValidator":[64]}]]]], options);
  });
};

export { defineCustomElements };
