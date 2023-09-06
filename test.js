const coap = require("coap");
const bl = require("bl");

let req = coap.request("coap://[aaaa:7558:9102:123:212:4b00:21bb:8f05]:5683/ep/rf/txpw");

const promise = new Promise((resolve, reject) => {
    console.log("iniando promise ...");
    req.on("response", function(resp) {
        console.log("resopnse ok ");
        resp.pipe(
            bl(function(err, data) {
                console.log("here ...");
                console.log(data);
                resolve(data.toString());
            }),
        );
    });
});

(async () => {
    try {
        const resolve = await promise;
        console.log(">>>>");
        console.log(resolve);
    } catch (e) {
        console.log(e.message);
    }
})();
