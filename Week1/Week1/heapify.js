function heapify(arr){
    heap = [];
    arr.push(arr[0]);
    arr[0] = undefined;

    if (arr.length > 0) {
        for (let i = arr.length - 1; i > 0; i--){
            if (arr[i] === undefined) {
                heap = arr;
                return heap;
            }
            let parent_index = Math.trunc(i / 2); 
            let parent = arr[parent_index]; 
            let child = arr[i]; 
            let child_index = i; 
            while (child < parent) {
                arr[parent_index] = child
                arr[child_index] = parent
                parent_index = Math.trunc(parent_index / 2);
                parent = arr[parent_index];
                child = arr[(parent_index * 2)+1];
                child_index = (parent_index * 2)+1;
            }
        }
    }
    heap = arr;
    return(arr);
}

console.log(heapify([20, 3, 8, 14, 9, 6, 2]));
