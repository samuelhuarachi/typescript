import coap from "coap";

const req = coap.request("coap://[aaaa:7558:9102:123:212:4b00:21bb:8f05]:5683/ep/rf/txpw");
// const req = coap.request("coap://[aaaa:7558:9102:123:212:4b00:21bb:8f05]:5683/ep/oad/addr");
// const req = coap.request("coap://[aaaa:7558:9102:123:212:4b00:21bb:8f05]:5683/ep/fw/name");

let data = "";
req.on("response", (res) => {
    res.on("data", (chunk) => {
        data += chunk.toString();
    });

    res.on("end", () => {
        console.log(`minha dataaaa: ${data}`);
    });
});

req.end();
