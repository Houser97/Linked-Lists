const LinkedList = require('./javascript');

let linkedList = new LinkedList();

describe('Tests for methods', () => {
    describe('prepend() tests', () => {

        linkedList.prepend(5);
        linkedList.prepend(15);
        linkedList.prepend(50)
        linkedList.prepend(100);

        it("It should change list's size", () => {
            expect(linkedList.size).toBe(4);
        });

        it("It should not change the head's tail if several nodes are added", () => {
            expect(linkedList.tail.value).toBe(5);
        });

        it("It should add elements at the beginning; thus the head's value must be equal to the value prepended", () => {
            linkedList.prepend(89);
            expect(linkedList.head.value).toBe(89);
        });

        it("It should change the head's value if several nodes are added", () => {
            linkedList.prepend(5);
            linkedList.prepend(15);
            linkedList.prepend(50);
            expect(linkedList.head.value).toBe(50);
        });
    });
});