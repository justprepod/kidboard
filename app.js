let animals = [
    { word: "барсук", image: "badger.jpg" },
    { word: "кабан", image: "boar.jpg" },
    { word: "бык", image: "bull.jpg" },
    { word: "кот", image: "cat.jpg" },
    { word: "верблюд", image: "camel.jpg" },
    { word: "утка", image: "duck.jpg" },
    { word: "слон", image: "elephant.jpg" },
    { word: "лиса", image: "fox.jpg" },
    { word: "бегемот", image: "hippopotamus.jpg" },
    { word: "игуана", image: "iguana.jpg" },
    { word: "мышь", image: "mouse.jpg" },
    { word: "кобра", image: "cobra.jpg" },
    { word: "мангуст", image: "mongoose.jpg" },
    { word: "страус", image: "ostrich.jpg" },
    { word: "енот", image: "racoon.jpg" },
    { word: "кролик", image: "rabbit.jpg" },
    { word: "белка", image: "squirrel.jpg" },
    { word: "крыса", image: "rat.jpg" },
    { word: "тигр", image: "tiger.jpg" },
    { word: "волк", image: "wolf.jpg" },
    { word: "зебра", image: "zebra.jpg" },
    { word: "курица", image: "hen.jpg" },
    { word: "павлин", image: "peacock.jpg" },
    { word: "гриф", image: "vulture.jpg" },
    { word: "сом", image: "catfish.jpg" },
    { word: "краб", image: "crab.jpg" },
    { word: "рак", image: "lobster.jpg" },
    { word: "жираф", image: "giraffe.jpg" },
    { word: "рысь", image: "bobcat.jpg" },
    { word: "пантера", image: "panther.jpg" },
    //{ word: "лось", image: ".jpg" },
    //{ word: "баран", image: ".jpg" },
    //{ word: "антилопа", image: ".jpg" },
    //{ word: "кит", image: ".jpg" },
    //{ word: "кукушка", image: ".jpg" },
    //{ word: "гусь", image: ".jpg" },
    //{ word: "аист", image: ".jpg" },
    //{ word: "муравей", image: ".jpg" },
    //{ word: "шмель", image: ".jpg" },
    //{ word: "таракан", image: ".jpg" },
    //{ word: "паук", image: ".jpg" },
    ];

let fruits = [
    { word: "абрикос", image: "apricot.jpg" },
    { word: "ананас", image: "pineapple.jpg" },
    { word: "баклажан", image: "aubergine.jpg" },
    { word: "банан", image: "banana.jpg" },
    { word: "вишня", image: "cherry.jpg" },
    { word: "гранат", image: "pomegranate.jpg" },
    { word: "груша", image: "pear.jpg" },
    { word: "дыня", image: "melon.jpg" },
    { word: "ежевика", image: "blackberry.jpg" },
    { word: "изюм", image: "raisins.jpg" },
    { word: "кабачок", image: "zucchini.jpg" },
    { word: "капуста", image: "cabbage.jpg" },
    { word: "картошка", image: "potato.jpg" },
    { word: "киви", image: "kiwi.jpg" },
    { word: "клубника", image: "strawberry.jpg" },
    { word: "кукуруза", image: "corn.jpg" },
    { word: "курага", image: "kuraga.jpg" },
    { word: "лимон", image: "lemon.jpg" },
    { word: "личи", image: "lychee.jpg" },
    { word: "лук", image: "onion.jpg" },
    { word: "малина", image: "raspberry.jpg" },
    { word: "мандарин", image: "tangerine.jpg" },
    { word: "персик", image: "peach.jpg" },
    { word: "салат", image: "lettuce.jpg" },
    { word: "слива", image: "plum.jpg" },
    { word: "тыква", image: "pumkin.jpg" },
    { word: "хурма", image: "persimmon.jpg" },
    { word: "фасоль", image: "beans.jpg" },
    { word: "фейхоа", image: "feijoa.jpg" },
    { word: "финик", image: "date.jpg" },
    { word: "черника", image: "blueberry.jpg" },
    { word: "чеснок", image: "garlic.jpg" },
];


class ImageManager {
    constructor() {
        this.leftGroup = document.querySelector('.left-group');
        this.rightGroup = document.querySelector('.right-group');
    }

    init(names) {
        for (let name of names) {
            let img = new Image();
            img.src = `img/${name.image}`;
            this.rightGroup.appendChild(img);
        }
    }

    pop() {
        let firstImage = this.rightGroup.firstElementChild;
        if (firstImage) {
            this.rightGroup.removeChild(firstImage);
            this.leftGroup.appendChild(firstImage);
        }
    }
}



let words = animals;

let currentRound = 0;
let typedWord = "";
let wordToType = "";
let badLetter = "";
let maxRounds = 7;

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function displayWordAndImage() {
    //let wordIndex = Math.floor(Math.random() * words.length);
    let wordIndex = currentRound % words.length;

    wordToType = words[wordIndex].word;
    typedWord = "";
    badLetter = "";

    document.getElementById("typedWord").textContent = typedWord;
    document.getElementById("badLetter").textContent = badLetter;
    document.getElementById("wordToType").textContent = wordToType;
    document.querySelector(".image-container img").src = `img/${words[wordIndex].image}`;
}

function handleKeyPress(event) {
    const keyPressed = event.key.toUpperCase();

    if (keyPressed === wordToType[0]) {
        typedWord += keyPressed;
        wordToType = wordToType.substring(1);

        document.getElementById("typedWord").textContent = typedWord;
        document.getElementById("wordToType").textContent = wordToType;

        if (wordToType === "") {
            currentRound++;
            imageManager.pop();
            if (currentRound < maxRounds) {
                //wordToType = words[currentRound].word;
                let audio = new Audio('mixkit-achievement-bell-600.wav'); // Provide the correct path to your sound file
                audio.play();
                displayWordAndImage();                
            } else {
                let audio = new Audio('success-fanfare-trumpets-6185.mp3'); // Provide the correct path to your sound file
                audio.play();
            }
        }
    } else {
        event.preventDefault();
        // Change color of incorrectly typed letter to red temporarily
        document.getElementById("badLetter").textContent = keyPressed;
        setTimeout(() => {
            document.getElementById("badLetter").textContent = "";
        }, 500);
    }
}

maxRounds = Math.min(maxRounds, words.length);
shuffle(words);
words = words.map(x => {return {word:x.word.toUpperCase(), image: x.image}});
window.addEventListener("keypress", handleKeyPress);
displayWordAndImage();

const imageManager = new ImageManager();
imageManager.init(words.slice(0, maxRounds));

