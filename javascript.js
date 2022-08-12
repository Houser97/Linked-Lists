class Node {
    constructor(value, next= null){
        this.value = value;
        this.next = next;
    }
};

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
        this.tail = null;
    };

    prepend(value){
        let node = new Node(value, this.head);
        if(!this.head){
            this.tail = node;
        }
        this.head = node;
        this.size++;
    
        let current = this.head;
        if(this.size > 1){
            while(current.next){
                current = current.next;
            };
            this.tail = current;
        }
        
    };

    append(value){
        let node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            };
            current.next = node;
            this.tail = current.next;
        }
        this.size++;
    };

    at(index){
        if(typeof index !== 'number'){
            throw new Error('Insert a number.');
        }; 
        if(index > this.size-1){
            throw new Error('Number is bigger than the size of the list.');
        };
        let current = this.head;
        if(index === 0){
            console.log(current);
            return current;
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
                if(i === index - 1){
                    console.log(current);
                    return current;
                }
            }
        }
    }

    pop(){
        if(!this.head){
            throw new Error('The list is empty');
        };
        let current = this.head;
        for(let i = 0; i < this.size; i++){
            if(i === this.size-2){
                current.next = null;
                this.tail = current;
                this.size--;
                return;
            };
            current = current.next;
        }
    }

    contains(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return true;
            };
            current = current.next
        };
        return false;
    };

    find(value){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.value === value){
                return index;
            };
            index++;
            current = current.next;
        };
        return null;
    }

    toString(){
        let result = '';
        if(!this.head){
            return 'This list is empty.';
        }
        let current = this.head;
        result = `(${current.value})`;
        while(current.next){
            result += ` -> (${current.next.value})`;
            current = current.next; //Currrent.next se evalúa en este momento,
            // pero no se ha asignado, por lo que ahora Current se le asigna para que se evalúe el next
            // del actual current.next en el siguiente ciclo.
        };
        result += ` -> null`;
        return result;
    };

    insertAt(value, index){
        let node = new Node(value);
        if(index > this.size - 1){
            return;
        };
        if(index === 0){
            this.head = new Node(value, this.head);
            this.size++;
            return;
        } 
        if(this.size === 0){
            this.head = new Node(value);
            this.size++;
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        while(count < index){
            previous = current;
            current = current.next;
            count ++;
        };
        node.next = current;
        previous.next = node;
        if(index === this.size){
            this.tail = node;
            node.next = null;
        }
        this.size++;
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    };
}

const test = new LinkedList();
// test.prepend(5);
// test.prepend(15);
// test.prepend(100);
// test.prepend(105);
// test.append(200);
// test.append(1000);
test.append(12);  // 0
test.append(15);  // 1
test.insertAt(31, 1);

// test.pop();
// console.log(test.contains(100));
// console.log(test.find(200) + ' index found');
// // console.log(test.tail);
// // console.log(test.size);
console.log(test.toString());
console.log(test.tail);


module.exports = LinkedList;