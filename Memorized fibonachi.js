// Requirement: from the given index calculate all previous values

function fibonachi(index, memory) {
    memory = memory || [];
    if (memory[index]) return memory[index]
    else {
        if (index < 3) return 1
        else {
            memory[index] = fibonachi(index - 1, memory) + fibonachi(index - 2, memory)
        }
    }

    return memory[index];
};

console.log(fibonachi(6))