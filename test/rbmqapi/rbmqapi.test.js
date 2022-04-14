const { newUser, setVhostPermission, setTopicPermission } = require("../../app/rbmqapi/rbmqapi");

describe("RabbitMQ API", () => {
    it("Creates new user on system", async () => {
        const res = await newUser("test", "test");
    })

    it("Sets user permission on rabbitmq", async () => {
        const res = await setVhostPermission("", "test", {
            configure: ".*",
            write: ".*",
            read: ".*",
        })
    });

    it("Sets user topic permission on rabbitmq", async () => {
        const res = await setTopicPermission("", "test", {
            exchange: "amq.topic",
            write: "^test.*",
            read: "^test.*",
        })
    })
});
