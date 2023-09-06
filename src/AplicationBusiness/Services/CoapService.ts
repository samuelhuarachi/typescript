interface CoapService {
    request(url: string): Promise<any>;
}

export { CoapService };
