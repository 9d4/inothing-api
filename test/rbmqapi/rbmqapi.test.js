const { newUser } = require("../../app/rbmqapi/rbmqapi");

describe("RabbitMQ API", () => {
    it("Creates new user on system", async () => {
        const res = await newUser("test", "test");
        console.log(res)
    })
});
