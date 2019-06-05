class DateCtrl {
  constructor(private $mdSidenav: ng.material.ISidenavService) {
    this.test = 'some binding';
  }

  test: string;

  $onInit() {
    console.log('homeCtrl.oninit');
  }

  testClick() {
    alert('asdf');
  }

  folders = [
    { title: 'list item 1', icon: 'folder', updated: new Date('1/1/16') },
    { title: 'list item 2', icon: 'folder', updated: new Date('1/1/16') },
    { title: 'list item 3', icon: 'folder', updated: new Date('1/1/16') },
  ];
}

DateCtrl.$inject = ['$mdSidenav'];

export default {
  bindings: {},
  templateUrl: require('./datePicker.html'),
  controller: DateCtrl,
};
