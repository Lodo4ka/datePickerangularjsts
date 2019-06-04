"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loading_indicator_bar_1 = require("./loading-indicator-bar");
var angular_1 = __importDefault(require("angular"));
var HEROS = [
    { id: 11, name: "Mr. Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" }
];
//
var HerosComponentController = /** @class */ (function () {
    function HerosComponentController() {
        this.heros = HEROS;
    }
    HerosComponentController.prototype.$onInit = function () {
        this.heros = HEROS;
    };
    return HerosComponentController;
}());
//
var HerosComponent = /** @class */ (function () {
    function HerosComponent() {
        this.controller = HerosComponentController;
        this.controllerAs = "$ctrl";
        this.template = "\n        <ul>\n          <li ng-repeat=\"hero in $ctrl.heros\">{{ hero.name }}</li>\n        </ul>\n      ";
    }
    return HerosComponent;
}());
angular_1.default.module("mySuperAwesomeApp", []).component("heros", new HerosComponent());
angular_1.default.module("mySuperAwesomeApp").directive("loadingIndicatorBar", loading_indicator_bar_1.LoadingIndicatorBarDirective.Factory());
// angular.element(document).ready(function () {
//   angular.bootstrap(document, ["mySuperAwesomeApp"]);
// });
//# sourceMappingURL=script.js.map