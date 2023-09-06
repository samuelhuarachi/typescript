import CoapNode from "../src/Infra/Service/CoapNode";
import ImportEndpoints from "../src/AplicationBusiness/UserCase/ImportEndpoints";

jest.setTimeout(30000);
describe("ImportingEpDatas", () => {
    test("execute", async () => {
        // const req = coap.request("coap://[aaaa:7558:9102:123:212:4b00:21bb:8f05]:5683/ep/rf/txpw");
        // const req = coap.request("coap://[aaaa:7558:9102:123:212:4b00:21bb:8f05]:5683/ep/oad/addr");
        // const req = coap.request("coap://[aaaa:7558:9102:123:212:4b00:21bb:8f05]:5683/ep/fw/name");

        const coapNode = new CoapNode();
        const importEndpoints = new ImportEndpoints();
        const coapReding = importEndpoints.execute(coapNode);

        // const resolve = await coapReding;
        // console.log(`resolve ${resolve}`);

        // await expect(importEndpoints.execute(coapNode)).resolves.toBe("Paul");

        await expect(coapReding).resolves.toBe("14");
    });
});
