function countVowels() {
    let sentence = prompt("Please enter a sentence:");
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) !== -1) {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels: " + countVowels());
