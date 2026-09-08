import type { Company } from "./Company";
import type { Profile } from "./Profile";

export type Demandes = {
    id: string | number,
    picture: string,
    status: string,
    registered: string,
    child: Profile,
    parent: Profile,
    company: Company,   
}