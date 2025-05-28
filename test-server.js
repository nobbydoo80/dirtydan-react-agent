import http from 'http';
import handler from './api/react.js';

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/react') {
    // Mock Vercel's req/res objects
    const mockReq = { url: req.url, method: req.method };
    const mockRes = {
      status: (code) => ({
        json: (data) => {
          res.writeHead(code, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(data, null, 2));
        }
      })
    };
    
    await handler(mockReq, mockRes);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>ReAct Agent</h1><p><a href="/api/react">Test API</a></p>');
  }
});

server.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
  console.log('📡 API endpoint: http://localhost:3000/api/react');
});