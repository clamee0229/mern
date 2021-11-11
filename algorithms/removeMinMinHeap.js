class Heap{
    constructor(){
        this.heap = [null]
    }

    insert(val){
        //push the value into the heap, inserting it initially at the last index
        this.heap.push(val);
        

        //calculate the index of the current new value inserted
        let current = this.heap.length-1
        //calculate the parent from the current index
        let parent = Math.floor(current/2)

        //check if the value at the parent index is greater than the value at the current index of our new value
        while(this.heap[parent] > this.heap[current]){
            //if the value at the parent is greater than the value at the current, then we need to swap
            [this.heap[parent], this.heap[current]]=[this.heap[current],this.heap[parent]]

            //update the pointers to current and parent indexes 
            current = parent
            parent = Math.floor(current/2)

            //edge case for negative numbers
            if(this.heap[current]<0 && this.heap[parent]==null){
                break
            }

        }




        return this;
    }


    //add the method remove() to the heap class from Tuesday where it removes the minimum value in the heap. This method always takes out the smallest value from the min heap (index 1 since index 0 is null)-> going to remove and return that value. Upon removing the min value though, it will disorganize the heap, so you also have to reorganize the heap so it follows rules of a min heap where the parent is smaller than the children
    remove(){
        //first- swap the min value (index 1) with the value (at the last index of the heap)
        [this.heap[1], this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1], this.heap[1]]
        //pop out the last value
        let result = this.heap.pop()
        //rearrange the heap
        let parentIndex = 1
        while(this.heap[parentIndex*2] < this.heap[parentIndex] ||  this.heap[parentIndex*2 + 1] < this.heap[parentIndex]){
            let swapIndex
            if(this.heap[parentIndex*2] < this.heap[parentIndex*2 + 1] || this.heap[parentIndex*2 + 1] == undefined){
                swapIndex = parentIndex * 2
            }
            else{
                swapIndex = parentIndex * 2 + 1
            }
            [this.heap[parentIndex], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[parentIndex]]
            parentIndex = swapIndex
        }
        return result
    }

}


heap1 = new Heap()


heap1.insert(10).insert(5).insert(38).insert(3).insert(-3).insert(2.4).insert(20)
console.log(heap1)
let arr = []
arr.push(heap1.remove())
console.log(heap1)

arr.push(heap1.remove())
console.log(heap1)

arr.push(heap1.remove())
console.log(heap1)

arr.push(heap1.remove())
console.log(heap1)

arr.push(heap1.remove())
console.log(heap1)

arr.push(heap1.remove())
console.log(heap1)

arr.push(heap1.remove())

console.log(heap1)
console.log(arr)
