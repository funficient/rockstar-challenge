function card(type, title, description) {
    this.type = type;
    this.title = title;
    this.description = description;
        
}

var deck = [
    new card('People', 'When you come across someone who seems really miserable, find a way to put a smile on their face.'),
    new card('People', 'Make someone smile', 'When you come across someone who seems really miserable, find a way to put a smile on their face.'),
    new card('People', 'Give a compliment', 'Next time you interact with someone, give them an honest compliment.'),
    new card('Earth', 'Pick up garbage', 'Pick up one piece of garbage and put it in a bin.'),
    new card('Earth', 'Opt for no plastic', 'Next time when you go to the supermarket or shop, opt for no plastic.  Either carry it in your hands, or bring your own bag.'),
    new card('People', 'Be of service', 'Next time you spot someone in need, offer to help.'),
    new card('People', 'Say thank you', 'Find something to say thank you to.'),
    new card('People', 'Smile', 'When you walk past a stranger, smile friendly at them.'),
]

function getRandom(number) {
    var randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

document.getElementById("shuffle").onclick = function(){
    var index = getRandom(7);
    var currentCard = deck[index];

    document.getElementById("display").innerHTML = '<h3>' + currentCard.type + '</h3><h2>' + currentCard.title + '</h2><p>' + currentCard.description + '</p>';
};
