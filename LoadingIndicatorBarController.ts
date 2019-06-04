import angular from "angular";

export class LoadingIndicatorBarController {

  public static $inject: string[] = ["$timeout"];

  private $element: ng.IAugmentedJQuery;
  private $loading: ng.IAugmentedJQuery;

  /**
   * Create the loading bar controller.
   *
   * @class LoadingIndicatorBarController
   * @param $timeout {ng.ITimeoutService} The $timeout service.
   * @constructor
   */
  constructor(
    private $timeout: ng.ITimeoutService
  ) { }

  /**
   * Initialize the controller.
   *
   * @class LoadingIndicatorBarController
   * @method init
   * @param $element {ng.IAugmentedJQuery} The JQuery instance members.
   * @return {ILoadingIndicatorController} Self for chaining.
   */
  public init($element: ng.IAugmentedJQuery): ILoadingIndicatorController {
    //store reference the $element in this scope
    this.$element = $element;

    //create container element
    var container: ng.IAugmentedJQuery = angular.element("<div class=\"loading-container\">");

    //append loading indicator bar
    this.$loading = angular.element("<div class=\"loading\">");
    container.append(this.$loading);

    //append container
    this.$element.append(container);

    return this;
  }

  /**
   * Hide the loading bar.
   *
   * @class LoadingIndicatorBarController
   * @method hide
   * @return {ILoadingIndicatorController} Self for chaining.
   */
  public hide(): ILoadingIndicatorController {
    this.$loading.css({
      opacity: 0
    });
    this.$timeout(() => {
      this.$element.addClass("ng-hide");
    }, 500);
    return this;
  }

  /**
   * Set the width of the bar.
   *
   * @class LoadingIndicatorBarController
   * @method setWidth
   * @param width {number} The percentage width of the loading indicator bar.
   * @return {ILoadingIndicatorController} Self for chaining.
   */
  public setWidth(width: number): ILoadingIndicatorController {
    this.$loading.css({ width: `${width}%` });
    return this;
  }

  /**
   * Show the loading indicator.
   *
   * @class LoadingIndicatorBarController
   * @method show
   * @return {ILoadingIndicatorController} Self for chaining.
   */
  public show(): ILoadingIndicatorController {
    this.$element.removeClass("ng-hide");
    this.$loading.css({ opacity: 1 });
    return this;
  }
}