import {
  app,
  BrowserWindow,
  Menu,
  shell
} from "electron";

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}

let mainWindow;
const winURL =
  process.env.NODE_ENV === "development" ?
  `http://localhost:9080` :
  `file://${__dirname}/index.html`;

function createWindow() {
  /**
   * Initial window options
   */
  const template = [{
    label: 'File',
    submenu: [{
        label: 'Info',
        submenu: [{
            label: 'Repository of this app.',
            click() {
              shell.openExternal('https://github.com/marcoinbig/Tic-Tac-Toe-with-Vue')
            }
          },
          {
            label: 'How you can make this app.',
            click() {
              shell.openExternal('https://www.youtube.com/watch?v=rqb4FgVNrrM')
            }
          }
        ]
      },
      {
        label: 'Quit',
        click() {
          app.quit()
        },
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q'
      }
    ]
  }]
  const mainMenu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(mainMenu)
  mainWindow = new BrowserWindow({
    height: 850,
    frame: false,
    useContentSize: true,
    resizable: false,
    webPreferences: {
      devTools: false
    },
    maximizable: true,
    width: 600
  });

  mainWindow.loadURL(winURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  
}


app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
    
  }
  
});
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */