export class LinkedList {
    constructor(){
        this.headNode = null;
        this.tailNode = null;
    }
    append(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
            this.tailNode = this.headNode;
        }
        else {
            let aux = this.tailNode;
            this.tailNode = new Node(value);
            aux.nextNode = this.tailNode;
        }
        return "Appended correctly";
    }
  
    prepend(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
            this.tailNode = this.headNode;
        }
        else {
            let aux = this.headNode
            this.headNode = new Node(value, aux);
        }
        return "Prepended correctly";
    }

    size() {
        if (this.headNode === null) {
            return 0;
        }
        else {
          let length = 0;
          let nextOne = this.headNode
            while (nextOne !== null) {
                length++;
                nextOne = nextOne.nextNode;
            }
          return length;
        }
    }

    head() {
        return this.headNode ? this.headNode.value : undefined;
    }

    tail() {
        return this.tailNode ? this.tailNode.value : undefined;
    }

    at(index) {
        if (this.headNode !== null) {
            let current = this.headNode;
            for (let i = 0; i <= index; i++) {
                if (i === index) {
                    return current.value;
                }
                    current = current.nextNode;
            }
        } 
      return undefined;
    }

    pop() {
        if (this.headNode === null) {
            return undefined;
        }
        else {
            let aux = this.headNode;
            let newHead = this.headNode.nextNode;
            this.headNode = newHead;
            return aux.value;
        }
    }

    contains(value) {
        let flag = false;
        let nextOne = this.headNode;
        while (nextOne !== null) {
            if (nextOne.value === value) {
                flag = true;
            }
            nextOne = nextOne.nextNode;
        }
        return flag;
    }

    findIndex(value) {
        if (!this.contains(value) || this.headNode === null) {
            return -1
        }
        else {
            let current = this.headNode;
            let listSize = this.size();
            for (let i = 0; i <= listSize; i++) {
                if (value === current.value) {
                    return i;
                }
                else {
                    current = current.nextNode;
                }
            }
        }
    }

    toString() {
        let fullString = "";
        if (this.headNode === null) {
            return '';
        }
        else {
            let current = this.headNode;
            while (current !== null) {
                fullString += "( " + String(current.value) + " )";
                current = current.nextNode;
                fullString += " -> ";
            }
        }
      return fullString + "( null ) ";
    }
  
}

export class Node {
    constructor(value=null, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}