"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var test_main_1 = require('../../test_main');
var WordGame = (function () {
    function WordGame() {
        this.randomLetters = [];
        this.data = new test_main_1.DataSource();
        this.randomWord = this.pickRandomWord();
        this.numberHiddenLetters = this.pickNumberHiddenLetters();
        this.distinctLettersInWord = this.getdistinctLettersInWord();
        this.replacedWord = this.getReplacedWord();
        this.allLettersYouCanPickUpFrom = this.getRandomLetters();
    }
    WordGame.prototype.pickRandomWord = function () {
        this.index = Math.floor(Math.random() * this.data.words.length);
        return this.data.words[this.index];
    };
    WordGame.prototype.pickNumberHiddenLetters = function () {
        return Math.floor((Math.random() * this.data.words.length) + 1);
    };
    WordGame.prototype.getReplacedWord = function () {
        var index = 0;
        while (index < this.numberHiddenLetters) {
            var randomPosition = Math.floor(Math.random() * this.distinctLettersInWord);
            console.log(randomPosition);
            var letter = this.randomWord.charAt(randomPosition);
            if (this.randomWord.charAt(randomPosition) == "_") {
                continue;
            }
            this.randomLetters.push(letter);
            this.randomWord = this.randomWord.replace(letter, "_");
            index = index + 1;
        }
        return this.randomWord;
    };
    WordGame.prototype.getdistinctLettersInWord = function () {
        var counter = 0;
        for (var i = 0; i < this.randomWord.length; i++) {
            for (var j = i + 1; j < this.randomWord.length - 1; j++) {
                if (this.randomWord[i] == this.randomWord[j]) {
                    counter = counter + 1;
                }
            }
        }
        return this.randomWord.length - counter;
    };
    WordGame.prototype.getRandomLetters = function () {
        var letters = this.data.letters;
        var index = 0;
        while (index < (8 - this.numberHiddenLetters)) {
            this.randomLetters.push(letters[Math.floor(Math.random() * letters.length)]);
            index += 1;
        }
        return this.randomLetters;
    };
    WordGame = __decorate([
        core_1.Component({
            selector: "word-game",
            template: "<p>WordGame</p>\n    <div>random word from list <b> {{data.words}} </b> is : {{ randomWord }} index : {{index}}</div>\n    <div>Number hidden letters is  <b> {{ numberHiddenLetters }} </b></div>\n    <div>Distinct letters  <b> {{ distinctLettersInWord }} </b></div>\n    <div>Remplaced word is  <b> {{ replacedWord  }} </b></div>\n    <div>You can pick up from these letters:  <b> {{ allLettersYouCanPickUpFrom }} </b></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], WordGame);
    return WordGame;
}());
exports.WordGame = WordGame;
//# sourceMappingURL=wordGame.component.js.map