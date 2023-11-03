class Qnode{
    constructor(key)
    {
        this.key = key;
        this.next = null;
    }
}

let front = null, rear = null;

function equeue(key)
{
    //create a node
    let temp = new Qnode(key);

    if(rear == null)
    {
        front = rear = temp;
        return;
    }

    //add new node to the end of the queue
    rear.next = temp;
    rear = temp;
}

function dequeue()
{
    if(front == null)
    {
        return;
    }

    //store previous front and move front one node ahed
    let temp = front;
    front = front.next;

    //If front become NULL the change rear also as NULL
    if(front == null)
    {
        rear = null;
    }
}

//driver Code

equeue(10);
equeue(20);
dequeue();
dequeue();
equeue(30);
equeue(40);
equeue(50);
dequeue();

let qFront = (front != null) ? (front).key : -1;
let qRear = (rear != null) ? (rear).key : -1;

console.log(qFront);
console.log(qRear);