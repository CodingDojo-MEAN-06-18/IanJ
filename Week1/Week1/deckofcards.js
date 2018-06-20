class Deck {
    constructor() {
        this.deck = [];
    }
    //Create deck by combining a suit with a value
    reset() {
        this.deck = [];
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push(`${ value } of ${ suit }`);
            }
        }
        return this;
    }
    //randomly select element while there are elements and switch with current card
    shuffle() {
        let s = this.deck.length, t, i;
        while (s) {
            i = Math.floor(Math.random() * s--);
            t = this.deck[s];
            this.deck[s] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }
    deal() {
        return this.deck.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }
    discard() {
        this.hand.pop();
        return this;
    }
}

const deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);

const player2 = new Player("Jim");
player2.draw(deck1).draw(deck1);
console.log(player2);
console.log(deck1);