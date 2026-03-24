import sum from "./sum";


describe("example tests", () => {
    it("should add 1 + 2 to equal 3", () => {
        expect(sum(1,2)).toBe(3)
    }) 
    it("object assignment", () => {
        const obj = {}
        expect(obj).toEqual({})
    })
})


describe("truthy or falsy", () => {
    it("null", () => {
        const n = null
        expect(n).toBeNull()
    })
})


describe("strings", () => {
    it("there is no I in teams", () => {
        expect("team").not.toMatch(/I/)
    })
})


describe("arrays", () => {
    const shoppingLists = ["diapers" , "kleenex", "trash bags", "paper towels", "milk"]

    expect(shoppingLists).toContain("milk")
})

function compileAndroidCode() {
    throw new Error("You are using the wrong JDK")
}
describe("exceptions", () => {
    it("compiling android goes as expected", () => {
        expect(() => compileAndroidCode()).toThrow(
            "You are using the wrong JDK"
        )
    })
})