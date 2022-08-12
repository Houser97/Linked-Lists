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
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
                if(i === index - 1){
                    console.log(current);
                    return;
                }
            }
        }
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
test.prepend(5);
test.prepend(15);
test.prepend(100);
test.prepend(102);
test.printList();
test.at(0);