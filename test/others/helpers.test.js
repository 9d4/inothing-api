const { getUrl, getUrlSync } = require("../../app/rbmqapi/rbmqapi");


describe("RMQ HELPER getUrl", () => {
    it("Returns full url to RMQ API of given path", async () => {
        const res = await getUrl("/overview");
        const want = "http://localhost:15672/api/overview";
        expect(res).toEqual(want);
    })

    it("Returns full url to RMQ API of given path", () => {
        const res = getUrlSync("overview");
        const want = "http://localhost:15672/api/overview";
        expect(res).toEqual(want);
    })

    it("Returns full url to RMQ API of given path", async () => {
        process.env.RABBITMQ_SERVER = "http://localhost:15672/";
        const res = await getUrl("/overview");
        const want = "http://localhost:15672/api/overview";
        expect(res).toEqual(want);
    })
})

