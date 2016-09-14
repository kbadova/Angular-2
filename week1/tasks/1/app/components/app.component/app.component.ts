import { Component } from '@angular/core';

@Component({
    selector:'application',
    template:
    `<p>Heloooosfcdsc</p>
    <word-game></word-game>
    <tutorial-component></tutorial-component>
    <hero-component></hero-component>
    `
})

export class App{
    name:string;

    constructor(){
        this.name = 'AppComponent';
    }
}
