class Node{
    constructer()
    {
        this.data = 0;
        this.link = null;
    }
}

class StackUsingLinkedList{
    constructer(){
        this.top = null;
    }

    //add Element in stack
    push(x)
    {
        let temp = new Node();

        //check the heap is full or not
        if(temp == null)
        {
            console.log("Heap Overflow");
            return;
        }

        temp.data = x;
        
        //push the refrence into temp data field
        temp.link = this.top;

        //update top refrence
        this.top = temp;
    }

    isEmpty()
    {
        return this.top == null;
    }

    //return top element
    peek(){
        //check stack is empty or not
        if(!this.isEmpty())
        {
            return this.top.data;
        }
        else
        {
            console.log("Stack is empty");
            return -1;
        }
    }

    //remove an element from beginning
    pop()
    {
        //stack underflow checking
        if(this.top == null)
        {
            console.log("stack is underflow");
            return;
        }

        //update the top pointer
        this.top = this.top.link;
    }

    //Display the stack
    display()
    {
        if(this.top == null)
        {
            console.log("Stack underflow");
        }
        else
        {
            let temp = this.top;
            while(temp != null)
            {
                console.log(temp.data + " -> ");
                temp = temp.link;
            }
        }
    }
}

//driver Class

//Create an object
let obj = new StackUsingLinkedList();

//insert the value
obj.push(11);
obj.push(22);
obj.push(33);
obj.push(44);

//Print the stack
obj.display();

//Print the element of the stack
let higher = obj.peek();
console.log(higher);

//delete an elements
obj.pop();
obj.pop();

obj.display();

higher = obj.peek();
console.log(higher);