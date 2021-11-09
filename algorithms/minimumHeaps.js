// parent has to be less than its children
// It is faster to search through a heap as you have less data to check to get to the desired index
// to find the parent index of ANY child, you divide the index of the child by 2 and Math.floor(it)

class Heap{
    constructor(){
        this.heap = [null]
    }

    insert(val){
        this.heap.push(val);
        let current = this.heap.length - 1
        let parent = Math.floor(current/2)

        while(this.heap[parent]>this.heap[current] && parent !== 0){
            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]]
            current = parent
            parent = Math.floor(current/2)
        }
    }
}


heap1 = new Heap()
heap1.insert(10)
heap1.insert(5)
heap1.insert(38)
heap1.insert(3)
heap1.insert(-3)


console.log(heap1)