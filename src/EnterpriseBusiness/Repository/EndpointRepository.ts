import Endpoint from "../Entity/Endpoint/Endpoint";

interface EndpointRepository {
    getById(id: string): Promise<Endpoint>;
}

export { EndpointRepository };
