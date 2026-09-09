import type { Company } from "./Company";
import type { Profile } from "./Profile";

export type Demande = {
    id: string | number,
    picture: string,
    status: string,
    registered: string,
    child: Profile,
    firstParent: Profile,
    secondParent: Profile,
    company: Company,   
}