import * as angular from 'angular';
import datePickerComponent from './datePicker.component';

export default angular.module('home', []).component('home', datePickerComponent)
  .name;
