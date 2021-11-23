const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius

describe("polybius", ()=>{
    it("should return false if there is no input", ()=>{
        const expected = false;
        const actual = polybius();
        expect(actual).to.equal(expected);
    })
    it("should return false if the length of all numbers is odd", ()=>{
        const expected = false;
        const actual = polybius("12345", false);
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", ()=>{
        const expected = "3251131343";
        const actual = polybius("HELLO");
        expect(actual).to.equal(expected);
    })
    it("should return false if input contains numbers outside of the polybius key", ()=>{
        const expected = false;
        const actual = polybius("043467");
        expect(actual).to.equal(expected);
    })
    it("should return false if input is not a string",()=>{
        const expected = false;
        const actual = polybius(3251131343);
        expect(actual).to.equal(expected);
    })
})