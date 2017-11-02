const electron = require('electron')
const app = electron.app

const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    title: 'Google Maps',
    autoHideMenuBar: true,
    show: true,
    icon: `file://${__dirname}/index.html`
  });

  mainWindow.loadURL(`file://${__dirname}/src/index.html`)

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);
