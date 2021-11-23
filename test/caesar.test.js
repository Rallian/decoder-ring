const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar

describe("caesar", () => {
    it("should return the string input with each letter being shifted by 10", ()=>{
        const expected = "dbkfsc"
        const actual = caesar('travis', 10)
        expect(actual).to.equal(expected)
    })
    it("should decode the string if encode is false", ()=>{
        const expected = "decode"
        const actual = caesar("yzxjyz", -5, false)
        expect(actual).to.equal(expected)
    })
    it("should return false if there is no input",() =>{
        const expected = false;
        const actual = caesar("", 3)
        expect(actual).to.equal(expected)
    })
    it("should return false if shift is equal to 0", ()=>{
        const expected = false;
        const actual = caesar("travis", 0)
        expect(actual).to.equal(expected)
    })
    it("should return false if shift is less than -25", ()=>{
        const expected = false;
        const actual = caesar("travis", -50)
        expect(actual).to.equal(expected)
    })
    it("should return false if there is no shift variable", ()=>{
        const expected = false;
        const actual = caesar("travis")
        expect(actual).to.equal(expected)
    })
    it("should leave spaces and symbols where they belong in the string, and ignore capital letters", ()=>{
        const expected = "decode this!"
        const actual = caesar("Efdpef uijt!", -1)
        expect(actual).to.equal(expected)
    })
    it("should return false if input is not a string", ()=>{
        const expected = false;
        const actual = caesar(5, 22);
        expect(actual).to.equal(expected);
    })
})
