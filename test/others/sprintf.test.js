const { sprintf } = require("sprintf-js")

const text = "Hello %s"

it("Should return 'Hello World'", () => {
    const res = sprintf(text, "World");
    expect(res).toEqual("Hello World");
})