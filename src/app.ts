import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import moment from 'moment';
import MainCtrl from './controller/mainCtrl';
angular
  .module('mySuperAwesomeApp', ['ngMaterial', 'ngMessages'])
  .config(
    ($mdDateLocaleProvider: {
      formatDate: (date: Date) => string;
      parseDate: (dateString: string) => Date;
    }) => {
      $mdDateLocaleProvider.formatDate = function(date: Date) {
        return date ? moment(date).format('L') : '';
      };
      $mdDateLocaleProvider.parseDate = function(dateString: string) {
        var m = moment(dateString, 'L', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
      };
    }
  )
  .controller('mainCtrl', MainCtrl);
