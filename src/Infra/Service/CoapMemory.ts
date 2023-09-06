import { CoapService } from "../../AplicationBusiness/Services/CoapService";

class CoapMemory implements CoapService {
    async request(url: string): Promise<string> {
        return "00822351";
    }
}
