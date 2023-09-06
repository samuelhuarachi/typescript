import { CoapService } from "../Services/CoapService";
import coap from "coap";

export default class ImportEndpoints {
    async execute(coapService: CoapService): Promise<any> {
        const url = "coap://[aaaa:7558:9102:123:212:4b00:21bb:8f05]:5683/ep/rf/txpw";
        const coapReading = await coapService.request(url);
        return coapReading;
    }
}
