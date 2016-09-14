import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './components/app.component/app.component';
import { WordGame } from './components/wordGame.component/wordGame.component';
import { TutorialComponent } from './components/tutorial.component/tutorial.component';
import { HeroComponent } from './components/hero.component/hero.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ App, WordGame, TutorialComponent, HeroComponent],
    bootstrap: [ App ]
}) export class AppModule {                                                                        

}