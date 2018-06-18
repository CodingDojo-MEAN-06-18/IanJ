function removeFromMinHeap(heap) {
    if (heap.length == 2) {
        console.log(heap.pop());
    }
    var i = 1;
    var temp = heap[i];

    heap[i] = heap[heap.length - 1];
    heap[heap.length - 1] = temp;

    var x = heap.pop();
    var y = heap[i * 2] < heap[i * 2 + 1] ? i * 2 : i * 2 + 1;

    while (heap[i] > heap[y]) {
        var temp = heap[i];
        heap[i] = heap[y];
        heap[y] = temp;
        i = y;
        y = heap[i * 2] < heap[i * 2 + 1] ? i * 2 : i * 2 + 1;
    }
    console.log(x);
}

removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]);
    // changes the heap to [undefined, 8, 12, 10, 17, 13, 15] and returns 3copy
removeFromMinHeap([undefined, 8]);
    // changes the heap to [undefined] and returns 8