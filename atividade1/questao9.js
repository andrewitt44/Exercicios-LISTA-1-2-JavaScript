let array = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512, 96, 12, 4, 79];

function bubbleSort() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            let v1 = array[i]
            let v2 = array[i + 1]
            array[i] = v2
            array[i + 1] = v1
        }
    }
}

for (let j = 0; j < array.length; j++) {
    bubbleSort();
}

console.log(array)
