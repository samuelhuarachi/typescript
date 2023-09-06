import { CoapService } from "../../AplicationBusiness/Services/CoapService";
import coap from "coap";

export default class CoapNode implements CoapService {
    async request(url: string): Promise<any> {
        let promise = new Promise(function(resolve, reject) {
            const req = coap.request(url);
            let data = "";
            req.on("response", (res) => {
                res.on("data", (chunk) => {
                    data += chunk.toString();
                });
                res.on("end", () => {
                    resolve(data);
                });
            });
            req.end();
        });

        const result = await promise;

        return result;
    }
}
