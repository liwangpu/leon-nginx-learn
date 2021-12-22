const http = require('http');
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const appName = process.env.APPNAME || 'APP';

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(appName);
    res.end();
});

server.listen(port);
console.log(`serving on ${port}!`);