 let stack = function(){
    this.size=0;
    this.storage={}

    this.push= function(value){
        this.storage[this.size]= value;
        this.size++; 
    }

    this.pop =function(){
        if (this.size===0){
            return undefined
        }
        this.size--
        result = this.storage[this.size]
        delete this.storage[this.size]
        return result
    }
    this.peek = function(){
        return this.storage[this.size-1]
    
    }
    this.count = function(){
        return this.size;
    }

 }
  
 let stack1 = new stack
 stack1.push(4)
 stack1.push(5)
 stack1.push(6)
 console.log(stack1.pop())
 console.log(stack1.peek())
  

 