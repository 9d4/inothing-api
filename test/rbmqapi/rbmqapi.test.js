const { newUser, setUserPermission } = require("../../app/rbmqapi/rbmqapi");

describe("RabbitMQ API", () => {
    it("Creates new user on system", async () => {
        const res = await newUser("test", "test");
        console.log(res)
    })

    it("Sets user permission on rabbitmq", async () => {
        const res = await setUserPermission("", "test", {
            configure: ".*",
            write: ".*",
            read: ".*",
        })
        console.log(res)
    });
});
