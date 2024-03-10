const http = require('node:http');


proxy.listen(1337, '127.0.0.1', () => {
    const options = {
        port: 1337,
        host: '127.0.0.1',
        method: 'CONNECT',
        path: 'www.google.com:80',
    };

    const req = http.request(options);
    req.end();

    req.on('connect', (res, socket, head) => {
      console.log('connected via proxy');

      socket.write('GET / HTTP/1.1\r\n' + 
        'Host: www/google.com:80\r\n' +
        'Connection: close\r\n' +
        '\r\n');
        socket.on('end', () => {
            proxy.close();
        });
    });
  }); 