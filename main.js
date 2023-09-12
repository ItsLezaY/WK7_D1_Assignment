//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool. Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

function matchedDogName(dogString, dogNames) {
    let isMatched = false;

    for (let i = 0; i < dogNames.length; i++) {
        let currentName = dogNames[i];
        if (dogString.includes(currentName)) {
            isMatched = true;
            console.log("Matched " + currentName);
        }
    }

    if (isMatched) {
        console.log("Sassy.. thats a damn cat");
    } else {
        console.log("No Matches");
    }
}

matchedDogName(dogString, dogNames);



//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

function removeEvenIndex(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"];
let modifiedArray = removeEvenIndex(arr);

console.log(modifiedArray);

// Bonus: Trunks = Burning Attack, Goku = Spirit Bomb, Gohan = Ultimate Kamehameha

function replaceWithSignatureMove(arr) {
    const signatureMoves = {
        "Trunks": "Burning Attack",
        "Goku": "Spirit Bomb",
        "Gohan": "Ultimate Kamehameha"
    };

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 0 && signatureMoves[arr[i]]) {
            arr[i] = signatureMoves[arr[i]];
        }
    }
    return arr;
}

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"];
let modifiedArray = replaceWithSignatureMove(arr);

console.log(modifiedArray);
