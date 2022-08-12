const LinkedList = require('./javascript');

describe('prepend() tests', () => {

    let linkedList = new LinkedList();
    let linkedList2 = new LinkedList();

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

describe('append() tests', () => {

    let linkedList = new LinkedList();
    linkedList.append(1);

    it('It should change size of the list', () => {
        expect(linkedList.size).toBe(1);
    })

    it('It should set head and tail with same node if list was empty', () => {
        expect(linkedList.head === linkedList.tail).toBe(true);
    });

    it('Head should be the same no matter of values added', () => {
        linkedList.append(12);
        linkedList.append(15);
        expect(linkedList.head.value).toBe(1);
    });

    it("It should update tail's node to the last one when appending elements", () => {
        expect(linkedList.tail.value).toBe(15);
    });
});

describe('at() tests', () => {
    let linkedList = new LinkedList();
    linkedList.append(12);  // 0
    linkedList.append(15);  // 1
    linkedList.append(14);  // 2
    linkedList.append(23);  // 3
    linkedList.append(33);  // 4
    linkedList.append(76);  // 5

    it("It should return the node of the index 2 in the list", () => {
        let node = linkedList.at(2);
        expect(node.value).toBe(14);
    });

    it("It should return the node of the index 5 in the list", () => {
        let node = linkedList.at(5);
        expect(node.value).toBe(76);
    });

    it("It should return the node of the index 0 in the list", () => {
        let node = linkedList.at(0);
        expect(node.value).toBe(12);
    });
});

describe('pop() tests', () => {
    let linkedList = new LinkedList();
    linkedList.append(12);  // 0
    linkedList.append(15);  // 1
    linkedList.append(14);  // 2
    linkedList.append(23);  // 3
    linkedList.append(33);  // 4
    linkedList.append(76);  // 5

    it('It should remove node with the value 76', () => {
        linkedList.pop();
        expect(linkedList.tail.value).toBe(33);
    });


    it('It should remove node with the value 33', () => {
        linkedList.pop();
        expect(linkedList.tail.value).toBe(23);
    });

});


