class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

//this function only for Empty list
function addToEmpty(last, data) {
  if (last != null) {
    return last;
  }

  //create node dynamically
  var temp = new Node();

  //assign the data
  temp.data = data;
  last = temp;

  //create the link
  last.next = last;
  return last;
}

function addBegin(last, data) {
  if (last == null) {
    return addToEmpty(last, data);
  }
  var temp = new Node();
  temp.data = data;
  temp.next = last.next;
  last.next = temp;
  return last;
}

function addEnd(last, data)
{
    if(last == null)
    {
        return addToEmpty(last, data);
    }

    var temp = new Node();
    temp.data = data;
    temp.next = last.next;
    last.next = temp;
    last = temp;
    return last;
}

function addAfter(last, data, item)
{
    if(last == null)
    {
        return null;
    }

    var temp, p;
    p = last.next;
    
    do{
        if(p.data == item)
        {
            temp = new Node();
            temp.data = data;
            temp.next = p.next;
            p.next = temp;

            if(p == last)
            {
                last = temp;
            }
            return last;
        }
        p = p.next;
    }while(p != last.next);
    console.log(item + " not present in the list");
    return last;
}

function travese(last)
{
    var p;

    //if list is empty, return
    if(last == null)
    {
        console.log("List is empty.");
        return;
    }
    //Pointing to first node of list
    p = last.next;

    //Traversing the list
    do{
        console.log(p.data + " ");
        p = p.next;
    }while(p != last.next);
}

//driver code
var last = null;
last = addToEmpty(last, 6);
last = addBegin(last, 4);
last = addBegin(last, 2);
last = addToEmpty(last, 8);
last = addEnd(last, 8);
last = addEnd(last, 12);
last = addAfter(last, 10, 8);
travese(last);