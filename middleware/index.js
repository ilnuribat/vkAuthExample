const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

module.exports = (server, express) => {
    server.use(express.static('public'))
    server.use(bodyParser.urlencoded({ extended: true }));
    server.set('json spaces', 4);
    server.set('views', './views');
    server.set('view engine', 'pug');
    server.use((req, res, next) => {
        console.log(req.method, req.url);
        next();
    });

    const httpPort = process.env.VK_APP_PORT ? process.env.VK_APP_PORT : 80;
    server.listen(httpPort, () => {
        console.log(`listening ${httpPort} port`);
    });
    try {
        const cert = fs.readFileSync('./middleware/cert.pem');
        const key = fs.readFileSync('./middleware/privkey.pem');

        const httpsServer = https.createServer({cert, key}, server);
        const httpsPort = 443;
        httpsServer.listen(httpsPort, () => {
            console.log(`listening https on ${httpsPort} post`);
        });
    }
    catch(err) {
        console.log('could not create https server');
    }
}