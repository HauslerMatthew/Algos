class ArrStack { //creating a new class object
    constructor() { //constructor start code
        this.contents = []; //this object has a key called contents that is a blank array
    }

    sampleMethod() {
        console.log(this.contents); //show me whats in contents in the console (using a method within the class)
        console.log("hello!");
    }

    push(value) {
        this.contents.push(value); //add a new value to contents
    }

    pop()   {
        if (this.isEmpty()) {
            return null; //if contents is empty, return null
        }
        return this.contents.pop(); //remove last value from contents
    }

    front() {
        if (this.contents.length == 0) {
            return null;
        }
        return this.contents[this.contents.length - 1]; //show me the last value in contents
    }

    contains(value) { //confirm if a value exists in contents
        for (var i = 0; i<this.contents.length; i++){
            if (this.contents[i] == value){
                return true; 
            }
        }
        return false;
    }


    isEmpty() { //check if contents is empty
        if (this.contents.length == 0){
            return true;
        }
        return false;
    }


    size() { //return the size of contents, aka length
        return this.contents.length;
    }

}

x = new ArrStack(); //instantiate a new variable that is the arrStack class
console.log(x.isEmpty());
x.push(1);
x.push(2);
x.push(3);
x.sampleMethod();
x.pop();
console.log(x.front());
console.log(x.contains(2));
console.log(x.contains(3));
console.log(x.isEmpty());
console.log(x.size());
