const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 5610;

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(express.json());

const ran_words = {
    adjective: ["brave", "mysterious", "sneaky", "fearless"],
    noun: ["sword", "castle", "treasure", "dragon"],
    verb: ["explore", "discover", "battle", "defend"],
    verbIng: ["exploring", "discovering", "battling", "defending"],
    pluralNoun: ["creatures", "monsters", "warriors", "heroes"],
    place: ["cave", "forest", "mountain", "island"],
    heroName: ["Aria", "Finn", "Luna", "Jasper"],
    magicalItem: ["amulet", "ring", "potion", "staff"],
};

app.get('/generate', (req, res) => {
    const { adjective, noun, verb, verbIng, pluralNoun, place, heroName, magicalItem } = req.query;
    const story = `Random Story: <br>Once upon a time in a ${adjective} ${place}, there was a hero named ${heroName}. They had a magical ${noun} that could ${verb}. While ${verbIng}, they encountered ${pluralNoun} and fought bravely. In the end, they found a ${magicalItem} and became a legend.`;
    res.json({ Story: story });
});

app.get('/clear', (req, res) => {
    res.json({
        adjective: "",
        noun: "",
        verb: "",
        verbIng: "",
        pluralNoun: "",
        place: "",
        heroName: "",
        magicalItem: ""
    });
});

app.get('/fill', (req, res) => {
    const randomIndex = Math.floor(Math.random() * ran_words.adjective.length);
    res.json({
        adjective: ran_words.adjective[randomIndex],
        noun: ran_words.noun[randomIndex],
        verb: ran_words.verb[randomIndex],
        verbIng: ran_words.verbIng[randomIndex],
        pluralNoun: ran_words.pluralNoun[randomIndex],
        place: ran_words.place[randomIndex],
        heroName: ran_words.heroName[randomIndex],
        magicalItem: ran_words.magicalItem[randomIndex]
    });
});

app.listen(port, 'sohailmadlib.azurewebsites.net',() => {
    console.log(`Server running at http://sohailmadlib.azurewebsites.net:${port}`);
});
