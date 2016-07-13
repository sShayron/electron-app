'use strict';

const electron = require('electron');
const app = electron.app;﻿

app.on('ready', function(){
  var mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`);

})
