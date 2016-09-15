import { Component } from '@angular/core';
import { DataSource } from '../../test_main';

@Component({
    selector: "word-game",
    template: 
    `<p>WordGame</p>
    <div>random word from list <b> {{data.words}} </b> is : {{ randomWord }} index : {{index}}</div>
    <div>Number hidden letters is  <b> {{ numberHiddenLetters }} </b></div>
    <div>Distinct letters  <b> {{ distinctLettersInWord }} </b></div>
    <div>Remplaced word is  <b> {{ replacedWord  }} </b></div>
    <div>You can pick up from these letters:  <b> {{ allLettersYouCanPickUpFrom }} </b></div>
    `



})

export class WordGame{
    randomWord: string;
    numberHiddenLetters: number;
    numberUniqueLetters: number;
    replacedWord: string;
    distinctLettersInWord: number;
    randomLetters: string[]=[];
    allLettersYouCanPickUpFrom: string[];

    data: DataSource;

    index: number;

    constructor(){
        this.data = new DataSource();
        this.randomWord = this.pickRandomWord();
        this.numberHiddenLetters = this.pickNumberHiddenLetters();
        this.distinctLettersInWord = this.getdistinctLettersInWord();
        this.replacedWord = this.getReplacedWord();
        this.allLettersYouCanPickUpFrom = this.getRandomLetters();
    }

    pickRandomWord(): string{
        this.index = Math.floor(Math.random() * this.data.words.length);
        return this.data.words[this.index]
    }
    pickNumberHiddenLetters(): number{
        return Math.floor((Math.random() * this.data.words.length ) + 1)
        }
    getReplacedWord(): string{
        var index = 0;
        while( index <  this.numberHiddenLetters){
            var randomPosition = Math.floor(Math.random() * this.distinctLettersInWord);
            console.log(randomPosition);
            var letter = this.randomWord.charAt(randomPosition);
            if ( this.randomWord.charAt(randomPosition) == "_"){
                continue;
            }
            this.randomLetters.push(letter);
            this.randomWord = this.randomWord.replace(letter, "_");
            index = index + 1;
         }
        return this.randomWord
    }
    getdistinctLettersInWord(): number{
        var counter = 0;
        for (var i = 0; i < this.randomWord.length; i++){
            for (var j = i + 1; j < this.randomWord.length - 1; j++){
                if (this.randomWord[i] == this.randomWord[j]){
                    counter = counter + 1;
                }
            }
        }
        return this.randomWord.length - counter
    }
    getRandomLetters(): string[]{
        var letters = this.data.letters
        var index = 0;
        while( index < (8 - this.numberHiddenLetters) ){
            this.randomLetters.push(letters[Math.floor(Math.random() * letters.length)]);
            index += 1;
        } 
        return this.randomLetters
    }
}

