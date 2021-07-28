import { Id } from "./id";
import { Location } from "./location";
import { Name } from "./name";
import { Picture } from "./picture";
import { Registered } from "./registered";

export interface User{
    id?: Id;
    name: Name;
    location: Location;
    nat: string;
    registered: Registered;
    email: string;
    phone: string;
    picture?: Picture;
}