document.querySelector('#file').addEventListener('click', async () => {
    console.log('open file');
    const { ipcRenderer } = require('electron')
    console.log(ipcRenderer);
    const response = await ipcRenderer.invoke('openFileEvent')
    console.log(response)
})

document.querySelector('#folder').addEventListener('click', async () => {
    console.log('open folder');
    const { ipcRenderer } = require('electron')
    console.log(ipcRenderer);
    const response = await ipcRenderer.invoke('openFolderEvent')
    console.log(response);
})