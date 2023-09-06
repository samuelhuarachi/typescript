import { EndpointRepository } from "../../EnterpriseBusiness/Repository/EndpointRepository";
import Endpoint from "../../EnterpriseBusiness/Entity/Endpoint/Endpoint";

class InteractWithEndpoint {
    async execute(input: Input, endpointRepository: EndpointRepository): Promise<Endpoint> {
        const ep = await endpointRepository.getById(input.id);
        return ep;
    }
}

type Input = {
    id: string;
};

module.exports = InteractWithEndpoint;
