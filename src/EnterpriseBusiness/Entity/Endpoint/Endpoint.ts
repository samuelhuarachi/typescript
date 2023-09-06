export default class Endpoint {
    name: string;
    ipv6: string;
    mac: string;
    fw: string;
    hw: string;
    lat: Number;
    lng: Number;
    type: string;

    constructor(readonly id: string, name: string, ipv6: string, mac: string, fw: string, hw: string, lat: Number, lng: Number, type: string) {
        this.name = name;
        this.ipv6 = ipv6;
        this.mac = mac;
        this.ipv6 = ipv6;
        this.mac = mac;
        this.fw = fw;
        this.hw = hw;
        this.lat = lat;
        this.lng = lng;
        this.type = type;
    }
}
