const LinkedList = require('./javascript');

describe('prepend() tests. Method to add elements at the beginning of the list.', () => {

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

describe('append() tests. Methot to insert elemenents at the end of the list.', () => {

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

describe('at() tests. Method to return node at the specified index in the list', () => {
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

describe('pop() tests. Method to remove last element in the list', () => {
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

describe('contains() tests. Method to check if the specified value is in the list.', () => {
    let linkedList = new LinkedList();
    linkedList.append(12);  // 0
    linkedList.append(15);  // 1
    linkedList.append(14);  // 2
    linkedList.append(23);  // 3
    linkedList.append(33);  // 4
    linkedList.append(76);  // 5
 
    it('It should return true by inserting the number 23', () => {
        expect(linkedList.contains(23)).toBe(true);
    });

    it('It should return true by inserting the last number in the list', () => {
        expect(linkedList.contains(76)).toBe(true);
    });

    it('It should return true by inserting the first number in the list', () => {
        expect(linkedList.contains(12)).toBe(true);
    });

    it('It should return true by inserting the second number in the list', () => {
        expect(linkedList.contains(12)).toBe(true);
    });

    it('It should return true by inserting the number 1000', () => {
        expect(linkedList.contains(1000)).toBe(false);
    });
});

describe('find() tests. Method to return index of element in the list or null if number not in the list',() => {
    let linkedList = new LinkedList();
    linkedList.append(12);  // 0
    linkedList.append(15);  // 1
    linkedList.append(14);  // 2
    linkedList.append(23);  // 3
    linkedList.append(33);  // 4
    linkedList.append(76);  // 5

    it('Should return 2 if 14 is found', () => {
        expect(linkedList.find(14)).toBe(2);
    });

    it('Should return 5 if 76 is found', () => {
        expect(linkedList.find(76)).toBe(5);
    });

    it('Should return 0 if 12 is found', () => {
        expect(linkedList.find(76)).toBe(5);
    });

    it('Should return null if no number is found', () => {
        expect(linkedList.find(1000)).toBe(null);
    });
});

describe('toString() tests. Method to return a list of the value in the list.', () => {
    let linkedList = new LinkedList();
  
    it('It should return that the list is empty if it has no values', () => {
        expect(linkedList.toString()).toBe('This list is empty.');
    })

    it('It should return the list of elements in the list', () => {
        linkedList.append(12);  // 0
        linkedList.append(15);  // 1
        linkedList.append(14);  // 2
        linkedList.append(23);  // 3

        expect(linkedList.toString()).toBe('(12) -> (15) -> (14) -> (23) -> null');
    })
})


