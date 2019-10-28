function isAnagram(str1, str2) {
    let first = str1.replace(/[^\w]/g, '').split("").sort().join().toLowerCase();
    let second = str2.replace(/[^\w]/g, '').split("").sort().join().toLowerCase();
    if(first !== second) return false;
    return true;
}

console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'lo e@lh'));
