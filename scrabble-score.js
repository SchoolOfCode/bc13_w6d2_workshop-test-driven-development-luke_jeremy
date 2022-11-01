export function calculateScrabbleScore(word) {
    const scoreOneArr = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"]
    if (scoreOneArr.includes (word)) {
        return 1
    } else if (word === "K"){
        
            return 5
        } else if (word === "D" || word === "G") {
            return 2}
        }
