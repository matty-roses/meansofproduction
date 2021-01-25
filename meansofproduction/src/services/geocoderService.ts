import {Location} from "../valueItems/location";

export interface IGeocoderService{
    getLocation(searchString: string): Location
}