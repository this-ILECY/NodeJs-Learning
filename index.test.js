const http = require('http');
const server = require('./server');

describe('Server', () => {
  it('should respond with "Hello there!" when hitting the root endpoint', (done) => {
    http.get('http://localhost:3000', (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Hello there!');
        done();
      });
    });
  });
});
