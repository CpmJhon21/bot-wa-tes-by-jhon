const express = require('express');
const { createServer } = require('http');

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;
const packageInfo = require('../package.json');

// Warna terminal (ANSI escape code)
const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const MAGENTA = '\x1b[35m';
const CYAN = '\x1b[36m';
const WHITE = '\x1b[37m';

// Array ASCII dan Info Text per baris
const asciiLines = [
  `${RED}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${RESET}`,
  `${RED}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣟⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${RESET}`,
  `${YELLOW}⢀⣀⠀⠀⠀⠀⠀⠀⣤⣤⣤⠀⠀⠀⠀⢿⣿⣷⠈⣱⣾⣿⠇⠀⠀⠀⢠⣤⣤⡄⠀⠀⠀⠀⠀⠀⢀⡀⠀${RESET}`,
  `${YELLOW}⠈⠙⢯⣍⠲⠤⣤⡤⠍⣻⠙⠦⢄⣀⣀⣀⡠⣾⠤⢟⡦⢄⣀⣀⣀⠤⠞⢻⡟⠷⣶⠦⠴⢚⣩⠝⠋⠀⠀${RESET}`,
  `${GREEN}⠀⠀⠀⠈⠳⣤⣿⣶⣶⣯⣤⣄⣀⣀⣀⣀⣠⣟⡶⣖⣃⣀⣀⣀⣀⣀⣀⣑⣲⣾⣃⡶⠋⠁⠀⠀⠀⠀${RESET}`,
  `${GREEN}⠀⠀⠀⢠⣤⣬⣭⣍⣉⣍⣉⣉⣉⣉⣉⣉⣙⣿⣿⣿⣟⡋⢉⣉⠉⠉⠉⠉⠉⣉⣉⣉⠡⠤⠤⠤⢤⣤⡄${RESET}`,
  `${BLUE}⠀⠀⠀⠀⠈⠳⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠞⠋⠀${RESET}`,
  `${BLUE}⠀⠀⠀⠀⠀⠀⠈⠛⢦⡀⠀⠀⠀⢸⠉⣿⠀⢸⣿⠀⠀⠀⠀⣿⠒⠒⠒⠒⣶⠀⠀⠀⢀⡴⠟⠁⠀⠀⠀${RESET}`,
  `${MAGENTA}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⣀⣀⣼⠀⣿⠀⢸⣿⠀⠀⠀⠀⣿⠀⠀⠀⠀⣿⠀⠀⢸⡏⠀⠀⠀⠀⠀⠀${RESET}`,
  `${MAGENTA}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⢸⣿⠀⠀⠀⠀⠿⠒⠒⠒⠒⠛⠀⠀⠨⡇⠀⠀⠀⠀⠀⠀${RESET}`,
  `${CYAN}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⣿⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀${RESET}`,
  `${CYAN}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠘⠀⣿⠀⢸⣿⠀⠀⠀⠀⡏⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀${RESET}`,
  `${WHITE}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⣿⠀⢸⣿⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${RESET}`,
  `${WHITE}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢰⠞⠁⣠⡾⣿⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${RESET}`,
  `${WHITE}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⣠⡾⠋⠀⣿⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${RESET}`,
  `${WHITE}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⣠⡾⠋⠀⠀⠀⣿⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${RESET}`,
  `${WHITE}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⡾⠋⠀⠀⠀⠀⠀⣿⢀⣠⠔⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${RESET}`,
  `${WHITE}⠀⠀⠀⣀⣀⣀⣀⢀⡀⢀⡋⣀⠀⣀⡀⣀⣀⠀⢛⠉⣀⣀⢀⡀⣀⣀⣀⢀⣀⣀⣀⢀⡀⢀⡀⣀⠀⠀⠀${RESET}`,
];

const infoLines = [
  '',
  `${RED} ┏┓┏┓┳┳┓ ┏┳┓┏┏┓┳┓ ${RESET}`,
  `${YELLOW} ┃ ┃┃┃┃┃  ┃┣┫┃┃┃┃  ${RESET}`,
  `${BLUE} ┗┛┣┛┛ ┗━┗┛┛┗┗┛┛┗ ${WHITE}${RESET}`,
  `${WHITE}-------------------------------${RESET}`,
  `${GREEN} ┏┓┳┓┏┓┳┓┳┳┏┓┏┳┓┳┏┓┳┓   ${RESET}`,
  `${BLUE} ┃┃┣┫┃┃┃┃┃┃┃  ┃ ┃┃┃┃┃    ${RESET}`,
  `${MAGENTA} ┣┛┛┗┗┛┻┛┗┛┗┛ ┻ ┻┗┛┛┗    ${RESET}`,
];

// Padding antar ASCII dan INFO
const PAD = '   ';

// Gabungkan dua blok sejajar
const maxLines = Math.max(asciiLines.length, infoLines.length);
for (let i = 0; i < maxLines; i++) {
  const asciiLine = asciiLines[i] || '';
  const infoLine = infoLines[i] || '';
  console.log(asciiLine + PAD + infoLine);
}


app.all('/', (req, res) => {
	if (process.send) {
		process.send('uptime');
		process.once('message', (uptime) => {
			res.json({
				bot_name: packageInfo.name,
				version: packageInfo.version,
				author: packageInfo.author,
				description: packageInfo.description,
				uptime: `${Math.floor(uptime)} seconds`
			});
		});
	} else res.json({ error: 'Process not running with IPC' });
});

app.all('/process', (req, res) => {
	const { send } = req.query;
	if (!send) return res.status(400).json({ error: 'Missing send query' });
	if (process.send) {
		process.send(send)
		res.json({ status: 'Send', data: send });
	} else res.json({ error: 'Process not running with IPC' });
});

app.all('/chat', (req, res) => {
	const { message, to } = req.query;
	if (!message || !to) return res.status(400).json({ error: 'Missing message or to query' });
	res.json({ status: 200, mess: 'does not start' })
});

module.exports = { app, server, PORT };