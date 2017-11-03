const electron = require('electron')
const path = require('path');
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
    icon: path.join(__dirname, 'src/assets/icons/png/64x64.png')
  });

  mainWindow.loadURL(`file://${__dirname}/src/index.html`)

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);
