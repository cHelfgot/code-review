const { BrowserWindow, app, ipcMain, dialog } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 900,
        height: 800,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    })

    win.loadFile('./app/index.html')
}

ipcMain.handle('openFileEvent', ()=>{
    console.log('open File event')
    const response = dialog.showOpenDialogSync({
        properties:['openFile', 'multiSelections'], 
        filters:[{
            name:'js files', extensions:['js']
        }],
        title:'select javascript file'
    })
    return response
})


ipcMain.handle('openFolderEvent', ()=>{
    console.log('open Folder event')
    const response = dialog.showOpenDialogSync({
        properties:['openDirectory'], 
        filters:[{
            name:'folders', extensions:['']
        }],
        title:'select a project'
    })
    return response
})

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})