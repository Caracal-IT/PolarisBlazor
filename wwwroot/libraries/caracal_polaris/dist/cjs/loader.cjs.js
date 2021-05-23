'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e7581e5e.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["polaris-analytics_2.cjs",[[0,"polaris-analytics",null,[[4,"click","analyticsHandler"],[4,"wfMessage","wfMessage"]]],[0,"polaris-workflow",{"parent":[16],"tag":[1],"page":[16],"ctx":[16],"value":[8],"url":[1],"process":[1],"activity":[1],"sessionId":[1,"session-id"],"setServices":[64],"load":[64],"addActivity":[64],"addValidator":[64]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
