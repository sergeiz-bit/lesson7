import {UserBase} from "./UserBase";

export class UserEstonia extends UserBase {

    mobileIdAuthorization: undefined | boolean

    super(name: string, surname: string, age: number) {
        this.mobileIdAuthorization = undefined
    }
}