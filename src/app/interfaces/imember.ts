import { Data } from "@angular/router";

export interface IMember {
    memberNr: number,
    membership: string,
    startData: Data,
    expirationData: Data,
    payment: string,

}
