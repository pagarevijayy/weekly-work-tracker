const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5173;
const ROOT = process.cwd();

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
};

function send(res, status, content, contentType = 'text/plain; charset=utf-8') {
    res.writeHead(status, { 'Content-Type': contentType });
    res.end(content);
}

function serveFile(res, filePath) {
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return send(res, 404, 'Not Found');
            }
            return send(res, 500, 'Internal Server Error');
        }
        send(res, 200, data, contentType);
    });
}

const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);

    // Special-case vercel insights (optional)
    if (urlPath.startsWith('/_vercel/insights/')) {
        return send(res, 204, '');
    }

    let filePath = path.join(ROOT, urlPath);

    // If directory or root, serve index.html
    try {
        const stat = fs.existsSync(filePath) && fs.statSync(filePath);
        if (!stat || stat.isDirectory()) {
            filePath = path.join(ROOT, 'index.html');
            return serveFile(res, filePath);
        }
    } catch (_) {
        // ignore
    }

    // If the path has no extension and isn't a real file, serve index.html
    if (!path.extname(filePath)) {
        const exists = fs.existsSync(filePath);
        if (!exists) {
            filePath = path.join(ROOT, 'index.html');
            return serveFile(res, filePath);
        }
    }

    return serveFile(res, filePath);
});

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Static server running at http://localhost:${PORT}`);
});


