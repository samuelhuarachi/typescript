const { default: EndpointRepositoryMemory } = require("../src/Infra/Repository/EndpointRepository");
const InteractWithEndpoint = require("../src/AplicationBusiness/UserCase/InteractWithEndpoint");

describe("InteractWithEndpoint", () => {
    test("execute", async () => {
        const interactWithEndpoint = new InteractWithEndpoint();
        const endpointRepositoryMemory = new EndpointRepositoryMemory();
        const ep = await interactWithEndpoint.execute({ id: "1aa2" }, endpointRepositoryMemory);

        expect(ep.name).toBe("Endpoint 1");
    });
});
