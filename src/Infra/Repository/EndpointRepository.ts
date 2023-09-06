import Endpoint from "../../EnterpriseBusiness/Entity/Endpoint/Endpoint";
import { EndpointRepository } from "../../EnterpriseBusiness/Repository/EndpointRepository";

export default class EndpointRepositoryMemory implements EndpointRepository {
    endpoints: Endpoint[];

    constructor() {
        this.endpoints = [
            {
                id: "1aa2",
                name: "Endpoint 1",
                ipv6: "fe:4::20",
                mac: "002383AB8C",
                fw: "fw data",
                hw: "hw data",
                lat: 23,
                lng: 24,
                type: "smartmeter",
            },
        ];
    }

    async getById(id: string): Promise<Endpoint> {
        const ep = this.endpoints.find((ep) => ep.id == id);

        if (!ep) throw new Error("Endpoint not found");
        return ep;
    }
}
