const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

// Set ENV
process.env.NODE_ENV = 'production';

let mainWindow;

// Listen for App to be ready
app.on('ready', function() {
	// Create a new Window
	mainWindow = new BrowserWindow({
		width: 910,
		height: 813,
		resizable: false,
		opacity: 0.9,
		frame: false
	});
	// Load mainWindow into Window
	mainWindow.loadURL(
		url.format({
			pathname: path.join(__dirname, 'mainWindow.html'),
			protocol: 'file:',
			slashes: true
		})
	);
	// Quit Program when Closed
	mainWindow.on('closed', function() {
		mainWindow = null;
		app.quit();
	});

	// Build Menu from Template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// Insert Menu
	Menu.setApplicationMenu(mainMenu);
});

// Create Menu Template
const mainMenuTemplate = [
	{
		label: 'File',
		submenu: [
			{
				label: 'Patches'
			},
			{
				label: 'Exit',
				accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
				click() {
					app.quit();
				}
			}
		]
	}
];

// If iOS - Add an empty object to the Menu
if (process.platform == 'darwin') {
	mainMenuTemplate.unshift({});
}

// Add DevTools if not in Production
if (process.env.NODE_ENV !== 'production') {
	mainMenuTemplate.push({
		label: 'DevTools',
		submenu: [
			{
				label: 'Toggle DevTools',
				accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
				click(item, focusedWindow) {
					focusedWindow.toggleDevTools();
				}
			},
			{
				role: 'reload'
			}
		]
	});
}
