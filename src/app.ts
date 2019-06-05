// const angular = require('angular');
import angular from 'angular';
import * as material from 'angular-material';
import 'angular-material/angular-material';
import MainCtrl from './controller/mainCtrl';
const app = angular.module('mySuperAwesomeApp', []);

app.controller('mainCtrl', MainCtrl);
