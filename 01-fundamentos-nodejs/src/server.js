import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if( method === 'GET' && url === '/users') {
        //Early return: encerrar a execução da função antes do final, se as condições forem atendidas. 
        return res.setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(users));
    } 

    if( method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Felipe',
            email: 'felipeteste@teste.com',
        })

        return res.end('Create User')
    }

    return res.end('Hello World')
    });

server.listen(3333);