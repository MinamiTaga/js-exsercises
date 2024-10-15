import { createServer } from "net";

const server = createServer();

server.on("connection", (socket) => {
  socket.on("data", (data) => {
    const request = data.toString();
    const method = request.split(" ")[0];
    const path = request.split(" ")[1];

    if (method === "GET" && path === "/") {
      const body = `
      <!doctype html>
      <html lang="ja">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Greeting Form</title>
        </head>
        <body>
          <form action="/greeting" method="POST">
            <label for="greeting">Name:</label>
            <input type="text" id="name" name="name" />
            <input type="text" id="greeting" name="greeting" />
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>`;
      const response = `HTTP/1.1 200 OK\r\nContent-Type: text/html\r\nStatus: 200"\r\nContent-Length: ${Buffer.byteLength(
        body
      )}\r\n\r\n${body}`;
      socket.write(response);
    } else if (method === "POST" && path === "/greeting") {
      const requestBody = request.split("\r\n\r\n")[1];
      const params = new URLSearchParams(requestBody);
      const name = params.get("name");
      const greeting = params.get("greeting");
      const body = `
      <!doctype html>
        <body>
        <div>name: ${name}</div>
        <div>greeting: ${greeting}</div>
        </body>
      </html>`;
      const response = `HTTP/1.1 200 OK\r\nContent-Type: text/html\r\nStatus: 200"\r\nContent-Length: ${Buffer.byteLength(
        body
      )}\r\n\r\n${body}`;
      socket.write(response);
    } else {
      const body = `
      <!doctype html>
        <body>
        <div>404 NOT FOUND</div>
        </body>
      </html>`;
      const response = `HTTP/1.1 404 Not Found\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n${body}`;
      socket.write(response);
    }

    socket.end();
  });
});
server.listen(8000, () => {
  console.log("Listening on port 8000");
});
