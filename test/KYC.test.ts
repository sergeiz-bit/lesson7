import {UserEstonia} from "../src/UserEstonia";
import {UserLatvia} from "../src/UserLatvia";
import {KYC} from "../src/KYC";

describe("KYC tests", () => {

    let oldEstonianUser: UserEstonia
    let youngEstonianUser: UserEstonia
    let oldLatvianUser: UserLatvia
    let youngLatvianUser: UserLatvia

    beforeEach(() => {
        oldEstonianUser = new UserEstonia("Yakob", "Popovich", 24)
        youngEstonianUser = new UserEstonia("Yakob", "Popovich", 15)

        oldLatvianUser = new UserLatvia("Yakob", "Popovich", 24)
        youngLatvianUser = new UserLatvia("Yakob", "Popovich", 17)
    })
    test("ESTONIA: mobileIDAuthorization default value is undefined", () => {
        expect(oldEstonianUser.mobileIdAuthorization).toBeUndefined()
    })

    test("LATVIA: activateEParakstsForLatvia default value is undefined", () => {
        expect(oldLatvianUser.activateEParakstsForLatvia).toBeUndefined()
    })

    test("ESTONIA: mobileIDAuthorization works", () => {
        KYC.activateMobileIdForEstonia(oldEstonianUser)
        expect(oldEstonianUser.mobileIdAuthorization).not.toBeUndefined()
        expect(oldEstonianUser.mobileIdAuthorization).toBeTruthy()

    })

    test("LATVIA: activateEParakstsForLatvia works", () => {
        KYC.activateEParakstsForLatvia(oldLatvianUser)
        expect(oldLatvianUser.activateEParakstsForLatvia).not.toBeUndefined()
        expect(oldLatvianUser.activateEParakstsForLatvia).toBeTruthy()

    })

    test("ESTONIA: Throw user is to young error", () => {
        expect(() => KYC.activateMobileIdForEstonia(youngEstonianUser)).toThrow(`User is too young`)
    })

    test("LATVIA: Throw user is to young error", () => {
        expect(() => KYC.activateEParakstsForLatvia(youngLatvianUser)).toThrow(`User is too young`)
    })


})