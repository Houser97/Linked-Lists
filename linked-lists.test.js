const LinkedList = require('./javascript');

let linkedList = new LinkedList();

describe('Tests for methods', () => {
    describe('prepend() tests', () => {
        it("prepend() should add elements at the beginning; thus the head's value must be equal to the value prepended", () => {
            linkedList.append(5)
            expect(linkedList.head.value).toBe(5);
        })
    })
})