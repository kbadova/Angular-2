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
var tutorial_component_1 = require('../tutorial.component/tutorial.component');
var hero_service_1 = require('./hero.service');
var HeroComponent = (function () {
    function HeroComponent() {
        this.hero = {
            id: 1,
            name: "krasi"
        };
        this.title = (new tutorial_component_1.TutorialComponent()).title;
        this.heroService = new hero_service_1.HeroService();
        this.HEROES = this.heroService.getHeroes();
    }
    HeroComponent.prototype.onSelect = function (heroo) {
        this.selectedHero = heroo;
    };
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'hero-component',
            providers: [hero_service_1.HeroService],
            template: "\n    <h1>{{title}}</h1>\n    <h2>{{hero.name}} details!</h2>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div>\n        <label>name: </label>\n        <input value=\"{{hero.name}}\" placeholder=\"name\">\n    </div>\n\n    <p>/////////////</p>\n    <h2>My Heroes</h2>\n        <ul class=\"heroes\">\n          <li *ngFor=\"let heroo of HEROES\" (click)=\"onSelect(heroo)\">{{heroo.name}}</li>\n              <div *ngIf=\"selectedHero\">\n                <h2>{{selectedHero.name}} details!</h2>\n                  <div ><label>id: </label>{{selectedHero.id}}</div>\n                  <div>\n                    <label>name: </label>\n                    <input value=\"{{selectedHero.name}}\" placeholder=\"name\"/>\n                  </div>\n              </div>\n        </ul>\n    ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map