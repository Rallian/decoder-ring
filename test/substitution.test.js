const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("substitution", ()=>{
    it("should return false if there is no input", ()=>{
        const expected = false;
        const actual = substitution();
        expect(actual).to.equal(expected);
    })
    it("should return false if alphabet has more than 26 characters", ()=>{
        const alphabet = "abcdefghijklmnopqrstuvwxyz!@"
        const expected = false;
        const actual = substitution("message", alphabet);
        expect(actual).to.equal(expected);
        
    })
    it("should encode a message if alphabet contains a number", ()=>{
        const alphabet = "123abcdefghijklmnopqrstuvw"
        const expected = "jbpp1db"
        const actual = substitution("message", alphabet);
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters",()=>{
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
        const expected = "my message"
        const actual = substitution("YP YSII.RS", alphabet, false)
        expect(actual).to.equal(expected);
    })
    it("should return false if input is not a string", ()=>{
        const message = 1234
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const expected = false;
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    })
})