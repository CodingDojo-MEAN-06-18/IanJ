function insertIntoHeap(heap, val) {
    heap[0] = undefined;
    var length = heap.length;
    heap.push(val);
    parent = Math.trunc(length/2);

    while (length != 1) {
        if (heap[parent] > heap[length]){
            heap[length] = heap[parent];
            length = parent;
            heap[parent] = val;
            parent = Math.trunc(length/2);
        }
        else {
            break;
        }
    }
    console.log(heap);
}
insertIntoHeap([], 13);  // alters the empty array to be [undefined, 13]
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7);
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 13);