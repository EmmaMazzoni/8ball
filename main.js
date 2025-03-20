const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 336,
    height: 429,
    webPreferences:{
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // Prevents direct use of `window` in Electron
      enableRemoteModule: false,
      nodeIntegration: false, // Security best practice
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})