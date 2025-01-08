import {UserLatvia} from "./UserLatvia";
import {UserEstonia} from "./UserEstonia";

export class KYC {

    static activateMobileIdForEstonia(user: UserEstonia): void {
        if (user.age >= 16) {
            user.mobileIdAuthorization = true
        } else {
            throw new Error("User is too young")
        }
    }

    static activateEParakstsForLatvia(user: UserLatvia): void {
        if (user.age >= 18) {
            user.activateEParakstsForLatvia = true

        } else {
            throw new Error("User is too young")
        }
    }
}