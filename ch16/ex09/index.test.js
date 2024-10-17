import request from "supertest";
import app from "./index.js";

// テスト未完成
describe("ex09", () => {
  test.only("/test/mirror", async () => {
    // await request(app)
    //   .get("/test/mirror")
    //   .send("{name: Taro}")
    //   .expect("Content-Type", /json/)
    //   .expect(200)
    //   .then((response) => {
    //     expect(response.name).toEqual("Taro");
    //   })
    //   .end(function (err, res) {
    //     if (err) throw err;
    //   });
    const res = await request(app).get("/test/mirror");
    expect(res.status).toEqual(200);
  });

  test("/index.txt", async () => {
    const response = await request(app).get("/ex09/index.txt");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("text/plain");
    expect(response.body).toBe("test");
  });
});
