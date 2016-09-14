import { Component } from '@angular/core';
import {} from 'app/test_main.ts'


@Component({
    selector: "word-game",
    template: 
    '<p>WordGame</p>'



})

export class WordGame{
    myString:string[];

    constructor(){
        this.myString = ["word1", "word45e"];
    }
}