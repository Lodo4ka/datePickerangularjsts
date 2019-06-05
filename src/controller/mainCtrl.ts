import MainServices from '../services/mainServices';
export default class MainCtrl {
  something: string;
  myDate: Date;
  isOpen: boolean;
  onDateChanged: Function;

  static inject: Array<string> = [];
  constructor($log: ng.ILogService) {
    this.something = 'ffds';
    this.myDate = new Date();
    this.isOpen = false;
    this.onDateChanged = () => {
      $log.log('Updated Date: ', this.myDate);
    };
  }
}
