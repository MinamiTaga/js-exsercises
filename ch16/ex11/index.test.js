import { createConnection } from "net";

describe("ex11", () => {
  test("GET /", (done) => {
    const client = createConnection({ port: 8000 }, () => {
      const request = "GET / HTTP/1.1\r\nHost: localhost\r\n";
      client.write(request);
    });

    client.on("data", (data) => {
      expect(data.toString()).toContain("Greeting Form");
      client.end();
      done();
    });
  });

  test("POST /greeting", (done) => {
    const client = createConnection({ port: 8000 }, () => {
      const body = "name=Taro&greeting=Hello";
      const request = `POST /greeting HTTP/1.1\r\nHost: localhost\r\nContent-Length: ${body.length}\r\n\r\n${body}`;
      client.write(request);
    });

    client.on("data", (data) => {
      expect(data.toString()).toContain("Taro");
      expect(data.toString()).toContain("Hello");
      client.end();
      done();
    });
  });

  test("404 NOT FOUND", (done) => {
    const client = createConnection({ port: 8000 }, () => {
      const request = "GET /id HTTP/1.1\r\nHost: localhost\r\n";

      client.write(request);
    });

    client.on("data", (data) => {
      expect(data.toString()).toContain("404 Not Found");
      client.end();
      done();
    });
  });
});
