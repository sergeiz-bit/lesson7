import {UserEstonia} from "./UserEstonia";
import {UserLatvia} from "./UserLatvia";

export class Contracts {
    title: string
    signed: boolean

    constructor(title: string) {
        this.title = title
        this.signed = false
    }

    signEstonia(user: UserEstonia): void {
        if (user.mobileIdAuthorization) {
            this.signed = true
        }

    }

    signLatvia(user: UserLatvia): void {
        if (user.activateEParakstsForLatvia) {
            this.signed = true
        }
    }
}