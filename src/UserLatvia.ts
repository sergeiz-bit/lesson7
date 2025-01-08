import {UserBase} from "./UserBase";

export class UserLatvia extends UserBase {

    activateEParakstsForLatvia: undefined | boolean

    super(name: string, surname: string, age: number) {
        this.activateEParakstsForLatvia = undefined
    }
}