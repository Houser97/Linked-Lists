const LinkedList = require('./javascript');

let linkedList = new LinkedList();
let linkedList2 = new LinkedList();


describe('prepend() tests', () => {

    it("If list was empty, the head's values must be equal to tail's value", () => {
        linkedList2.prepend(5);
        expect(linkedList2.tail.value === linkedList2.head.value).toBe(true);
    });

    it("It should add elements at the beginning; thus the head's value must be equal to the value prepended", () => {
        linkedList2.prepend(89);
        expect(linkedList2.head.value).toBe(89);
    });

    it("The first element added should be the tail's value", () => {
        expect(linkedList2.tail.value).toBe(5);
    });

    it("It should change the head's value if several nodes are added", () => {
        linkedList2.prepend(5);
        linkedList2.prepend(15);
        linkedList2.prepend(50);
        expect(linkedList2.head.value).toBe(50);
    });

    it("It should change list's size", () => {
        linkedList.prepend(5);
        linkedList.prepend(15);
        linkedList.prepend(50)
        linkedList.prepend(100);
        expect(linkedList.size).toBe(4);
    });
});


