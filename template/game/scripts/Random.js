function randomPermutation(array){
    permutated_array = []
    while(array.length > 0){
        idx = Math.floor(Math.random()*array.length)
        permutated_array.push(array[idx])
        array.splice(idx,1)
    }
    return permutated_array
}
