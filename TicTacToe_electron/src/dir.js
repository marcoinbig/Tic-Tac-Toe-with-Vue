const {remote, ipcRenderer} = require('electron');
document.getElementById('minimize-button').addEventListener('click', (e) => {
    remote.getCurrentWindow().minimize();
});
document.getElementById('min-max-button').addEventListener('click', (e) => {
    
    let current = remote.getCurrentWindow();
    current.isMaximized() ? current.unmaximize() : current.maximize()
});
document.getElementById('close-button').addEventListener('click', (e) => {
    remote.app.quit();
});