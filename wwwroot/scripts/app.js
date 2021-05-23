function greetJs(msg) {
    alert(`called from js ${msg}`)
    return "Hallo From <b>JS</b>";
}

function onWfLoaded() {
    window.postMessage('WORKFLOW_LOADED');
}