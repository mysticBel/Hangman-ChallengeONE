let guessedWordCategory, guessedWordRandomPicked; 
let listRandomWords = [];
let attempts = 0;

const listWords = [
    word1 = {
        name: "cookie",
        category: "sweet - food"
    },
    word2 = {
        name: "marshmellow",
        category: "sweet - food"
    },
    word3 = {
        name: "muffin",
        category: "sweet - food"
    }
]

function isChosenKey(key) {
    document.getElementById("key-" + key).disabled = true;
    if (attempts > 0) {
        changeKeyStyle("key-" + key);
        compareKeys(key);
        printKey();
    }

}

function  changeKeyStyle(key) {
    document.getElementById(key).style.background = "#C71585";
    document.getElementById(key).style.color = "#ffffff";
}

function compareKeys(key){
    const position = guessedWordRandomPicked.indexOf(key);
    if (position < 0){
        attempts--
        appearBodyParts();

        if(attempts == 0){
            openModal('Sorry... 😞, The correct word was <br>'+ guessedWordRandomPicked);
        }
    } else {
        for (let i = 0; i < guessedWordRandomPicked.length; i++){
            if (guessedWordRandomPicked[i]== word){
                listWords[i] = word;
            }
        }
    }
};

// Reload
let btnReset = document.querySelector("#btnReset")
btnReset.addEventListener("click", function () {
    location.reload();
});