const { app } = require("../../app");
const request = require("supertest")(app);

describe("Home Endpoints", () => {
    it("GET /", async () => {
        const res = await request.get("/");
        expect(res.statusCode).toEqual(200);
    });
});

