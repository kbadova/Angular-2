import { Component } from '@angular/core';

@Component({
    selector: 'tutorial-component',
    template:'<p>Tutorialcomponent</p>',

})

export class TutorialComponent{
    title = "Tour of Heroes";
    hero = "Windtorm";
}