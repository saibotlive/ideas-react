const rewire = require("rewire")
const index = rewire("./index")
const getIdeas = index.__get__("getIdeas")
// @ponicode
describe("getIdeas", () => {
    test("0", () => {
        let callFunction = () => {
            getIdeas({ ideasReducer: { ideas: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getIdeas({ ideasReducer: { ideas: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getIdeas({ ideasReducer: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.getSortBy", () => {
    test("0", () => {
        let callFunction = () => {
            index.getSortBy({ ideasReducer: { sortBy: [false, true, true] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.getSortBy({ ideasReducer: { sortBy: [true, false, false] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.getSortBy({ ideasReducer: { sortBy: [false, false, true] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.getSortBy({ ideasReducer: { sortBy: [true, true, true] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.getSortBy({ ideasReducer: { sortBy: [true, false, true] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.getSortBy({ ideasReducer: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
