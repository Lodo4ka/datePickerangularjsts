import * as angular from 'angular';
import * as ngAnimate from 'angular-animate';
import * as ngAria from 'angular-aria';
import * as ngMaterial from 'angular-material';
import 'angular-material/angular-material.scss';

angular.module('app', [ngAnimate, ngAria, ngMaterial]);
angular.bootstrap(document, ['app']);
