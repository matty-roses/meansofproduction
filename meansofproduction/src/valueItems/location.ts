export class Location {
    public readonly latitude: number
    public readonly longitude: number
    public readonly address: string | null

    constructor(latitude: number, longitude: number, address: string | null = null) {
        this.latitude = latitude
        this.longitude = longitude
        this.address = address
    }
}