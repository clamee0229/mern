//helper function Partition--> goal is to pick a number at the end of the array, and arrange the array so that there is this element has everything that is less than it to the left (doesn't have to be ordered) and everything greater than it to the right (doesnt have to be ordered)
const partition = (arr, start=0, end = arr.length-1)=>{ //when integrating this with quicksort, you'll need to give default parameters
    
}

//[7,3,4,9,0,2,5]
//select a element at the end (this element is called out pivot number) --(5)
//go from left to right and count how many elements are less than the pivot, and whenever an element that is less than the pivot is found, swap the current value with the index of numless
//[3,7,4,9,0,2,5]
//[3,4,7,9,0,2,5]
//[3,4,0,9,7,2,5]
//[3,4,0,2,7,9,5]
//[3,4,0,2,5,9,7]
//return back the index number that the pivot number ended up in->4




//numless = 0->1->2->3->4

const quicksort = (arr)=>{
    
}